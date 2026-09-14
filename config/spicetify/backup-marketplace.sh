#!/bin/bash
# Backup Spicetify Marketplace installed extensions to ~/.config/spicetify/marketplace_installed.json

BACKUP_FILE="$HOME/.config/spicetify/marketplace_installed.json"
STRINGS=$(strings ~/.cache/spotify/Browser/Local\ Storage/leveldb/* 2>/dev/null | grep "marketplace:installed-extensions" -A 1 | tail -n 1)

if [ -n "$STRINGS" ]; then
    echo "$STRINGS" > "$BACKUP_FILE"
    echo "Saved Marketplace extensions backup to $BACKUP_FILE"
fi
