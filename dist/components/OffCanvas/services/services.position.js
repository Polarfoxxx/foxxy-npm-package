"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicePositionOffCanvas = {
    positionOffCanvas: positionOffCanvas
};
exports.default = servicePositionOffCanvas;
function positionOffCanvas(_a) {
    var position = _a.position, show = _a.show;
    if (show) {
        switch (position) {
            case "left":
                return style_1.master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_show;
            case "top":
                return style_1.master_ShowStyleOffCanvas.showAndHide_top.styleForOffCanvasComponent_show;
            case "right":
                return style_1.master_ShowStyleOffCanvas.showAndHide_right.styleForOffCanvasComponent_show;
            default:
                return style_1.master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_show;
        }
    }
    else {
        switch (position) {
            case "left":
                return style_1.master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_hide;
            case "top":
                return style_1.master_ShowStyleOffCanvas.showAndHide_top.styleForOffCanvasComponent_hide;
            case "right":
                return style_1.master_ShowStyleOffCanvas.showAndHide_right.styleForOffCanvasComponent_hide;
            default:
                return style_1.master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_hide;
        }
    }
}
//# sourceMappingURL=services.position.js.map