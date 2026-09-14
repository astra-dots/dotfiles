import QtQuick
import QtQuick.Shapes
import "shapes/morph.js" as Morph

Item {
    id: root
    property color color: "#ffffff"
    property var roundedPolygon: null
    property bool polygonIsNormalized: true

    property var bounds: roundedPolygon ? roundedPolygon.calculateBounds() : [0, 0, 1, 1]
    implicitWidth: bounds[2] - bounds[0]
    implicitHeight: bounds[3] - bounds[1]
    width: implicitWidth
    height: implicitHeight

    // Internals: anim
    property var prevRoundedPolygon: null
    property double progress: 1.0
    property var morph: new Morph.Morph(roundedPolygon, roundedPolygon)
    property Animation animation: NumberAnimation {
        duration: 350
        easing.type: Easing.BezierSpline
        easing.bezierCurve: [0.42, 1.67, 0.21, 0.90, 1, 1]
    }

    onRoundedPolygonChanged: {
        delete root.morph
        root.morph = new Morph.Morph(root.prevRoundedPolygon ?? root.roundedPolygon, root.roundedPolygon)
        morphBehavior.enabled = false
        root.progress = 0
        morphBehavior.enabled = true
        root.progress = 1
        root.prevRoundedPolygon = root.roundedPolygon
    }

    Behavior on progress {
        id: morphBehavior
        animation: root.animation
    }

    function generateSvgPath(p) {
        if (!root.morph) return ""
        var cubics = root.morph.asCubics(p)
        if (!cubics || cubics.length === 0) return ""

        var size = Math.min(root.width, root.height)
        var offsetX = (root.width - size) / 2
        var offsetY = (root.height - size) / 2

        var d = "M " + (offsetX + cubics[0].anchor0X * size).toFixed(3) + " " + (offsetY + cubics[0].anchor0Y * size).toFixed(3)
        for (var i = 0; i < cubics.length; i++) {
            var c = cubics[i]
            d += " C " + (offsetX + c.control0X * size).toFixed(3) + " " + (offsetY + c.control0Y * size).toFixed(3) +
                 " " + (offsetX + c.control1X * size).toFixed(3) + " " + (offsetY + c.control1Y * size).toFixed(3) +
                 " " + (offsetX + c.anchor1X * size).toFixed(3) + " " + (offsetY + c.anchor1Y * size).toFixed(3)
        }
        d += " Z"
        return d
    }

    Shape {
        anchors.fill: parent
        preferredRendererType: Shape.CurveRenderer

        ShapePath {
            fillColor: root.color
            strokeColor: "transparent"
            strokeWidth: 0

            PathSvg {
                path: root.generateSvgPath(root.progress)
            }
        }
    }
}
