"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style_1 = require("../style");
var DropdownItems = function (_a) {
    var href = _a.href, name_link = _a.name_link, variant_CSS = _a.variant_CSS;
    /* hover effect */
    var boxMouseHandler = function (e, mouseOver) {
        var box = e.currentTarget;
        box.style.backgroundColor = mouseOver ? "#E9E8E9" : "transparent";
    };
    return (react_1.default.createElement("div", { onMouseOver: function (e) { return boxMouseHandler(e, true); }, onMouseOut: function (e) { return boxMouseHandler(e, false); } },
        react_1.default.createElement("a", { style: __assign(__assign({}, style_1.masterStyle_forDropdown.styleMasterDropItem), variant_CSS.dropItem), href: href }, name_link.length > 34 ? "err" : name_link)));
};
exports.default = DropdownItems;
//# sourceMappingURL=DropdownItems.js.map