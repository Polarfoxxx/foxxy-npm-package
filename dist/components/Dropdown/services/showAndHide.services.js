"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("../style");
var servicesShowAndHide_dropdown = {
    showAndHide_dropdown: showAndHide_dropdown
};
exports.default = servicesShowAndHide_dropdown;
function showAndHide_dropdown(_a) {
    var show = _a.show;
    if (show) {
        return style_1.masterStyle_forDropdown.showAndHideDropdown.dropdown_Show;
    }
    else {
        return style_1.masterStyle_forDropdown.showAndHideDropdown.dropdown_Hide;
    }
    ;
}
;
//# sourceMappingURL=showAndHide.services.js.map