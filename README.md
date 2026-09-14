<div align="center">

# 🌌 Astra Dots

**My personal Material Design 3 rice on Arch Linux + KDE Plasma 6 + Caelestia Quickshell**

[![Arch Linux](https://img.shields.io/badge/Arch_Linux-1793D1?logo=arch-linux&logoColor=fff&style=flat-square)](https://archlinux.org)
[![KDE Plasma](https://img.shields.io/badge/KDE_Plasma-6.4-1D99F3?logo=kde&logoColor=fff&style=flat-square)](https://kde.org/plasma-desktop/)
[![Quickshell](https://img.shields.io/badge/Shell-Quickshell-7B1FA2?style=flat-square)](https://quickshell.outfoxxed.me)
[![Caelestia](https://img.shields.io/badge/Fork-Caelestia_KDE-00ACC1?style=flat-square)](https://github.com/astra-dots/caelestia-kde)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg?style=flat-square)](LICENSE)

[**Live Showcase**](https://astra-dots.github.io) • [**Caelestia Fork**](https://github.com/astra-dots/caelestia-kde) • [**Installation**](#-installation) • [**Keybinds**](#-keybinds)

</div>

---

## 🖥 System Overview

| Component | Software / Details |
| :--- | :--- |
| **Operating System** | [Arch Linux](https://archlinux.org/) (Linux Kernel 6.13) |
| **Display Server** | Wayland |
| **Desktop Environment** | [KDE Plasma 6.4](https://kde.org/) |
| **Desktop Shell** | [Caelestia Quickshell Fork](https://github.com/astra-dots/caelestia-kde) |
| **Login Greeter** | [Material You SDDM](sddm/material-you-caelestia) (Google Sans Flex, Vector Popups, CapsLock Sync) |
| **Terminal Emulator** | [Kitty](config/kitty) |
| **Shell & Prompt** | Zsh + [Starship](config/starship.toml) |
| **Color Engine** | [Matugen](config/matugen) (Material 3 dynamic palettes from wallpaper) |
| **Audio Routing** | PipeWire + WirePlumber |
| **Music Player** | Spotify + [Spicetify](config/spicetify) (Synced Lyrics + Matugen theming) |
| **File Managers** | Dolphin (GUI) + [Yazi](config/yazi) (CLI) |
| **System Monitor** | [Btop](config/btop) |

---

## ⌨ Keybinds

| Shortcut | Action | Description |
| :--- | :--- | :--- |
| `Super + D` | **Show Desktop** | Toggle minimization of all windows to view desktop (with active indicator) |
| `Super` | **App Launcher** | Caelestia Material 3 application grid & search |
| `Super + Enter` | **Terminal** | Open Kitty terminal emulator |
| `Super + Tab` | **Overview** | Interactive window grid & virtual desktops |
| `Super + B` | **Notification Center** | Toggle right sidebar with notifications & calendar |
| `Super + V` | **Clipboard History** | Material 3 search and snippet history |
| `Super + Shift + S` | **Screenshot** | Interactive region selector & instant annotation |
| `Super + Shift + C` | **Color Picker** | Eyedropper tool copying hex & rgb to clipboard |
| `Super + Ctrl + S` | **Screen Record** | Fast GPU screen recorder toggle |
| `Super + 1-5` | **Workspaces** | Switch to virtual desktop 1 through 5 |

---

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/astra-dots/dotfiles.git ~/dotfiles
cd ~/dotfiles
```

### 2. Run the non-destructive installer
```bash
chmod +x install.sh
./install.sh
```
> The installer automatically detects existing configurations and backs them up into `~/.dotfiles_backup_<timestamp>/` before creating safe symlinks.

### 3. Deploy the custom Material You SDDM theme
```bash
sudo cp -r ~/dotfiles/sddm/material-you-caelestia /usr/share/sddm/themes/
```

### 4. Sync live changes back to the repository
```bash
./sync.sh push
```

---

## 📂 Repository Structure

```text
dotfiles/
├── config/
│   ├── caelestia/          # shell.json user preferences & active toggles
│   ├── kitty/              # Kitty terminal configuration & color schemes
│   ├── fastfetch/          # Custom Fastfetch layout & specs format
│   ├── starship.toml       # Cross-shell prompt configuration
│   ├── matugen/            # Material Design 3 color extractor config & templates
│   ├── spicetify/          # Spotify client theme & extensions
│   ├── btop/               # System monitor theme & layout
│   ├── yazi/               # Blazing fast terminal file manager config
│   └── wireplumber/        # PipeWire device rules & audio routing
├── home/
│   └── .zshrc              # Zsh interactive shell configuration
├── kde/
│   ├── kglobalshortcutsrc  # Global shortcuts (Win+D, launcher, workspaces)
│   ├── kwinrc              # KWin window manager settings & desktop effects
│   └── kdeglobals          # Plasma system fonts, icons, and theme values
├── sddm/
│   └── material-you-caelestia/ # Complete custom SDDM theme
├── scripts/
│   ├── install.sh          # Non-destructive interactive installer
│   └── sync.sh             # Bidirectional sync helper (system <-> repo)
├── .gitignore              # Aggressive ignore list preventing any cache/secret leakage
└── README.md
```

---

## 📜 Credits

- [Caelestia](https://github.com/caelestia-dots/caelestia) & [Caelestia KDE Port](https://github.com/ladybug-me/caelestia-kde) by ladybug-me & 0xSolanaceae.
- [Quickshell](https://quickshell.outfoxxed.me) by outfoxxed.
- [Matugen](https://github.com/InioX/matugen) by InioX.
- [Spicetify](https://spicetify.app/) by Spicetify team.
