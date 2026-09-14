pragma Singleton
import QtQuick

QtObject {
    // Mode toggle: "dynamic" (uses Matugen colors) or "monochrome" (pure black/gray/white)
    // Note: Can also be set in theme.conf via colorMode=dynamic or colorMode=monochrome
    property string mode: "dynamic"

    // Dynamic Matugen tokens (auto-generated on wallpaper / theme change)
    property color dynamicBackground: "{{colors.background.default.hex}}"
    property color dynamicSurface: "{{colors.surface.default.hex}}"
    property color dynamicSurfaceContainerLowest: "{{colors.surface_container_lowest.default.hex}}"
    property color dynamicSurfaceContainer: "{{colors.surface_container.default.hex}}"
    property color dynamicSurfaceContainerHigh: "{{colors.surface_container_high.default.hex}}"
    property color dynamicSurfaceContainerHighest: "{{colors.surface_container_highest.default.hex}}"
    property color dynamicPrimary: "{{colors.primary.default.hex}}"
    property color dynamicOnPrimary: "{{colors.on_primary.default.hex}}"
    property color dynamicSecondary: "{{colors.secondary.default.hex}}"
    property color dynamicSecondaryContainer: "{{colors.secondary_container.default.hex}}"
    property color dynamicOnSecondaryContainer: "{{colors.on_secondary_container.default.hex}}"
    property color dynamicOnSurface: "{{colors.on_surface.default.hex}}"
    property color dynamicOnSurfaceVariant: "{{colors.on_surface_variant.default.hex}}"
    property color dynamicOutline: "{{colors.outline.default.hex}}"
    property color dynamicOutlineVariant: "{{colors.outline_variant.default.hex}}"
    property color dynamicError: "{{colors.error.default.hex}}"
    property color dynamicPrimaryContainer: "{{colors.primary_container.default.hex}}"

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
