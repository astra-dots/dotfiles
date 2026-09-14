#!/usr/bin/env bash
# ==============================================================================
# Astra Dots Installer
# Non-destructive dotfiles installer with automatic backup & verification
# ==============================================================================

set -euo pipefail

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKUP_DIR="${HOME}/.dotfiles_backup_$(date +%Y%m%d_%H%M%S)"

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

echo -e "${CYAN}"
cat << 'BANNER'
     _         _                 ____        _       
    / \   ___ | |_ _ __ __ _    |  _ \  ___ | |_ ___ 
   / _ \ / __|| __| '__/ _` |   | | | |/ _ \| __/ __|
  / ___ \\__ \| |_| | | (_| |_  | |_| | (_) | |_\__ \
 /_/   \_\___/ \__|_|  \__,_(_) |____/ \___/ \__|___/
BANNER
echo -e "${NC}"
echo "Astra Dots Installer — Arch Linux + KDE Plasma 6 + Caelestia"
echo "Repository: ${DOTFILES_DIR}"
echo ""

# Helper to link file or directory safely
link_file() {
    local src="$1"
    local dest="$2"

    mkdir -p "$(dirname "$dest")"

    if [ -e "$dest" ] || [ -L "$dest" ]; then
        if [ -L "$dest" ] && [ "$(readlink -f "$dest")" = "$(readlink -f "$src")" ]; then
            ok "Already linked: $dest"
            return
        fi

        mkdir -p "$BACKUP_DIR"
        warn "Backing up existing: $dest -> $BACKUP_DIR/"
        mv "$dest" "$BACKUP_DIR/"
    fi

    ln -sf "$src" "$dest"
    ok "Linked: $dest -> $src"
}

info "Installing user configurations..."

# Configs (~/.config)
link_file "${DOTFILES_DIR}/config/kitty" "${HOME}/.config/kitty"
link_file "${DOTFILES_DIR}/config/fastfetch" "${HOME}/.config/fastfetch"
link_file "${DOTFILES_DIR}/config/starship.toml" "${HOME}/.config/starship.toml"
link_file "${DOTFILES_DIR}/config/matugen" "${HOME}/.config/matugen"
link_file "${DOTFILES_DIR}/config/spicetify" "${HOME}/.config/spicetify"
link_file "${DOTFILES_DIR}/config/btop" "${HOME}/.config/btop"
link_file "${DOTFILES_DIR}/config/yazi" "${HOME}/.config/yazi"
link_file "${DOTFILES_DIR}/config/wireplumber" "${HOME}/.config/wireplumber"
link_file "${DOTFILES_DIR}/config/caelestia/shell.json" "${HOME}/.config/caelestia/shell.json"

# Shell (~/.zshrc)
link_file "${DOTFILES_DIR}/home/.zshrc" "${HOME}/.zshrc"

# KDE Plasma & KWin
link_file "${DOTFILES_DIR}/kde/kglobalshortcutsrc" "${HOME}/.config/kglobalshortcutsrc"
link_file "${DOTFILES_DIR}/kde/kwinrc" "${HOME}/.config/kwinrc"
link_file "${DOTFILES_DIR}/kde/kdeglobals" "${HOME}/.config/kdeglobals"

# SDDM Local User Theme
link_file "${DOTFILES_DIR}/sddm/material-you-caelestia" "${HOME}/.local/share/sddm-themes/material-you-caelestia"

echo ""
if [ -d "$BACKUP_DIR" ]; then
    info "Previous configs safely archived at: ${BACKUP_DIR}"
fi

echo ""
ok "Astra Dots installation complete!"
info "Reload KWin shortcuts with: qdbus6 org.kde.KWin /KWin reconfigure"
