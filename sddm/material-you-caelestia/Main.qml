import QtQuick
import QtQuick.Window
import QtQuick.Effects
import Qt5Compat.GraphicalEffects
import SddmComponents 2.0
import org.kde.plasma.private.keyboardindicator as KeyboardIndicator
import "."

Rectangle {
    id: root
    width: Screen.width
    height: Screen.height
    color: Colors.background

    // Background Image
    Image {
        id: bgImage
        anchors.fill: parent
        source: "bg.png"
        fillMode: Image.PreserveAspectCrop
        visible: false
    }

    // Heavy blur effect for soft, cinematic depth
    FastBlur {
        id: blurredBg
        anchors.fill: bgImage
        source: bgImage
        radius: 72
        cached: true
    }

    // Scrim overlay to darken and ensure optimal contrast
    Rectangle {
        anchors.fill: parent
        color: "#000000"
        opacity: (typeof config !== "undefined" && typeof config.scrimOpacity !== "undefined") ? Number(config.scrimOpacity) : 0.50
    }

    readonly property real s: Screen.height / 768
    property bool isQuickshell: typeof sddm === "undefined" || sddm.hostName === undefined
    property int sessionIndex: (typeof sessionModel !== "undefined" && sessionModel.lastIndex >= 0) ? sessionModel.lastIndex : 0
    property int userIndex: (typeof userModel !== "undefined" && userModel.lastIndex >= 0) ? userModel.lastIndex : 0
    property bool use12Hour: (typeof config !== "undefined" && typeof config.use12HourClock !== "undefined") ? (config.use12HourClock === "true" || config.use12HourClock === true) : true
    property bool showSeconds: (typeof config !== "undefined" && typeof config.showSeconds !== "undefined") ? (config.showSeconds === "true" || config.showSeconds === true) : true
    property bool showKeyboard: false

    // Hardware Keyboard Indicator from KDE
    KeyboardIndicator.KeyState {
        id: sysCapsLock
        key: Qt.Key_CapsLock
        onLockedChanged: {
            root.capsLockActive = locked;
        }
    }

    property bool capsLockActive: (typeof sysCapsLock !== "undefined" && sysCapsLock.locked) || getSysCapsLock()
    property int lastPassLength: 0

    function getSysCapsLock() {
        if (typeof keyboard === "undefined" || !keyboard) return false;
        if (typeof keyboard.capsLock === "boolean") return keyboard.capsLock;
        if (typeof keyboard.capsLockState === "function") return Boolean(keyboard.capsLockState());
        if (typeof keyboard.capsLockState === "boolean") return keyboard.capsLockState;
        return false;
    }

    Connections {
        target: typeof keyboard !== "undefined" ? keyboard : null
        function onCapsLockStateChanged() {
            root.capsLockActive = root.getSysCapsLock();
        }
        function onCapsLockChanged() {
            root.capsLockActive = root.getSysCapsLock();
        }
    }

    focus: true
    Keys.priority: Keys.BeforeItem
    Keys.onPressed: function(event) {
        if (event.key === Qt.Key_Escape) {
            if (sessionPopup.visible) { sessionPopup.visible = false; event.accepted = true; }
            else if (userPopup.visible) { userPopup.visible = false; event.accepted = true; }
        }
    }

    ListModel {
        id: passCharModel
    }
    
    // UI States
    property real ui1: 0
    property real ui2: 0
    property string errorMessage: ""

    // Fonts
    FontLoader {
        id: customFont
        source: "font/GoogleSans-VariableFont_GRAD,opsz,wght.ttf"
    }
    FontLoader {
        id: flexFont
        source: "font/GoogleSansFlex-VariableFont_GRAD,ROND,opsz,slnt,wdth,wght.ttf"
    }
    FontLoader {
        id: ndotFont
        source: "font/NDot55.otf"
    }
    
    readonly property string sansFont: customFont.name !== "" ? customFont.name : "Google Sans, Inter, Roboto, sans-serif"
    readonly property string clockFont: flexFont.name !== "" ? flexFont.name : (customFont.name !== "" ? customFont.name : "Google Sans Flex, Google Sans, sans-serif")

    property string currentSessionName: (sessionHelper.currentItem && sessionHelper.currentItem.sName) ? sessionHelper.currentItem.sName : "Plasma (Wayland)"
    property string currentUserName: (userHelper.currentItem && userHelper.currentItem.uName) ? userHelper.currentItem.uName : ((typeof userModel !== "undefined" && userModel && userModel.lastUser) ? userModel.lastUser : "User")

    readonly property string checkmarkSvg: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'></polyline></svg>"
    readonly property string personSvg: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path><circle cx='12' cy='7' r='4'></circle></svg>"
    readonly property string kbSvg: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect width='20' height='16' x='2' y='4' rx='2.5'/><path d='M10 8h.01M14 8h.01M18 8h.01M6 8h.01M10 12h.01M14 12h.01M18 12h.01M6 12h.01M7 16h10'/></svg>"
    readonly property string kbHideSvg: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect width='20' height='12' x='2' y='3' rx='2.5'/><path d='M6 7h.01M10 7h.01M14 7h.01M18 7h.01M7 11h10'/><polyline points='9 18 12 21 15 18'/></svg>"

    function getSessionSvg(name) {
        let n = (name || "").toLowerCase();
        if (n.indexOf("wayland") !== -1) {
            return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='3' width='20' height='14' rx='2'/><line x1='8' y1='21' x2='16' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/><path d='M7 8l2 5l2-3.5l2 3.5l2-5'/></svg>";
        } else if (n.indexOf("x11") !== -1) {
            return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='3' width='20' height='14' rx='2'/><line x1='8' y1='21' x2='16' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/><path d='M9 7.5l6 6m0-6l-6 6'/></svg>";
        } else if (n.indexOf("hyprland") !== -1) {
            return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='18' height='18' rx='2'/><line x1='3' y1='10' x2='21' y2='10'/><line x1='11' y1='10' x2='11' y2='21'/></svg>";
        } else if (n.indexOf("gnome") !== -1) {
            return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='3' width='20' height='14' rx='2'/><line x1='8' y1='21' x2='16' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/><circle cx='12' cy='10' r='3'/></svg>";
        } else {
            return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='3' width='20' height='14' rx='2'/><line x1='8' y1='21' x2='16' y2='21'/><line x1='12' y1='17' x2='12' y2='21'/></svg>";
        }
    }

    property var sessionListNames: []
    property var userListNames: []

    function getSessionList() {
        let list = [];
        if (root.sessionListNames && root.sessionListNames.length > 0) {
            for (let i = 0; i < root.sessionListNames.length; i++) {
                list.push({ index: i, name: root.sessionListNames[i] });
            }
        } else {
            let active = (sessionHelper.currentItem && sessionHelper.currentItem.sName && !sessionHelper.currentItem.sName.includes("/")) ? sessionHelper.currentItem.sName : "Plasma (Wayland)";
            list.push({ index: 0, name: active });
        }
        return list;
    }

    function getUserList() {
        let list = [];
        if (root.userListNames && root.userListNames.length > 0) {
            for (let i = 0; i < root.userListNames.length; i++) {
                list.push({
                    index: i,
                    name: root.userListNames[i].name,
                    icon: root.userListNames[i].icon || "file:///home/anirudh/.face"
                });
            }
        } else {
            let curName = (typeof userModel !== "undefined" && userModel && userModel.lastUser) ? userModel.lastUser : "Anirudh";
            list.push({ index: 0, name: curName, icon: "file:///home/anirudh/.face" });
        }
        return list;
    }

    ListView {
        id: sessionHelper
        model: typeof sessionModel !== "undefined" ? sessionModel : null
        currentIndex: root.sessionIndex
        opacity: 0
        width: 100
        height: 100
        z: -100
        delegate: Item {
            property string sName: {
                let n = model.name || "";
                if (n.includes("/") || n === "") return "Plasma (Wayland)";
                return n;
            }
            Component.onCompleted: {
                let n = model.name || "";
                if (n.includes("/") || n === "") n = "Plasma (Wayland)";
                let arr = root.sessionListNames.slice();
                arr[index] = n;
                root.sessionListNames = arr;
            }
        }
    }

    ListView {
        id: userHelper
        model: typeof userModel !== "undefined" ? userModel : null
        currentIndex: root.userIndex
        opacity: 0
        width: 100
        height: 100
        z: -100
        delegate: Item {
            property string uName: model.realName || model.name || ""
            property string uLogin: model.name || ""
            property string uIcon: model.icon || ""
            Component.onCompleted: {
                let n = model.realName || model.name || "";
                if (n === "") n = "Anirudh";
                let login = model.name || "anirudh";
                let icon = model.icon || "";
                if (!icon) icon = "file:///var/lib/AccountsService/icons/" + login;
                let arr = root.userListNames.slice();
                arr[index] = { name: n, login: login, icon: icon };
                root.userListNames = arr;
            }
        }
    }

    Timer {
        id: focusTimer
        interval: 300
        running: true
        onTriggered: pwd.forceActiveFocus()
    }

    Connections {
        target: typeof sddm !== "undefined" ? sddm : null
        function onLoginFailed() {
            root.errorMessage = "ACCESS DENIED";
            pwd.text = "";
            shakeAnim.start();
            errTimer.start();
        }
    }

    Timer {
        id: errTimer
        interval: 3000
        onTriggered: root.errorMessage = ""
    }

    Component.onCompleted: {
        if (typeof keyboard !== "undefined") {
            root.capsLockActive = root.getSysCapsLock();
            keyboard.numLock = true;
        }
        if (typeof config !== "undefined" && typeof config.colorMode !== "undefined") {
            Colors.mode = config.colorMode;
        }
        fadeAnim.start();
        updateTime();
    }

    function updateTime() {
        let d = new Date();
        let hoursVal = d.getHours();
        let amPmVal = hoursVal >= 12 ? "PM" : "AM";
        if (root.use12Hour) {
            hoursVal = hoursVal % 12;
            if (hoursVal === 0) hoursVal = 12;
        }
        hText.text = String(hoursVal).padStart(2, "0");
        mText.text = String(d.getMinutes()).padStart(2, "0");
        if (typeof sChipText !== "undefined") sChipText.text = String(d.getSeconds()).padStart(2, "0");
        amPmChipText.text = amPmVal;
        dateChipText.text = Qt.formatDate(d, "dddd, MMM d");
    }

    ParallelAnimation {
        id: fadeAnim
        NumberAnimation { target: root; property: "ui1"; from: 0; to: 1; duration: 400; easing.type: Easing.OutCubic }
        NumberAnimation { target: root; property: "ui2"; from: 0; to: 1; duration: 400; easing.type: Easing.OutCubic }
    }

    SequentialAnimation {
        id: shakeAnim
        NumberAnimation { target: shakeTranslate; property: "x"; to: 15*s; duration: 50 }
        NumberAnimation { target: shakeTranslate; property: "x"; to: -15*s; duration: 50 }
        NumberAnimation { target: shakeTranslate; property: "x"; to: 15*s; duration: 50 }
        NumberAnimation { target: shakeTranslate; property: "x"; to: -15*s; duration: 50 }
        NumberAnimation { target: shakeTranslate; property: "x"; to: 0; duration: 50 }
    }

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.ArrowCursor
        z: -1
        onClicked: pwd.forceActiveFocus()
    }

    // Layout Row
    Row {
        id: mainLayout
        anchors.centerIn: parent
        anchors.verticalCenterOffset: root.showKeyboard ? -65 * s : 0
        Behavior on anchors.verticalCenterOffset { NumberAnimation { duration: 300; easing.type: Easing.OutCubic } }
        spacing: 96 * s
        opacity: root.ui1
        scale: 0.98 + (0.02 * root.ui1)

        // Left Section: Clock & Date
        Column {
            id: clockSection
            width: 330 * s
            spacing: 20 * s
            anchors.verticalCenter: parent.verticalCenter
            
            Timer {
                interval: 500
                running: true
                repeat: true
                onTriggered: root.updateTime()
            }

            // Clock Container with overlapping AM/PM badge
            Item {
                id: clockContainer
                width: clockNumbers.width
                height: clockNumbers.height

                // Clock Stack (pure symmetric two-line hours & minutes with wide Google Sans Flex)
                Column {
                    id: clockNumbers
                    spacing: -24 * s
                    
                    Text {
                        id: hText
                        text: "12"
                        font.family: root.clockFont
                        font.pixelSize: 140 * s
                        font.weight: Font.Bold
                        font.variableAxes: ({ "wdth": 135, "wght": 850, "ROND": 40 })
                        font.features: { "tnum": 1 }
                        color: Colors.on_surface
                    }
                    
                    Text {
                        id: mText
                        text: "00"
                        font.family: root.clockFont
                        font.pixelSize: 140 * s
                        font.weight: Font.Bold
                        font.variableAxes: ({ "wdth": 135, "wght": 850, "ROND": 40 })
                        font.features: { "tnum": 1 }
                        color: Colors.primary
                    }
                }

                // AM/PM Pill - Overlapping bottom-right corner of clock numerals
                Rectangle {
                    id: amPmPill
                    visible: root.use12Hour
                    anchors.right: clockNumbers.right
                    anchors.bottom: clockNumbers.bottom
                    anchors.bottomMargin: 10 * s
                    anchors.rightMargin: -12 * s
                    z: 10
                    width: 62 * s
                    height: 36 * s
                    radius: 18 * s
                    color: Colors.surfaceContainerHighest
                    border.color: Colors.outlineVariant
                    border.width: 1 * s

                    Text {
                        id: amPmChipText
                        anchors.centerIn: parent
                        text: new Date().getHours() >= 12 ? "PM" : "AM"
                        font.family: root.sansFont
                        font.pixelSize: 12 * s
                        font.bold: true
                        font.letterSpacing: 1 * s
                        color: Colors.primary
                    }
                }
            }

            // Date & Seconds Pills Row (below the clock, spanning full width)
            Row {
                id: dateRow
                width: parent.width
                spacing: 8 * s

                // Date Pill
                Rectangle {
                    id: datePill
                    width: root.showSeconds ? (parent.width - 64 * s - dateRow.spacing) : parent.width
                    height: 44 * s
                    radius: 22 * s
                    color: Colors.secondaryContainer
                    
                    Text {
                        id: dateChipText
                        anchors.centerIn: parent
                        text: Qt.formatDate(new Date(), "dddd, MMM d")
                        font.family: root.sansFont
                        font.pixelSize: 12.5 * s
                        font.weight: Font.Medium
                        color: Colors.on_secondary_container
                    }
                }

                // Seconds Pill
                Rectangle {
                    id: secondsPill
                    visible: root.showSeconds
                    width: 64 * s
                    height: 44 * s
                    radius: 22 * s
                    color: Colors.surfaceContainerHigh
                    border.color: Colors.outlineVariant
                    border.width: 1 * s

                    Text {
                        id: sChipText
                        anchors.centerIn: parent
                        text: String(new Date().getSeconds()).padStart(2, "0") + "s"
                        font.family: root.sansFont
                        font.pixelSize: 12 * s
                        font.bold: true
                        color: Colors.primary
                    }
                }
            }
        }

        // Right Section: Quick Settings & Login
        Column {
            id: rightSection
            width: 376 * s
            spacing: 24 * s
            anchors.verticalCenter: parent.verticalCenter

            // Quick Settings Header
            Text {
                text: "Quick Settings"
                font.family: root.sansFont
                font.pixelSize: 12 * s
                font.bold: true
                font.letterSpacing: 0.5 * s
                color: Colors.on_surface_variant
            }

            // Settings Grid
            Grid {
                id: sessionGrid
                columns: 2
                spacing: 16 * s
                
                // Power Tile
                Rectangle {
                    id: powerTile
                    width: 180 * s; height: 76 * s; radius: 38 * s
                    color: powerMouse.pressed ? Colors.surfaceContainerLowest : (powerMouse.containsMouse ? Colors.surfaceContainerHighest : Colors.surfaceContainer)
                    scale: powerMouse.pressed ? 0.95 : (powerMouse.containsMouse ? 1.03 : 1.0)
                    Behavior on color { ColorAnimation { duration: 150 } }
                    Behavior on scale { NumberAnimation { duration: 200; easing.type: Easing.OutBack } }
                    
                    Row {
                        anchors.fill: parent
                        anchors.leftMargin: 16 * s
                        anchors.rightMargin: 16 * s
                        spacing: 12 * s
                        
                        Rectangle {
                            width: 48 * s; height: 48 * s; radius: 24 * s
                            color: Colors.secondaryContainer
                            anchors.verticalCenter: parent.verticalCenter
                            
                            Image {
                                id: powerIcon
                                source: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M18.36 6.64a9 9 0 1 1-12.73 0'></path><line x1='12' y1='2' x2='12' y2='12'></line></svg>"
                                anchors.centerIn: parent
                                width: 20 * s
                                height: 20 * s
                                sourceSize.width: 40 * s
                                sourceSize.height: 40 * s
                                visible: false
                            }
                            ColorOverlay {
                                anchors.fill: powerIcon
                                source: powerIcon
                                color: Colors.on_surface
                            }
                        }
                        
                        Column {
                            anchors.verticalCenter: parent.verticalCenter
                            spacing: 2 * s
                            
                            Text {
                                text: "Power"
                                font.family: root.sansFont
                                font.pixelSize: 13 * s
                                font.bold: true
                                color: powerMouse.containsMouse ? Colors.primary : Colors.on_surface
                                Behavior on color { ColorAnimation { duration: 150 } }
                            }
                            Text {
                                text: "Shut Down"
                                font.family: root.sansFont
                                font.pixelSize: 10 * s
                                color: powerMouse.containsMouse ? Colors.on_surface : Colors.on_surface_variant
                                Behavior on color { ColorAnimation { duration: 150 } }
                            }
                        }
                    }
                    
                    MouseArea {
                        id: powerMouse
                        anchors.fill: parent
                        hoverEnabled: true
                        cursorShape: Qt.PointingHandCursor
                        onClicked: if (!root.isQuickshell) sddm.powerOff();
                    }
                }
                
                // Session Tile
                Rectangle {
                    id: sessionTile
                    width: 180 * s; height: 76 * s; radius: 38 * s
                    color: sessionMouse.pressed ? Colors.surfaceContainerLowest : (sessionMouse.containsMouse ? Colors.surfaceContainerHighest : Colors.surfaceContainer)
                    scale: sessionMouse.pressed ? 0.95 : (sessionMouse.containsMouse ? 1.03 : 1.0)
                    Behavior on color { ColorAnimation { duration: 150 } }
                    Behavior on scale { NumberAnimation { duration: 200; easing.type: Easing.OutBack } }
                    
                    Row {
                        anchors.fill: parent
                        anchors.leftMargin: 16 * s
                        anchors.rightMargin: 16 * s
                        spacing: 12 * s
                        
                        Rectangle {
                            width: 48 * s; height: 48 * s; radius: 24 * s
                            color: Colors.secondaryContainer
                            anchors.verticalCenter: parent.verticalCenter
                            
                            Image {
                                id: sessionIcon
                                source: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='3'></circle><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path></svg>"
                                anchors.centerIn: parent
                                width: 20 * s
                                height: 20 * s
                                sourceSize.width: 40 * s
                                sourceSize.height: 40 * s
                                visible: false
                            }
                            ColorOverlay {
                                anchors.fill: sessionIcon
                                source: sessionIcon
                                color: Colors.on_surface
                            }
                        }
                        
                        Column {
                            anchors.verticalCenter: parent.verticalCenter
                            spacing: 2 * s
                            
                            Text {
                                text: "Session"
                                font.family: root.sansFont
                                font.pixelSize: 13 * s
                                font.bold: true
                                color: sessionMouse.containsMouse ? Colors.primary : Colors.on_surface
                                Behavior on color { ColorAnimation { duration: 150 } }
                            }
                            Text {
                                text: root.currentSessionName
                                font.family: root.sansFont
                                font.pixelSize: 10 * s
                                color: sessionMouse.containsMouse ? Colors.on_surface : Colors.on_surface_variant
                                Behavior on color { ColorAnimation { duration: 150 } }
                            }
                        }
                    }
                    
                    MouseArea {
                        id: sessionMouse
                        anchors.fill: parent
                        hoverEnabled: true
                        cursorShape: Qt.PointingHandCursor
                        onClicked: {
                            userPopup.visible = false;
                            sessionPopup.visible = !sessionPopup.visible;
                        }
                    }
                }
                
                // Reboot Tile
                Rectangle {
                    id: rebootTile
                    width: 180 * s; height: 76 * s; radius: 38 * s
                    color: rebootMouse.pressed ? Colors.surfaceContainerLowest : (rebootMouse.containsMouse ? Colors.surfaceContainerHighest : Colors.surfaceContainer)
                    scale: rebootMouse.pressed ? 0.95 : (rebootMouse.containsMouse ? 1.03 : 1.0)
                    Behavior on color { ColorAnimation { duration: 150 } }
                    Behavior on scale { NumberAnimation { duration: 200; easing.type: Easing.OutBack } }
                    
                    Row {
                        anchors.fill: parent
                        anchors.leftMargin: 16 * s
                        anchors.rightMargin: 16 * s
                        spacing: 12 * s
                        
                        Rectangle {
                            width: 48 * s; height: 48 * s; radius: 24 * s
                            color: Colors.secondaryContainer
                            anchors.verticalCenter: parent.verticalCenter
                            
                            Image {
                                id: rebootIcon
                                source: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67'></path></svg>"
                                anchors.centerIn: parent
                                width: 20 * s
                                height: 20 * s
                                sourceSize.width: 40 * s
                                sourceSize.height: 40 * s
                                visible: false
                            }
                            ColorOverlay {
                                anchors.fill: rebootIcon
                                source: rebootIcon
                                color: Colors.on_surface
                            }
                        }
                        
                        Column {
                            anchors.verticalCenter: parent.verticalCenter
                            spacing: 2 * s
                            
                            Text {
                                text: "Reboot"
                                font.family: root.sansFont
                                font.pixelSize: 13 * s
                                font.bold: true
                                color: rebootMouse.containsMouse ? Colors.primary : Colors.on_surface
                                Behavior on color { ColorAnimation { duration: 150 } }
                            }
                            Text {
                                text: "Restart"
                                font.family: root.sansFont
                                font.pixelSize: 10 * s
                                color: rebootMouse.containsMouse ? Colors.on_surface : Colors.on_surface_variant
                                Behavior on color { ColorAnimation { duration: 150 } }
                            }
                        }
                    }
                    
                    MouseArea {
                        id: rebootMouse
                        anchors.fill: parent
                        hoverEnabled: true
                        cursorShape: Qt.PointingHandCursor
                        onClicked: if (!root.isQuickshell) sddm.reboot();
                    }
                }

                // Sleep Tile
                Rectangle {
                    id: suspendTile
                    width: 180 * s; height: 76 * s; radius: 38 * s
                    color: suspendMouse.pressed ? Colors.surfaceContainerLowest : (suspendMouse.containsMouse ? Colors.surfaceContainerHighest : Colors.surfaceContainer)
                    scale: suspendMouse.pressed ? 0.95 : (suspendMouse.containsMouse ? 1.03 : 1.0)
                    Behavior on color { ColorAnimation { duration: 150 } }
                    Behavior on scale { NumberAnimation { duration: 200; easing.type: Easing.OutBack } }
                    
                    Row {
                        anchors.fill: parent
                        anchors.leftMargin: 16 * s
                        anchors.rightMargin: 16 * s
                        spacing: 12 * s
                        
                        Rectangle {
                            width: 48 * s; height: 48 * s; radius: 24 * s
                            color: Colors.secondaryContainer
                            anchors.verticalCenter: parent.verticalCenter
                            
                            Image {
                                id: suspendIcon
                                source: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path></svg>"
                                anchors.centerIn: parent
                                width: 20 * s
                                height: 20 * s
                                sourceSize.width: 40 * s
                                sourceSize.height: 40 * s
                                visible: false
                            }
                            ColorOverlay {
                                anchors.fill: suspendIcon
                                source: suspendIcon
                                color: Colors.on_surface
                            }
                        }
                        
                        Column {
                            anchors.verticalCenter: parent.verticalCenter
                            spacing: 2 * s
                            
                            Text {
                                text: "Sleep"
                                font.family: root.sansFont
                                font.pixelSize: 13 * s
                                font.bold: true
                                color: suspendMouse.containsMouse ? Colors.primary : Colors.on_surface
                                Behavior on color { ColorAnimation { duration: 150 } }
                            }
                            Text {
                                text: "Suspend"
                                font.family: root.sansFont
                                font.pixelSize: 10 * s
                                color: suspendMouse.containsMouse ? Colors.on_surface : Colors.on_surface_variant
                                Behavior on color { ColorAnimation { duration: 150 } }
                            }
                        }
                    }
                    
                    MouseArea {
                        id: suspendMouse
                        anchors.fill: parent
                        hoverEnabled: true
                        cursorShape: Qt.PointingHandCursor
                        onClicked: if (!root.isQuickshell) sddm.suspend();
                    }
                }
            }

            // Login Card
            Rectangle {
                id: notificationCard
                width: 376 * s
                height: 180 * s
                radius: 32 * s
                color: Colors.surface
                transform: Translate { id: shakeTranslate }
                
                Column {
                    anchors.fill: parent
                    anchors.margins: 20 * s
                    spacing: 12 * s
                    
                    // Card Header with Status and Caps Lock indicator
                    Item {
                        width: parent.width
                        height: 26 * s

                        // Left: Lock status & Host
                        Row {
                            anchors.left: parent.left
                            anchors.verticalCenter: parent.verticalCenter
                            spacing: 6 * s
                            
                            Item {
                                width: 14 * s
                                height: 14 * s
                                anchors.verticalCenter: parent.verticalCenter
                                Image {
                                    id: lockIcon
                                    source: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect><path d='M7 11V7a5 5 0 0 1 10 0v4'></path></svg>"
                                    anchors.fill: parent
                                    sourceSize.width: 28 * s
                                    sourceSize.height: 28 * s
                                    visible: false
                                }
                                ColorOverlay {
                                    anchors.fill: lockIcon
                                    source: lockIcon
                                    color: Colors.on_surface_variant
                                }
                            }
                            Text {
                                text: (!root.isQuickshell && sddm.hostName) ? (sddm.hostName.charAt(0).toUpperCase() + sddm.hostName.slice(1)) : "Astra"
                                font.family: root.sansFont
                                font.pixelSize: 11 * s
                                font.bold: true
                                color: Colors.on_surface
                                anchors.verticalCenter: parent.verticalCenter
                            }
                            Text {
                                text: "•"
                                font.pixelSize: 9 * s
                                color: Colors.outlineVariant
                                anchors.verticalCenter: parent.verticalCenter
                            }
                            Text {
                                text: "Locked"
                                font.family: root.sansFont
                                font.pixelSize: 10 * s
                                font.weight: Font.Medium
                                color: Colors.on_surface_variant
                                anchors.verticalCenter: parent.verticalCenter
                            }
                        }

                        // Right: Badges & Actions
                        Row {
                            anchors.right: parent.right
                            anchors.verticalCenter: parent.verticalCenter
                            spacing: 8 * s

                            // Caps Lock Indicator Badge (only visible when Caps Lock is active)
                            Rectangle {
                                id: capsLockBadge
                                visible: root.capsLockActive
                                width: capsRow.implicitWidth + 16 * s
                                height: 24 * s
                                radius: 12 * s
                                color: Colors.error
                                opacity: visible ? 1 : 0
                                Behavior on opacity { NumberAnimation { duration: 150 } }
                                
                                Row {
                                    id: capsRow
                                    anchors.centerIn: parent
                                    spacing: 4 * s
                                    Text {
                                        text: "⇪"
                                        font.pixelSize: 11 * s
                                        font.bold: true
                                        color: "#ffffff"
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                    Text {
                                        text: "Caps Lock"
                                        font.family: root.sansFont
                                        font.pixelSize: 10 * s
                                        font.bold: true
                                        color: "#ffffff"
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                }
                            }

                            // Virtual Keyboard Toggle Button
                            Rectangle {
                                id: kbToggleBtn
                                width: 26 * s
                                height: 26 * s
                                radius: 13 * s
                                color: root.showKeyboard ? Colors.primary : (kbMouse.containsMouse ? Colors.surfaceContainerHighest : Colors.surfaceContainerHigh)
                                border.color: Colors.outlineVariant
                                border.width: 1 * s
                                scale: kbMouse.pressed ? 0.92 : (kbMouse.containsMouse ? 1.08 : 1.0)
                                Behavior on scale { NumberAnimation { duration: 120; easing.type: Easing.OutQuad } }
                                Behavior on color { ColorAnimation { duration: 120 } }

                                Image {
                                    id: kbIcon
                                    anchors.centerIn: parent
                                    anchors.horizontalCenterOffset: 0.75 * s
                                    width: 14 * s
                                    height: 14 * s
                                    sourceSize.width: 28 * s
                                    sourceSize.height: 28 * s
                                    source: root.showKeyboard ? root.kbHideSvg : root.kbSvg
                                    visible: false
                                }
                                ColorOverlay {
                                    anchors.fill: kbIcon
                                    source: kbIcon
                                    color: root.showKeyboard ? Colors.on_primary : Colors.on_surface_variant
                                }

                                MouseArea {
                                    id: kbMouse
                                    anchors.fill: parent
                                    hoverEnabled: true
                                    cursorShape: Qt.PointingHandCursor
                                    onClicked: {
                                        root.showKeyboard = !root.showKeyboard;
                                        pwd.forceActiveFocus();
                                    }
                                }
                            }
                        }
                    }

                    // Password Box
                    Rectangle {
                        width: parent.width
                        height: 52 * s
                        radius: 26 * s
                        color: Colors.surfaceContainerHigh
                        border.color: root.errorMessage !== "" ? Colors.error : (pwd.activeFocus ? Colors.primary : "transparent")
                        border.width: pwd.activeFocus ? 2 * s : 0
                        Behavior on border.color { ColorAnimation { duration: 150 } }

                        // Minimal placeholder text
                        Text {
                            anchors.centerIn: parent
                            text: root.errorMessage !== "" ? root.errorMessage : (root.capsLockActive ? "Caps Lock is on" : "Enter password")
                            font.family: root.sansFont
                            font.pixelSize: 13 * s
                            font.weight: Font.Normal
                            color: root.errorMessage !== "" ? Colors.error : (root.capsLockActive ? Colors.error : Colors.on_surface_variant)
                            visible: pwd.text.length === 0
                            opacity: visible ? 0.75 : 0
                        }

                        // Android 16 fluid Material You password character shapes
                        PasswordChars {
                            id: passCharsView
                            anchors.fill: parent
                            anchors.leftMargin: 20 * s
                            anchors.rightMargin: 20 * s
                            passwordModel: passCharModel
                            visible: pwd.text.length > 0
                        }

                        TextInput {
                            id: pwd
                            anchors.fill: parent
                            anchors.leftMargin: 20 * s
                            anchors.rightMargin: 20 * s
                            font.family: root.sansFont
                            font.pixelSize: 18 * s
                            color: "transparent"
                            echoMode: TextInput.Normal
                            horizontalAlignment: TextInput.AlignHCenter
                            verticalAlignment: TextInput.AlignVCenter
                            clip: true
                            cursorVisible: false
                            cursorDelegate: Item { visible: false; width: 0; height: 0 }
                            selectionColor: "transparent"
                            selectedTextColor: "transparent"

                            Keys.priority: Keys.BeforeItem
                            Keys.onPressed: function(event) {
                                // Auto-detect physical Caps Lock state from typed character casing
                                if (event.text && event.text.length === 1) {
                                    let ch = event.text;
                                    let isShift = Boolean(event.modifiers & Qt.ShiftModifier);
                                    if (ch >= 'A' && ch <= 'Z') {
                                        root.capsLockActive = !isShift;
                                    } else if (ch >= 'a' && ch <= 'z') {
                                        root.capsLockActive = isShift;
                                    }
                                }
                            }

                            onTextChanged: {
                                let currentLen = pwd.text.length;
                                if (currentLen > root.lastPassLength) {
                                    for (let i = root.lastPassLength; i < currentLen; i++) {
                                        passCharModel.append({ shapeIndex: Math.floor(Math.random() * 10) });
                                    }
                                } else if (currentLen < root.lastPassLength) {
                                    for (let i = root.lastPassLength - 1; i >= currentLen; i--) {
                                        passCharModel.remove(i);
                                    }
                                }
                                root.lastPassLength = currentLen;
                            }

                            onAccepted: {
                                if (!root.isQuickshell && pwd.text !== "") {
                                    let currentUser = userHelper.currentItem ? userHelper.currentItem.uLogin : userModel.lastUser;
                                    sddm.login(currentUser, pwd.text, root.sessionIndex);
                                }
                            }
                        }

                        MouseArea {
                            anchors.fill: parent
                            cursorShape: Qt.PointingHandCursor
                            z: -1
                            onClicked: pwd.forceActiveFocus()
                        }
                    }

                    // Bottom Row
                    Row {
                        width: parent.width
                        spacing: 12 * s
                        
                        // User Switch / Avatar Pill
                        Rectangle {
                            id: userPill
                            width: userRow.implicitWidth + 24 * s
                            height: 38 * s
                            radius: 19 * s
                            color: userMouse.pressed ? Colors.surfaceContainerLowest : (userMouse.containsMouse ? Colors.surfaceContainerHighest : Colors.surfaceContainerHigh)
                            scale: userMouse.pressed ? 0.95 : (userMouse.containsMouse ? 1.02 : 1.0)
                            Behavior on color { ColorAnimation { duration: 150 } }
                            Behavior on scale { NumberAnimation { duration: 150; easing.type: Easing.OutBack } }
                            
                            Row {
                                id: userRow
                                anchors.centerIn: parent
                                spacing: 8 * s
                                
                                Item {
                                    width: 24 * s
                                    height: 24 * s
                                    anchors.verticalCenter: parent.verticalCenter
                                    
                                    Image {
                                        id: userAvatar
                                        anchors.fill: parent
                                        source: typeof userModel !== "undefined" && userModel.lastUser ? ("file:///var/lib/AccountsService/icons/" + userModel.lastUser) : "file:///home/anirudh/.face"
                                        fillMode: Image.PreserveAspectCrop
                                        visible: false
                                    }

                                    Rectangle {
                                        id: avatarMask
                                        anchors.fill: parent
                                        radius: width / 2
                                        visible: false
                                        layer.enabled: true
                                    }

                                    MultiEffect {
                                        anchors.fill: userAvatar
                                        source: userAvatar
                                        maskEnabled: true
                                        maskSource: avatarMask
                                        visible: userAvatar.status === Image.Ready
                                    }
                                    
                                    Rectangle {
                                        anchors.fill: parent
                                        radius: width / 2
                                        color: Colors.secondaryContainer
                                        visible: userAvatar.status !== Image.Ready
                                        
                                        Image {
                                            id: userPillFallbackIcon
                                            anchors.centerIn: parent
                                            width: 14 * s
                                            height: 14 * s
                                            sourceSize.width: 28 * s
                                            sourceSize.height: 28 * s
                                            source: root.personSvg
                                            visible: false
                                        }
                                        ColorOverlay {
                                            anchors.fill: userPillFallbackIcon
                                            source: userPillFallbackIcon
                                            color: Colors.on_secondary_container
                                        }
                                    }
                                }
                                
                                Text {
                                    id: userText
                                    anchors.verticalCenter: parent.verticalCenter
                                    text: root.currentUserName
                                    font.family: root.sansFont
                                    font.pixelSize: 11 * s
                                    font.bold: true
                                    color: Colors.on_surface
                                }
                            }
                            
                            MouseArea {
                                id: userMouse
                                anchors.fill: parent
                                hoverEnabled: true
                                cursorShape: Qt.PointingHandCursor
                                onClicked: {
                                    sessionPopup.visible = false;
                                    userPopup.visible = !userPopup.visible;
                                }
                            }
                        }

                        // Unlock Button Pill
                        Item {
                            width: parent.width - userPill.width - 12 * s
                            height: 38 * s
                            
                            Rectangle {
                                anchors.right: parent.right
                                width: parent.width
                                height: 38 * s
                                radius: 19 * s
                                color: loginMouse.pressed ? Colors.secondaryContainer : (loginMouse.containsMouse ? Colors.secondary : Colors.primary)
                                scale: loginMouse.pressed ? 0.95 : (loginMouse.containsMouse ? 1.02 : 1.0)
                                Behavior on color { ColorAnimation { duration: 150 } }
                                Behavior on scale { NumberAnimation { duration: 150; easing.type: Easing.OutBack } }
                                
                                Row {
                                    anchors.centerIn: parent
                                    spacing: 6 * s
                                    
                                    Text {
                                        text: "Unlock"
                                        font.family: root.sansFont
                                        font.pixelSize: 11 * s
                                        font.bold: true
                                        color: Colors.on_primary
                                        anchors.verticalCenter: parent.verticalCenter
                                    }
                                    Text {
                                        text: "➔"
                                        font.family: root.sansFont
                                        font.pixelSize: 11 * s
                                        color: Colors.on_primary
                                        anchors.verticalCenter: parent.verticalCenter
                                        transform: Translate {
                                            x: loginMouse.containsMouse ? 3 * s : 0
                                            Behavior on x { NumberAnimation { duration: 150; easing.type: Easing.OutQuad } }
                                        }
                                    }
                                }
                                
                                MouseArea {
                                    id: loginMouse
                                    anchors.fill: parent
                                    hoverEnabled: true
                                    cursorShape: Qt.PointingHandCursor
                                    onClicked: pwd.accepted()
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // Backdrop dismiss area for popups
    MouseArea {
        id: popupDismiss
        anchors.fill: parent
        z: 90
        visible: sessionPopup.visible || userPopup.visible
        cursorShape: Qt.ArrowCursor
        onClicked: {
            sessionPopup.visible = false;
            userPopup.visible = false;
        }
    }

    // Material 3 Session Selection Popup
    Rectangle {
        id: sessionPopup
        z: 100
        visible: false
        width: 240 * s
        height: sessionContentCol.implicitHeight + 20 * s
        x: {
            let pt = sessionTile.mapToItem(root, 0, 0);
            return Math.min(Math.max(16 * s, pt.x - 20 * s), root.width - width - 16 * s);
        }
        y: {
            let pt = sessionTile.mapToItem(root, 0, sessionTile.height);
            return pt.y + 8 * s;
        }
        radius: 20 * s
        color: Colors.surfaceContainerHighest
        border.color: Colors.outlineVariant
        border.width: 1 * s

        Column {
            id: sessionContentCol
            anchors.fill: parent
            anchors.margins: 10 * s
            spacing: 4 * s

            Text {
                text: "Desktop Session"
                font.family: root.sansFont
                font.pixelSize: 11 * s
                font.bold: true
                color: Colors.on_surface_variant
                leftPadding: 8 * s
                topPadding: 4 * s
                bottomPadding: 4 * s
            }

            Repeater {
                model: root.getSessionList()
                delegate: Rectangle {
                    required property var modelData
                    width: parent.width
                    height: 38 * s
                    radius: 12 * s
                    color: itemMouse.pressed ? Colors.surfaceContainerLowest : (itemMouse.containsMouse ? Colors.surfaceContainerHigh : (root.sessionIndex === modelData.index ? Colors.secondaryContainer : "transparent"))
                    Behavior on color { ColorAnimation { duration: 120 } }

                    Item {
                        anchors.fill: parent
                        anchors.leftMargin: 12 * s
                        anchors.rightMargin: 12 * s

                        Item {
                            id: sIconBox
                            width: 20 * s
                            height: 20 * s
                            anchors.left: parent.left
                            anchors.verticalCenter: parent.verticalCenter

                            Image {
                                id: sIconImg
                                anchors.centerIn: parent
                                width: 18 * s
                                height: 18 * s
                                sourceSize.width: 36 * s
                                sourceSize.height: 36 * s
                                source: root.getSessionSvg(modelData.name)
                                visible: false
                            }
                            ColorOverlay {
                                anchors.fill: sIconImg
                                source: sIconImg
                                color: root.sessionIndex === modelData.index ? Colors.primary : Colors.on_surface_variant
                            }
                        }

                        Item {
                            id: sCheck
                            width: 16 * s
                            height: 16 * s
                            anchors.right: parent.right
                            anchors.verticalCenter: parent.verticalCenter
                            visible: root.sessionIndex === modelData.index

                            Image {
                                id: sCheckImg
                                anchors.fill: parent
                                sourceSize.width: 32 * s
                                sourceSize.height: 32 * s
                                source: root.checkmarkSvg
                                visible: false
                            }
                            ColorOverlay {
                                anchors.fill: sCheckImg
                                source: sCheckImg
                                color: Colors.primary
                            }
                        }

                        Text {
                            anchors.left: sIconBox.right
                            anchors.leftMargin: 10 * s
                            anchors.right: sCheck.left
                            anchors.rightMargin: 6 * s
                            anchors.verticalCenter: parent.verticalCenter
                            text: modelData.name
                            font.family: root.sansFont
                            font.pixelSize: 11.5 * s
                            font.bold: root.sessionIndex === modelData.index
                            color: root.sessionIndex === modelData.index ? Colors.on_secondary_container : Colors.on_surface
                            elide: Text.ElideRight
                        }
                    }

                    MouseArea {
                        id: itemMouse
                        anchors.fill: parent
                        hoverEnabled: true
                        cursorShape: Qt.PointingHandCursor
                        onClicked: {
                            root.sessionIndex = modelData.index;
                            root.currentSessionName = modelData.name;
                            sessionPopup.visible = false;
                        }
                    }
                }
            }
        }
    }

    // Material 3 User Selection Popup
    Rectangle {
        id: userPopup
        z: 100
        visible: false
        width: 250 * s
        height: userContentCol.implicitHeight + 20 * s
        x: {
            let pt = userPill.mapToItem(root, 0, 0);
            return Math.min(Math.max(16 * s, pt.x - 20 * s), root.width - width - 16 * s);
        }
        y: {
            let pt = userPill.mapToItem(root, 0, userPill.height);
            return pt.y + 8 * s;
        }
        radius: 20 * s
        color: Colors.surfaceContainerHighest
        border.color: Colors.outlineVariant
        border.width: 1 * s

        Column {
            id: userContentCol
            anchors.fill: parent
            anchors.margins: 10 * s
            spacing: 4 * s

            Text {
                text: "Switch User"
                font.family: root.sansFont
                font.pixelSize: 11 * s
                font.bold: true
                color: Colors.on_surface_variant
                leftPadding: 8 * s
                topPadding: 4 * s
                bottomPadding: 4 * s
            }

            Repeater {
                model: root.getUserList()
                delegate: Rectangle {
                    required property var modelData
                    width: parent.width
                    height: 42 * s
                    radius: 12 * s
                    color: uItemMouse.pressed ? Colors.surfaceContainerLowest : (uItemMouse.containsMouse ? Colors.surfaceContainerHigh : (root.userIndex === modelData.index ? Colors.secondaryContainer : "transparent"))
                    Behavior on color { ColorAnimation { duration: 120 } }

                    Item {
                        anchors.fill: parent
                        anchors.leftMargin: 12 * s
                        anchors.rightMargin: 12 * s

                        Item {
                            id: uAvatarBox
                            width: 26 * s
                            height: 26 * s
                            anchors.left: parent.left
                            anchors.verticalCenter: parent.verticalCenter

                            Image {
                                id: uAvatarImg
                                anchors.fill: parent
                                source: (modelData && modelData.icon) ? modelData.icon : ""
                                fillMode: Image.PreserveAspectCrop
                                visible: false
                            }

                            Rectangle {
                                id: uAvatarMask
                                anchors.fill: parent
                                radius: width / 2
                                visible: false
                                layer.enabled: true
                            }

                            MultiEffect {
                                anchors.fill: uAvatarImg
                                source: uAvatarImg
                                maskEnabled: true
                                maskSource: uAvatarMask
                                visible: uAvatarImg.status === Image.Ready
                            }

                            Rectangle {
                                anchors.fill: parent
                                radius: width / 2
                                color: root.userIndex === modelData.index ? Colors.primary : Colors.secondaryContainer
                                visible: uAvatarImg.status !== Image.Ready

                                Image {
                                    id: uFallbackIcon
                                    anchors.centerIn: parent
                                    width: 14 * s
                                    height: 14 * s
                                    sourceSize.width: 28 * s
                                    sourceSize.height: 28 * s
                                    source: root.personSvg
                                    visible: false
                                }
                                ColorOverlay {
                                    anchors.fill: uFallbackIcon
                                    source: uFallbackIcon
                                    color: root.userIndex === modelData.index ? Colors.on_primary : Colors.on_secondary_container
                                }
                            }
                        }

                        Item {
                            id: uCheck
                            width: 16 * s
                            height: 16 * s
                            anchors.right: parent.right
                            anchors.verticalCenter: parent.verticalCenter
                            visible: root.userIndex === modelData.index

                            Image {
                                id: uCheckImg
                                anchors.fill: parent
                                sourceSize.width: 32 * s
                                sourceSize.height: 32 * s
                                source: root.checkmarkSvg
                                visible: false
                            }
                            ColorOverlay {
                                anchors.fill: uCheckImg
                                source: uCheckImg
                                color: Colors.primary
                            }
                        }

                        Text {
                            anchors.left: uAvatarBox.right
                            anchors.leftMargin: 10 * s
                            anchors.right: uCheck.left
                            anchors.rightMargin: 6 * s
                            anchors.verticalCenter: parent.verticalCenter
                            text: modelData.name
                            font.family: root.sansFont
                            font.pixelSize: 11.5 * s
                            font.bold: root.userIndex === modelData.index
                            color: root.userIndex === modelData.index ? Colors.on_secondary_container : Colors.on_surface
                            elide: Text.ElideRight
                        }
                    }

                    MouseArea {
                        id: uItemMouse
                        anchors.fill: parent
                        hoverEnabled: true
                        cursorShape: Qt.PointingHandCursor
                        onClicked: {
                            root.userIndex = modelData.index;
                            root.currentUserName = modelData.name;
                            userPopup.visible = false;
                        }
                    }
                }
            }
        }
    }

    // Theme Mode Quick Switcher Button (Bottom-Right) - Expands leftwards into a pill on hover
    Rectangle {
        id: themeModeBtn
        anchors.bottom: parent.bottom
        anchors.right: parent.right
        anchors.margins: 24 * s
        height: 32 * s
        radius: 16 * s
        width: themeMouse.containsMouse ? 128 * s : 32 * s
        clip: true
        color: themeMouse.pressed ? Colors.surfaceContainerLowest : (themeMouse.containsMouse ? Colors.surfaceContainerHighest : Colors.surfaceContainer)
        border.color: Colors.outlineVariant
        border.width: 1 * s
        scale: themeMouse.pressed ? 0.95 : (themeMouse.containsMouse ? 1.04 : 1.0)
        Behavior on scale { NumberAnimation { duration: 150; easing.type: Easing.OutBack } }
        Behavior on width { NumberAnimation { duration: 250; easing.type: Easing.OutCubic } }
        Behavior on color { ColorAnimation { duration: 150 } }

        // Icon on the RIGHT side
        Text {
            id: themeIcon
            anchors.right: parent.right
            anchors.rightMargin: 8 * s
            anchors.verticalCenter: parent.verticalCenter
            width: 16 * s
            horizontalAlignment: Text.AlignHCenter
            text: Colors.isMono ? "◐" : "◑"
            font.pixelSize: 15 * s
            color: Colors.primary
        }

        // Text on the LEFT side
        Text {
            id: themeLabel
            anchors.left: parent.left
            anchors.leftMargin: 14 * s
            anchors.right: themeIcon.left
            anchors.rightMargin: 6 * s
            anchors.verticalCenter: parent.verticalCenter
            text: Colors.isMono ? "Monochrome" : "Dynamic"
            font.family: root.sansFont
            font.pixelSize: 11 * s
            font.bold: true
            color: Colors.on_surface
            opacity: Math.max(0, Math.min(1, (themeModeBtn.width - 48 * s) / (40 * s)))
            visible: opacity > 0
        }

        MouseArea {
            id: themeMouse
            anchors.fill: parent
            hoverEnabled: true
            cursorShape: Qt.PointingHandCursor
            onClicked: {
                Colors.mode = (Colors.mode === "dynamic" ? "monochrome" : "dynamic");
            }
        }
    }

    // Material 3 Virtual Keyboard (slides up from bottom)
    VirtualKeyboard {
        id: virtualKeyboard
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.bottom: parent.bottom
        anchors.bottomMargin: root.showKeyboard ? 24 * s : (-implicitHeight - 30 * s)
        targetInput: pwd
        sansFont: root.sansFont
        capsLock: root.capsLockActive
        opacity: root.showKeyboard ? 1 : 0
        Behavior on anchors.bottomMargin { NumberAnimation { duration: 320; easing.type: Easing.OutCubic } }
        Behavior on opacity { NumberAnimation { duration: 250 } }
        onCloseRequested: {
            root.showKeyboard = false;
            pwd.forceActiveFocus();
        }
        onCapsLockToggled: function(active) {
            root.capsLockActive = active;
            if (typeof sysCapsLock !== "undefined" && sysCapsLock.lock) {
                sysCapsLock.lock(active);
            }
        }
        onCapsLockChanged: {
            if (root.capsLockActive !== capsLock) {
                root.capsLockActive = capsLock;
            }
        }
    }
}