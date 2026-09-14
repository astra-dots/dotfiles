import QtQuick
import QtQuick.Layouts
import "."

Rectangle {
    id: oskRoot

    required property var targetInput
    property bool shiftMode: false
    property bool capsLock: false
    property bool symbolsMode: false
    signal closeRequested()
    signal capsLockToggled(bool active)

    readonly property real s: Screen.height / 768
    property string sansFont: "Google Sans, Inter, Roboto, sans-serif"
    implicitWidth: mainCol.implicitWidth + 28 * s
    implicitHeight: mainCol.implicitHeight + 24 * s
    radius: 24 * s
    color: Colors.surfaceContainer
    border.color: Colors.outlineVariant
    border.width: 1 * s

    Column {
        id: mainCol
        anchors.centerIn: parent
        spacing: 6 * s

        // Helper function to handle key press
        function handleKeyPress(keyVal, isShift, isSpecial) {
            if (!targetInput) return;
            targetInput.forceActiveFocus();
            if (isSpecial) {
                if (keyVal === "Backspace") {
                    if (targetInput.text.length > 0) {
                        targetInput.text = targetInput.text.slice(0, -1);
                    }
                } else if (keyVal === "Enter") {
                    targetInput.accepted();
                } else if (keyVal === "Tab") {
                    targetInput.text += "    ";
                } else if (keyVal === "Clear") {
                    targetInput.text = "";
                } else if (keyVal === "Space") {
                    targetInput.text += " ";
                }
            } else {
                targetInput.text += keyVal;
                if (oskRoot.shiftMode && !oskRoot.capsLock) {
                    oskRoot.shiftMode = false;
                }
            }
        }

        // Row 1: Numbers & Symbols
        Row {
            spacing: 5 * s
            anchors.horizontalCenter: parent.horizontalCenter

            Repeater {
                model: [
                    { norm: "`", shift: "~" },
                    { norm: "1", shift: "!" },
                    { norm: "2", shift: "@" },
                    { norm: "3", shift: "#" },
                    { norm: "4", shift: "$" },
                    { norm: "5", shift: "%" },
                    { norm: "6", shift: "^" },
                    { norm: "7", shift: "&" },
                    { norm: "8", shift: "*" },
                    { norm: "9", shift: "(" },
                    { norm: "0", shift: ")" },
                    { norm: "-", shift: "_" },
                    { norm: "=", shift: "+" }
                ]
                delegate: KeyButton {
                    s: oskRoot.s
                    keyWidth: 42 * oskRoot.s
                    label: oskRoot.shiftMode ? modelData.shift : modelData.norm
                    onKeyClicked: mainCol.handleKeyPress(label, oskRoot.shiftMode, false)
                }
            }

            // Backspace Key
            KeyButton {
                s: oskRoot.s
                keyWidth: 62 * oskRoot.s
                label: "⌫"
                isSpecial: true
                bgColor: Colors.secondaryContainer
                fgColor: Colors.on_secondary_container
                onKeyClicked: mainCol.handleKeyPress("Backspace", false, true)
            }
        }

        // Row 2: QWERTY Top Row
        Row {
            spacing: 5 * s
            anchors.horizontalCenter: parent.horizontalCenter

            // Tab Key
            KeyButton {
                s: oskRoot.s
                keyWidth: 54 * oskRoot.s
                label: "Tab"
                isSpecial: true
                bgColor: Colors.surfaceContainerHigh
                fgColor: Colors.on_surface_variant
                onKeyClicked: mainCol.handleKeyPress("Tab", false, true)
            }

            Repeater {
                model: [
                    { norm: "q", shift: "Q" },
                    { norm: "w", shift: "W" },
                    { norm: "e", shift: "E" },
                    { norm: "r", shift: "R" },
                    { norm: "t", shift: "T" },
                    { norm: "y", shift: "Y" },
                    { norm: "u", shift: "U" },
                    { norm: "i", shift: "I" },
                    { norm: "o", shift: "O" },
                    { norm: "p", shift: "P" },
                    { norm: "[", shift: "{" },
                    { norm: "]", shift: "}" },
                    { norm: "\\", shift: "|" }
                ]
                delegate: KeyButton {
                    s: oskRoot.s
                    keyWidth: 42 * oskRoot.s
                    label: (oskRoot.shiftMode || oskRoot.capsLock) ? modelData.shift : modelData.norm
                    onKeyClicked: mainCol.handleKeyPress(label, oskRoot.shiftMode, false)
                }
            }
        }

        // Row 3: Home Row
        Row {
            spacing: 5 * s
            anchors.horizontalCenter: parent.horizontalCenter

            // Caps Lock Key
            KeyButton {
                s: oskRoot.s
                keyWidth: 60 * oskRoot.s
                label: "Caps"
                isSpecial: true
                bgColor: oskRoot.capsLock ? Colors.error : Colors.surfaceContainerHigh
                fgColor: oskRoot.capsLock ? "#ffffff" : Colors.on_surface
                onKeyClicked: {
                    oskRoot.capsLockToggled(!oskRoot.capsLock);
                }
            }

            Repeater {
                model: [
                    { norm: "a", shift: "A" },
                    { norm: "s", shift: "S" },
                    { norm: "d", shift: "D" },
                    { norm: "f", shift: "F" },
                    { norm: "g", shift: "G" },
                    { norm: "h", shift: "H" },
                    { norm: "j", shift: "J" },
                    { norm: "k", shift: "K" },
                    { norm: "l", shift: "L" },
                    { norm: ";", shift: ":" },
                    { norm: "'", shift: "\"" }
                ]
                delegate: KeyButton {
                    s: oskRoot.s
                    keyWidth: 42 * oskRoot.s
                    label: (oskRoot.shiftMode || oskRoot.capsLock) ? modelData.shift : modelData.norm
                    onKeyClicked: mainCol.handleKeyPress(label, oskRoot.shiftMode, false)
                }
            }

            // Enter Key
            KeyButton {
                s: oskRoot.s
                keyWidth: 68 * oskRoot.s
                label: "↵"
                isSpecial: true
                bgColor: Colors.primary
                fgColor: Colors.on_primary
                onKeyClicked: mainCol.handleKeyPress("Enter", false, true)
            }
        }

        // Row 4: Bottom Row
        Row {
            spacing: 5 * s
            anchors.horizontalCenter: parent.horizontalCenter

            // Left Shift Key
            KeyButton {
                s: oskRoot.s
                keyWidth: 70 * oskRoot.s
                label: "⇧"
                isSpecial: true
                bgColor: oskRoot.shiftMode ? Colors.primary : Colors.secondaryContainer
                fgColor: oskRoot.shiftMode ? Colors.on_primary : Colors.on_secondary_container
                onKeyClicked: {
                    oskRoot.shiftMode = !oskRoot.shiftMode;
                }
            }

            Repeater {
                model: [
                    { norm: "z", shift: "Z" },
                    { norm: "x", shift: "X" },
                    { norm: "c", shift: "C" },
                    { norm: "v", shift: "V" },
                    { norm: "b", shift: "B" },
                    { norm: "n", shift: "N" },
                    { norm: "m", shift: "M" },
                    { norm: ",", shift: "<" },
                    { norm: ".", shift: ">" },
                    { norm: "/", shift: "?" }
                ]
                delegate: KeyButton {
                    s: oskRoot.s
                    keyWidth: 42 * oskRoot.s
                    label: (oskRoot.shiftMode || oskRoot.capsLock) ? modelData.shift : modelData.norm
                    onKeyClicked: mainCol.handleKeyPress(label, oskRoot.shiftMode, false)
                }
            }

            // Right Shift Key
            KeyButton {
                s: oskRoot.s
                keyWidth: 70 * oskRoot.s
                label: "⇧"
                isSpecial: true
                bgColor: oskRoot.shiftMode ? Colors.primary : Colors.secondaryContainer
                fgColor: oskRoot.shiftMode ? Colors.on_primary : Colors.on_secondary_container
                onKeyClicked: {
                    oskRoot.shiftMode = !oskRoot.shiftMode;
                }
            }
        }

        // Row 5: Spacebar, Clear & Close
        Row {
            spacing: 8 * s
            anchors.horizontalCenter: parent.horizontalCenter

            // Clear Input Key
            KeyButton {
                s: oskRoot.s
                keyWidth: 74 * oskRoot.s
                label: "Clear"
                isSpecial: true
                bgColor: Colors.surfaceContainerHigh
                fgColor: Colors.on_surface_variant
                onKeyClicked: mainCol.handleKeyPress("Clear", false, true)
            }

            // Spacebar Key
            KeyButton {
                s: oskRoot.s
                keyWidth: 320 * oskRoot.s
                label: "—"
                isSpecial: true
                bgColor: Colors.surfaceContainerHigh
                fgColor: Colors.on_surface_variant
                onKeyClicked: mainCol.handleKeyPress("Space", false, true)
            }

            // Close Keyboard Key
            KeyButton {
                s: oskRoot.s
                keyWidth: 74 * oskRoot.s
                label: "✕"
                isSpecial: true
                bgColor: Colors.surfaceContainerHighest
                fgColor: Colors.primary
                onKeyClicked: oskRoot.closeRequested()
            }
        }
    }

    // KeyButton Component
    component KeyButton: Rectangle {
        id: btn
        property real s: 1.0
        property real keyWidth: 42 * s
        property real keyHeight: 36 * s
        property string label: ""
        property bool isSpecial: false
        property color bgColor: Colors.surfaceContainerHigh
        property color fgColor: Colors.on_surface
        signal keyClicked()

        width: keyWidth
        height: keyHeight
        radius: 10 * s
        color: kMouse.pressed ? Colors.surfaceContainerLowest : (kMouse.containsMouse ? Colors.surfaceContainerHighest : btn.bgColor)
        border.color: Colors.outlineVariant
        border.width: 1 * s
        scale: kMouse.pressed ? 0.93 : (kMouse.containsMouse ? 1.05 : 1.0)
        Behavior on scale { NumberAnimation { duration: 100; easing.type: Easing.OutQuad } }
        Behavior on color { ColorAnimation { duration: 100 } }

        Text {
            anchors.centerIn: parent
            text: btn.label
            font.family: oskRoot.sansFont
            font.pixelSize: btn.isSpecial ? 11 * btn.s : 13 * btn.s
            font.bold: btn.isSpecial
            color: btn.fgColor
        }

        MouseArea {
            id: kMouse
            anchors.fill: parent
            hoverEnabled: true
            cursorShape: Qt.PointingHandCursor
            onClicked: btn.keyClicked()
        }
    }
}
