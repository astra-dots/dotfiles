#!/bin/bash
set -e

THEME_DIR="/home/anirudh/.local/share/sddm-themes/material-you-caelestia"
TARGET_LINK="/usr/share/sddm/themes/material-you-caelestia"

# Ensure permissions
chmod -R a+rX "$THEME_DIR"

# Create symlink in /usr/share/sddm/themes
ln -sfn "$THEME_DIR" "$TARGET_LINK"

# Update SDDM theme configuration
mkdir -p /etc/sddm.conf.d
if [ -f /etc/sddm.conf.d/kde_settings.conf ]; then
    sed -i 's/^Current=.*/Current=material-you-caelestia/' /etc/sddm.conf.d/kde_settings.conf
fi

cat > /etc/sddm.conf.d/theme.conf << 'EOF'
[Theme]
Current=material-you-caelestia
EOF

echo "SDDM theme applied successfully: material-you-caelestia"
