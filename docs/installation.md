# Installation Guide

This document describes the procedure to install and configure the Astra Dots repository on Arch Linux.

---

## 1. System Requirements

Ensure the target system meets these requirements:
- Operating System: Arch Linux (64-bit).
- Display Server: Wayland session with KDE Plasma 6.4 or later.
- User Privileges: Standard user account with `sudo` access.
- Package Manager: `pacman` and an AUR helper (such as `yay` or `paru`).

---

## 2. Package Installation

Execute these commands to install official and AUR dependencies:

### Official Packages
```bash
sudo pacman -S --needed \
    git \
    zsh \
    kitty \
    btop \
    fastfetch \
    pipewire \
    wireplumber \
    sddm \
    qt6-declarative \
    qt6-svg \
    qt6-multimedia \
    imagemagick
```

### AUR Packages
```bash
yay -S --needed \
    quickshell-git \
    matugen-bin \
    spicetify-cli \
    yazi-bin
```

---

## 3. Clone the Dotfiles Repository

Clone the repository to the user home directory:
```bash
git clone https://github.com/astra-dots/dotfiles.git ~/dotfiles
cd ~/dotfiles
```

---

## 4. Run the Installer

Make the script executable and start the installation process:
```bash
chmod +x install.sh
./install.sh
```

### Automated Backup Behavior
The installer creates a directory named `~/.dotfiles_backup_<timestamp>/`.
If a target configuration file exists, the script moves the existing file to the backup directory.
The script then creates a symbolic link pointing to the file in `~/dotfiles/`.

---

## 5. SDDM Greeter Deployment

The SDDM greeter requires system administrator permissions.
Execute this command to copy the theme files:
```bash
sudo cp -r ~/dotfiles/sddm/material-you-caelestia /usr/share/sddm/themes/
```

Configure SDDM to load this theme in `/etc/sddm.conf.d/theme.conf`:
```ini
[Theme]
Current=material-you-caelestia
```

Test the theme layout in an isolated window:
```bash
/usr/bin/sddm-greeter-qt6 --test-mode --theme /usr/share/sddm/themes/material-you-caelestia
```

---

## 6. Caelestia Shell Setup

Clone the Caelestia shell fork from the Astra Dots organization:
```bash
git clone https://github.com/astra-dots/caelestia-kde.git ~/caelestia-dots-kde
cd ~/caelestia-dots-kde
bash install.sh
```

Restart the background user service:
```bash
systemctl --user restart plasma-caelestia.service
```

---

## 7. Verification

Verify the system status with these steps:
1. Press `Super` to verify the application launcher opens.
2. Press `Super + D` to verify all open windows minimize and the taskbar indicator highlights.
3. Open a terminal to verify Kitty loads with the Starship prompt.
4. Run `fastfetch` to verify system specifications output.
