# Troubleshooting and Diagnostic Guide

This document lists diagnostic commands and solutions for common desktop issues.

---

## 1. Caelestia Shell Does Not Start

### Check Service Status
Inspect the systemd user service:
```bash
systemctl --user status plasma-caelestia.service --no-pager
```

### View Recent Error Logs
Read the journal output from the shell process:
```bash
journalctl --user -u plasma-caelestia.service --since "10 minutes ago" --no-pager
```

### Restart the Shell Manually
Restart the user service:
```bash
systemctl --user restart plasma-caelestia.service
```

---

## 2. Keybindings Do Not Respond

If shortcuts like `Super + D` stop responding:

### Reload KWin Global Accel
Query and re-register the shortcut component:
```bash
qdbus6 org.kde.kglobalaccel /component/kwin org.kde.kglobalaccel.Component.reconfigure
```

### Verify Keybind Configuration
Verify `~/.config/kglobalshortcutsrc` contains:
```ini
[kwin]
Show Desktop=Meta+D,none,Show Desktop
```

---

## 3. Wallpaper Color Scheme Does Not Update

If the system color scheme does not update after changing the wallpaper:

### Run Matugen Manually
Execute the extraction script on your target image:
```bash
caelestia wallpaper -f "/path/to/wallpaper.jpg"
```

### Inspect Matugen Output
Test Matugen directly in verbose mode:
```bash
matugen image "/path/to/wallpaper.jpg" -v
```

---

## 4. SDDM Theme Test and Errors

### Test Greeter in Windowed Mode
Execute the greeter test command from a terminal:
```bash
/usr/bin/sddm-greeter-qt6 --test-mode --theme /usr/share/sddm/themes/material-you-caelestia
```

### Missing Fonts in Greeter
Verify that Google Sans Flex exists in the theme directory:
```bash
ls -la /usr/share/sddm/themes/material-you-caelestia/font/
```
If fonts are missing, re-copy the font assets from `~/dotfiles/sddm/material-you-caelestia/font/`.
