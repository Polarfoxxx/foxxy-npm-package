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
exports.OffCanvasComponent = void 0;
var react_1 = __importDefault(require("react"));
var OffCanvasHeader_1 = __importDefault(require("./OffCanvasHeader"));
var OffCanvasBody_1 = __importDefault(require("./OffCanvasBody"));
var mastrer_style_1 = require("../style/mastrer.style");
var services_1 = __importDefault(require("../services"));
var showAndHide_style_1 = require("../style/showAndHide.style");
var OffCanvas = function (_a) {
    var variant = _a.variant, children = _a.children, show = _a.show, setShow = _a.setShow;
    var _b = react_1.default.useState(showAndHide_style_1.styleForOffCanvasComponent_hide), displayOffCanvas = _b[0], setDisplayOffCanvas = _b[1];
    /* servis pre meniacu sa variantu */
    var variant_Style = services_1.default.changeVariantForOffCanvas({ variant: variant });
    /* podmienka zatvarania a ovarania offCanvas */
    react_1.default.useEffect(function () {
        if (show) {
            setDisplayOffCanvas(showAndHide_style_1.styleForOffCanvasComponent_show);
        }
        else {
            setDisplayOffCanvas(showAndHide_style_1.styleForOffCanvasComponent_hide);
        }
    }, [show]);
    /* zatvaranie offCanvas */
    var handleClickHideBlock = function (event) {
        var target = event.target;
        var eventId = target.id;
        eventId === "screenBlok" && setShow(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: "offCanvasBlock", style: __assign(__assign({}, mastrer_style_1.styleMasterForOffCanvasComponent.styleForBox), displayOffCanvas.styleForBox) }, children),
        react_1.default.createElement("div", { id: "screenBlok", onClick: handleClickHideBlock, style: __assign(__assign({}, mastrer_style_1.styleMasterForOffCanvasComponent.styleForScreen), displayOffCanvas.styleForScreen) })));
};
exports.OffCanvasComponent = {
    OffCanvas: OffCanvas,
    OffCanvasHeader: OffCanvasHeader_1.default,
    OffCanvasBody: OffCanvasBody_1.default
};
//# sourceMappingURL=OffCanvas.master.js.map