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
exports.DropdownComponent = void 0;
var react_1 = __importDefault(require("react"));
var style_1 = require("../style");
var DropdownBox_1 = __importDefault(require("./DropdownBox"));
var DropdownItems_1 = __importDefault(require("./DropdownItems"));
var showAndHide_services_1 = __importDefault(require("../services/showAndHide.services"));
var changeVariant_services_1 = __importDefault(require("../services/changeVariant.services"));
var Dropdopwn = function (_a) {
    var children = _a.children, variant_drop = _a.variant_drop, drop_text = _a.drop_text;
    var _b = react_1.default.useState(true), show = _b[0], setShow = _b[1];
    var _c = react_1.default.useState(style_1.masterStyle_forDropdown.showAndHideDropdown.dropdown_Hide), show_CSS = _c[0], setShow_CSS = _c[1];
    var _d = react_1.default.useState(style_1.variantStyle_forDropdown.dropDefVariant), variant_CSS = _d[0], setVariant_CSS = _d[1];
    /* funkcia zatvarania a otvaranie */
    var handleClick = function (e) {
        setShow(!show);
        setShow_CSS(showAndHide_services_1.default.showAndHide_dropdown({ show: show }));
    };
    /* hover effect na button */
    var boxMouseHandler = function (e, mouseOver) {
        var box = e.currentTarget;
        box.style.backgroundColor = mouseOver ? "rgba(162, 162, 162, 0.022)" : "rgba(5, 5, 5, 0.263)";
    };
    /* servis pre variantu */
    react_1.default.useEffect(function () {
        setVariant_CSS(changeVariant_services_1.default.changeVariantDropDwn(variant_drop));
    }, [variant_drop]);
    return (react_1.default.createElement("div", { className: "dropdown", style: __assign(__assign(__assign({}, show_CSS), style_1.masterStyle_forDropdown.styleMasterDropdown), variant_CSS.dropdown) },
        react_1.default.createElement("button", { onMouseOver: function (e) { return boxMouseHandler(e, true); }, onMouseOut: function (e) { return boxMouseHandler(e, false); }, onClick: handleClick, style: __assign(__assign({}, style_1.masterStyle_forDropdown.styleMasterButtonDrop), variant_CSS.dropBtn) }, drop_text.length > 18 ? "err" : drop_text),
        react_1.default.Children.map(children, function (child) {
            return react_1.default.cloneElement(child, { variant_CSS: variant_CSS });
        })));
};
exports.DropdownComponent = {
    Dropdopwn: Dropdopwn,
    DropdownBox: DropdownBox_1.default,
    DropdownItems: DropdownItems_1.default
};
//# sourceMappingURL=Dropdown.master.js.map