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
var OffCanvasButtonBox_1 = __importDefault(require("./OffCanvasButtonBox"));
var services_changeVariant_1 = __importDefault(require("../services/services.changeVariant"));
var style_1 = require("../style");
var services_position_1 = __importDefault(require("../services/services.position"));
var style_2 = require("../style");
var OffCanvas = function (_a) {
    var variant_offCnv = _a.variant_offCnv, position = _a.position, children = _a.children, show = _a.show, setShow = _a.setShow;
    /* deklaracia */
    var _b = react_1.default.useState(style_1.master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_hide), showCanvas = _b[0], setshowCanvas = _b[1];
    var _c = react_1.default.useState(style_2.allVariantOffCanvas.defaultVariantForOffCanvas), variant_style = _c[0], setVariant_style = _c[1];
    /* podmienka zatvarania a ovarania offCanvas a zmena varianty */
    react_1.default.useEffect(function () {
        /* servis pre zmenu varianty */
        setVariant_style(services_changeVariant_1.default.changeVariantForOffCanvas({ variant_offCnv: variant_offCnv }));
        if (show) {
            setshowCanvas(services_position_1.default.positionOffCanvas({ position: position, show: show }));
        }
        else {
            setshowCanvas(services_position_1.default.positionOffCanvas({ position: position, show: show }));
        }
    }, [show, variant_offCnv]);
    /* zatvaranie offCanvas mimo form*/
    var handleClickHideBlock = function (event) {
        var target = event.target;
        var eventId = target.id;
        eventId === "screenBlok" && setShow(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: "offCanvasBlock", style: __assign(__assign({}, variant_style.styleForBox), showCanvas.styleForBox) }, react_1.default.Children.map(children, function (child) {
            return react_1.default.cloneElement(child, { variant_style: variant_style });
        })),
        react_1.default.createElement("div", { id: "screenBlok", onClick: handleClickHideBlock, style: __assign(__assign({}, variant_style.styleForScreen), showCanvas.styleForScreen) })));
};
exports.OffCanvasComponent = {
    OffCanvas: OffCanvas,
    OffCanvasHeader: OffCanvasHeader_1.default,
    OffCanvasBody: OffCanvasBody_1.default,
    OffCanvasButoonBox: OffCanvasButtonBox_1.default
};
//# sourceMappingURL=OffCanvas.master.js.map