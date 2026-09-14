pragma Singleton
import QtQuick

QtObject {
    // Mode toggle: "dynamic" (uses Matugen colors) or "monochrome" (pure black/gray/white)
    // Note: Can also be set in theme.conf via colorMode=dynamic or colorMode=monochrome
    property string mode: "dynamic"

    // Dynamic Matugen tokens (auto-generated on wallpaper / theme change)
    property color dynamicBackground: "#0e0e0e"
    property color dynamicSurface: "#0e0e0e"
    property color dynamicSurfaceContainerLowest: "#000000"
    property color dynamicSurfaceContainer: "#1a1a1a"
    property color dynamicSurfaceContainerHigh: "#202020"
    property color dynamicSurfaceContainerHighest: "#262626"
    property color dynamicPrimary: "#c6c6c6"
    property color dynamicOnPrimary: "#404040"
    property color dynamicSecondary: "#9d9d9d"
    property color dynamicSecondaryContainer: "#3b3b3b"
    property color dynamicOnSecondaryContainer: "#bfbfbf"
    property color dynamicOnSurface: "#e5e5e5"
    property color dynamicOnSurfaceVariant: "#ababab"
    property color dynamicOutline: "#767676"
    property color dynamicOutlineVariant: "#484848"
    property color dynamicError: "#d98883"
    property color dynamicPrimaryContainer: "#464646"

    // Pure Neutral Monochrome OLED tokens (100% Achromatic, R == G == B, zero color cast)
    property color monoBackground: "#000000"
    property color monoSurface: "#0e0e0e"
    property color monoSurfaceContainerLowest: "#050505"
    property color monoSurfaceContainer: "#161616"
    property color monoSurfaceContainerHigh: "#1f1f1f"
    property color monoSurfaceContainerHighest: "#282828"
    property color monoPrimary: "#ffffff"
    property color monoOnPrimary: "#0e0e0e"
    property color monoSecondary: "#b0b0b0"
    property color monoSecondaryContainer: "#2e2e2e"
    property color monoOnSecondaryContainer: "#e5e5e5"
    property color monoOnSurface: "#e8e8e8"
    property color monoOnSurfaceVariant: "#909090"
    property color monoOutline: "#5c5c5c"
    property color monoOutlineVariant: "#383838"
    property color monoError: "#e05555"
    property color monoPrimaryContainer: "#3a3a3a"

    readonly property bool isMono: mode === "monochrome"

    readonly property color background: isMono ? monoBackground : dynamicBackground
    readonly property color surface: isMono ? monoSurface : dynamicSurface
    readonly property color surfaceContainerLowest: isMono ? monoSurfaceContainerLowest : dynamicSurfaceContainerLowest
    readonly property color surfaceContainer: isMono ? monoSurfaceContainer : dynamicSurfaceContainer
    readonly property color surfaceContainerHigh: isMono ? monoSurfaceContainerHigh : dynamicSurfaceContainerHigh
    readonly property color surfaceContainerHighest: isMono ? monoSurfaceContainerHighest : dynamicSurfaceContainerHighest
    readonly property color primary: isMono ? monoPrimary : dynamicPrimary
    readonly property color on_primary: isMono ? monoOnPrimary : dynamicOnPrimary
    readonly property color secondary: isMono ? monoSecondary : dynamicSecondary
    readonly property color secondaryContainer: isMono ? monoSecondaryContainer : dynamicSecondaryContainer
    readonly property color on_secondary_container: isMono ? monoOnSecondaryContainer : dynamicOnSecondaryContainer
    readonly property color on_surface: isMono ? monoOnSurface : dynamicOnSurface
    readonly property color on_surface_variant: isMono ? monoOnSurfaceVariant : dynamicOnSurfaceVariant
    readonly property color outline: isMono ? monoOutline : dynamicOutline
    readonly property color outlineVariant: isMono ? monoOutlineVariant : dynamicOutlineVariant
    readonly property color error: isMono ? monoError : dynamicError
    readonly property color primaryContainer: isMono ? monoPrimaryContainer : dynamicPrimaryContainer
}
