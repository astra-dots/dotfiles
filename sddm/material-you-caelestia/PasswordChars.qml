import QtQuick
import "."

Flickable {
    id: root
    
    required property var passwordModel
    property int cursorPosition: 0
    readonly property int charSize: 13
    readonly property real s: Screen.height / 768

    readonly property var shapeSequence: [
        MaterialShape.Shape.Clover4Leaf,
        MaterialShape.Shape.SoftBurst,
        MaterialShape.Shape.Pill,
        MaterialShape.Shape.Diamond,
        MaterialShape.Shape.ClamShell,
        MaterialShape.Shape.Pentagon,
        MaterialShape.Shape.Sunny,
        MaterialShape.Shape.Cookie4Sided,
        MaterialShape.Shape.Heart,
        MaterialShape.Shape.Flower
    ]

    clip: true
    contentWidth: Math.max(root.width, dotsRow.implicitWidth + 24 * root.s)
    flickableDirection: Flickable.HorizontalFlick
    contentX: Math.max(0, dotsRow.implicitWidth + 24 * root.s - root.width)
    
    Behavior on contentX {
        NumberAnimation { duration: 180; easing.type: Easing.OutCubic }
    }

    Row {
        id: dotsRow
        anchors.verticalCenter: parent.verticalCenter
        x: dotsRow.implicitWidth < root.width ? Math.round((root.width - dotsRow.implicitWidth) / 2) : 8 * root.s
        spacing: 8 * root.s
        
        Behavior on x {
            NumberAnimation { duration: 150; easing.type: Easing.OutCubic }
        }
        
        Repeater {
            model: root.passwordModel
            delegate: Item {
                id: charItem
                required property int index
                required property var model
                implicitWidth: root.charSize * root.s
                implicitHeight: root.charSize * root.s
                
                MaterialShape {
                    id: materialShape
                    anchors.centerIn: parent
                    implicitSize: 11 * root.s
                    color: Colors.primary
                    shape: (charItem.model && charItem.model.shapeIndex !== undefined) ? root.shapeSequence[charItem.model.shapeIndex % root.shapeSequence.length] : root.shapeSequence[charItem.index % root.shapeSequence.length]
                    opacity: 0
                    scale: 0.3

                    Component.onCompleted: {
                        appearAnim.start();
                        morphTimer.start();
                    }

                    ParallelAnimation {
                        id: appearAnim
                        NumberAnimation { target: materialShape; property: "opacity"; from: 0; to: 1; duration: 80 }
                        NumberAnimation { target: materialShape; property: "scale"; from: 0.3; to: 1.15; duration: 220; easing.type: Easing.OutBack }
                        NumberAnimation { target: materialShape; property: "rotation"; from: -20 + ((charItem.index * 17) % 40); to: 0; duration: 240; easing.type: Easing.OutCubic }
                    }

                    // After 350ms, smoothly morph from the playful shape to a resting Material circle
                    Timer {
                        id: morphTimer
                        interval: 350
                        onTriggered: {
                            materialShape.shape = MaterialShape.Shape.Circle;
                        }
                    }
                }
            }
        }
    }
}
