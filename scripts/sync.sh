#!/usr/bin/env bash
# ==============================================================================
# Astra Dots Bidirectional Sync Helper
# Synchronize configs between live system and dotfiles repository
# ==============================================================================

set -euo pipefail

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Colors
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

info()  { echo -e "${CYAN}[INFO]${NC} $*"; }
ok()    { echo -e "${GREEN}[OK]${NC} $*"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }
error() { echo -e "${RED}[ERROR]${NC} $*"; }

action="${1:-status}"

case "$action" in
    status)
        info "Checking dotfiles repository status..."
        cd "$DOTFILES_DIR"
        git status -s
        ;;
    push)
        info "Syncing live configs into dotfiles repository..."
        # Copy non-symlinked files or updated files safely
        cp -u ~/.config/kitty/kitty.conf ~/.config/kitty/current-theme.conf "$DOTFILES_DIR/config/kitty/" 2>/dev/null || true
        cp -u ~/.config/fastfetch/config.jsonc "$DOTFILES_DIR/config/fastfetch/" 2>/dev/null || true
        cp -u ~/.config/starship.toml "$DOTFILES_DIR/config/" 2>/dev/null || true
        cp -ru ~/.config/matugen/* "$DOTFILES_DIR/config/matugen/" 2>/dev/null || true
        cp -u ~/.config/spicetify/config-xpui.ini "$DOTFILES_DIR/config/spicetify/" 2>/dev/null || true
        cp -u ~/.config/caelestia/shell.json "$DOTFILES_DIR/config/caelestia/" 2>/dev/null || true
        cp -u ~/.config/kglobalshortcutsrc ~/.config/kwinrc ~/.config/kdeglobals "$DOTFILES_DIR/kde/" 2>/dev/null || true
        cp -u ~/.zshrc "$DOTFILES_DIR/home/.zshrc" 2>/dev/null || true
        cp -ru ~/.local/share/sddm-themes/material-you-caelestia/* "$DOTFILES_DIR/sddm/material-you-caelestia/" 2>/dev/null || true

        cd "$DOTFILES_DIR"
        echo ""
        info "Repository diff summary:"
        git status -s
        echo ""
        read -r -p "Commit and push these changes? [y/N] " confirm
        if [[ "$confirm" =~ ^[Yy]$ ]]; then
            read -r -p "Enter commit message: " msg
            if [ -n "$msg" ]; then
                git add -A
                git commit -m "$msg"
                git push origin main
                ok "Pushed to origin main successfully!"
            fi
        fi
        ;;
    pull)
        info "Pulling latest changes from origin..."
        cd "$DOTFILES_DIR"
        git pull origin main
        bash "$DOTFILES_DIR/scripts/install.sh"
        ;;
    *)
        echo "Usage: $0 {status|push|pull}"
        exit 1
        ;;
esac
