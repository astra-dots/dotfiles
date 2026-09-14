# Caelestia Shell Custom Engineering & Modifications

This document records the technical modifications and architectural refinements implemented in the Astra Caelestia KDE desktop shell (fork repository: [astra-dots/caelestia-kde](https://github.com/astra-dots/caelestia-kde), branch: `custom-modifications`).

---

## 1. Subsystem Classifications

All 242 direct engineering changes are classified into seven functional subsystems:

1. **Audio & Media Engine**
2. **Login Greeter (SDDM)**
3. **Taskbar, Dock & Window Management**
4. **Performance & Compositor Integration**
5. **Application Launcher & Search Navigation**
6. **Utilities, Controls & Nexus Configuration**
7. **Clipboard & Screenshot Infrastructure**

---

## 2. Audio & Media Engine Modifications

### 2.1 Syllable-by-Syllable Karaoke Engine (Sections 227–233)
- **Engine Integration**: Connected Quickshell to Spicetify Spicy Lyrics API and TTML disk cache (`caelestia-bridge.js` and `spotify_bridge.py`).
- **Progressive Syllable Wipe**: High-refresh syllable fill animation utilizing fractional clip boundaries (`width: syllableWidth * progress`).
- **Small Background Vocals**: Extracted and rendered secondary horizontal background vocals below lead vocal lines with distinct timestamps and independent syllable wipe.
- **Intro Cold-Open Stability**: Resolved memory overflow crash (`SIGSEGV` during rapid 8.2GB allocation) by eliminating recursive highlight range loops during track intros (`currentIndex = -1`).
- **Centering Calculation**: Implemented animated vertical centering (`Easing.OutCubic`) with instant positioning on cold open or large seek jumps.
- **Line Completion Unhighlighting**: Automatic dimming of lines immediately upon final syllable end time (`lineEndTime`) rather than waiting for subsequent line onset.

### 2.2 Visualizer & Buffer Tuning (Sections 234–236)
- **Logarithmic Pause Decay**: Replaced instantaneous zero-clamping with a 350ms animated decay curve (`Easing.OutCubic`), eliminating tactile headphone audio pop/clicks on playback pause.
- **PipeWire Device Deduplication**: Filtered virtual loopback streams, internal monitor sinks, and `speech-dispatcher` nodes to display only physical hardware ALSA card profiles.
- **Dynamic Spotify Palette Mode**: Added dedicated toggle chip next to player selector pill allowing user to switch Spotify theme between extracted song album art colors and system Matugen wallpaper tokens.
- **Marquee Text Display**: Implemented auto-scrolling marquee text for long song titles, artists, and album names with 1.6-second loop pause.

---

## 3. Login Greeter (SDDM) Modifications

### 3.1 Typography & Clock Architecture (Sections 221, 241)
- **Google Sans Flex Clock**: Implemented high-resolution variable font clock with optical weight distribution.
- **Windup Elimination**: Removed legacy clockwork windup animation delays, allowing instant password focus on display wake.
- **Hardware SVG Session Glyphs**: Replaced low-resolution bitmap icons with crisp vector SVG assets for Wayland and X11 sessions.
- **Optical Centering**: Corrected geometric offset of the keyboard layout toggle icon within circular pill buttons.
- **Clean Idle State**: Removed placeholder credentials and demo widgets for a minimal, production login screen.

---

## 4. Taskbar, Dock & Window Management

### 4.1 Window Isolation & Dock Navigation (Sections 7, 18, 240)
- **Virtual Desktop Window Filtering**: Restricted dock application icons exclusively to windows present on the active virtual desktop.
- **Single-Layer Show Desktop**: Replaced squashed dual-layer pill overlay with a unified circular highlight and synchronized KWin compositing state.
- **Dock Activation Shortcuts**: Mapped `Meta+Shift+1...9` to direct application slot activation and toggle commands.
- **Order Persistence**: Pinned applications store positions across two storage layers (`launcher_pinned.json` and `shell.json`). Unpinned applications dynamically append to the right edge.
- **Alt-Tab Compositor Switching**: Enforced true MRU (Most Recently Used) window order in window switcher delegates.

### 4.2 Popout Cards & Screen Alignments (Sections 11–13, 23, 208)
- **DateCard Popout**: Decoupled date information into a connected 300px popout card with live seconds, keeping the taskbar clock stationary.
- **Screen Corner Refinements**: Removed top and bottom inverted screen arc corners for flush display-edge alignment.

---

## 5. Performance & Compositor Integration

### 5.1 Dashboard Latency Optimization (Sections 237–238)
- **Preload Architecture**: Retained dashboard shell components in memory on initialization, eliminating open lag spikes.
- **Animation Silencing**: Completely paused particle visualizers and lyric timers when drawer visibility is false, guaranteeing 0% background CPU overhead.
- **DDC Hardware Polling**: Restricted synchronous `ddcutil` I2C hardware bus queries strictly to when the Quick Settings panel is open.
- **Overlay Layer Promotion**: Promoted On-Screen Display (OSD) panels to `WlrLayer.Overlay` to ensure volume notifications render over fullscreen 3D games and media players.
- **Boot Desktop Switching**: Removed unneeded desktop cycling during compositor initialization via systemd user unit optimization.

---

## 6. Application Launcher & Search Navigation

### 6.1 Layout & Reordering Physics (Sections 2, 16, 19, 22)
- **Fluid Drag Displacement**: Implemented Android-style real-time tile displacement for pinned applications and quick toggle tiles.
- **Action Icons on Hover**: Action buttons (Pin, Favorite, Hide) remain invisible until item hover, maintaining a clean visual interface.
- **Calculator Integration**: Directly invoke `qalc` within interactive terminal sessions from search input.
- **Text Cursor Navigation**: Allowed Left and Right arrow keys to navigate text cursor inside search box without prematurely switching application categories.

---

## 7. Clipboard & Screenshot Infrastructure

### 7.1 Clipboard History (Sections 4, 5, 23, 208)
- **Binary Format Expansion**: Updated C++ regex in `clipboardmanager.cpp` to decode image clips across all size units (B, KiB, MiB).
- **Expandable Items**: Added interactive expansion drawer for full multiline text viewing and high-resolution image lightboxes.
- **Live Image Pre-warming**: Resolved race conditions by listening for C++ `imageReady` signals before rendering thumbnails.

### 7.2 Material 3 Floating Screenshot Bar (Sections 21, 24–27)
- **Floating Pill Toolbar**: Top-centered floating bar invoked via `Print` or `Meta+Shift+S`.
- **Spectacle Integration**: Native D-Bus invocation (`org.kde.Spectacle`) with Kirigami drawing/annotation editor delegation.
- **Live Window Snapping**: Active window highlight outlines with application icon badges.
- **Hold-Shift Modifier**: Hold Shift during snip to automatically save file to disk in addition to copying to system clipboard.
