# Component Architecture

This document describes each module and configuration directory included in the Astra Dots repository.

---

## 1. Desktop Shell (`config/caelestia/` and `caelestia-kde`)

The desktop shell runs on Quickshell and Qt 6. It manages:
- **Top Panel and Dock**: Displays active workspaces, running tasks, tray items, and battery status.
- **Show Desktop Button**: Positioned at the right end of the taskbar. Rotates 180 degrees and turns on a circular highlight when active.
- **Quick Settings and Utilities**: Contains network, bluetooth, audio, display brightness, and power session controls.
- **Nexus Settings**: Custom configuration panel for colors, fonts, and widget layouts.
- **Synced Lyric Visualizer**: Reads word-level syllable data from Spotify via Spicetify and displays animated lyrics.

Configuration file: `config/caelestia/shell.json`.

---

## 2. SDDM Login Greeter (`sddm/material-you-caelestia/`)

A custom login theme for SDDM on Qt 6:
- **Clock Typography**: Uses Google Sans Flex variable font with wide proportions and rounded corners.
- **Hardware Caps Lock**: Connects to the KDE `KeyState` plugin to read the physical keyboard LED state.
- **Vector Graphics**: Uses pure SVG vector icons for sessions (Wayland, X11) and action checkmarks.
- **User Profile Mask**: Renders user profile pictures with an anti-aliased circular mask.
- **Dynamic Palette**: Reads colors from `Colors.qml`, synchronized with system Matugen themes.

---

## 3. Dynamic Theming (`config/matugen/`)

Matugen extracts color palettes from the active wallpaper according to Material Design 3 guidelines.
- Configuration: `config/matugen/config.toml`.
- Templates: Generates color schemes for Kitty, Starship, Btop, Yazi, Kate, and SDDM.
- Execution: Triggered automatically when the wallpaper changes via `caelestia wallpaper -f <path>`.

---

## 4. Terminal and Shell (`config/kitty/`, `config/starship.toml`, `home/.zshrc`)

- **Kitty Terminal**: Configured with GPU rendering, variable font spacing, and transparent blur.
- **Starship**: Minimalist, fast cross-shell prompt displaying current directory, git branch, and command execution duration.
- **Zsh**: Interactive shell configuration with syntax highlighting, auto-suggestions, and directory history.

---

## 5. Audio Deduplication (`config/wireplumber/`)

WirePlumber configuration rules prevent duplicate audio device entries.
- Configuration: `config/wireplumber/wireplumber.conf.d/50-alsa-config.conf`.
- Filters out non-functional sub-nodes and unifies virtual sink routing.
