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
var styleMasterForOffCanvasComponent = {
    styleForBox: {
        width: "30vw",
        height: "100vh",
        position: "absolute",
        backgroundColor: "orange",
        transition: "1s"
    },
    styleForScreen: {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "rgba(66, 66, 66, 0.658)"
    }
};
var styleForOffCanvasComponent_hide = {
    styleForBox: {
        left: "-100%",
        transition: "1s"
    },
    styleForScreen: {
        display: "none"
    }
};
var styleForOffCanvasComponent_show = {
    styleForBox: {
        left: "0",
        transition: "1s"
    },
    styleForScreen: {
        display: "block"
    }
};
var OffCanvas = function (_a) {
    var children = _a.children, show = _a.show, setShow = _a.setShow;
    var _b = react_1.default.useState(styleForOffCanvasComponent_hide), displayOffCanvas = _b[0], setDisplayOffCanvas = _b[1];
    /* podmienka zatvarania a ovarania offCanvas */
    react_1.default.useEffect(function () {
        if (show) {
            setDisplayOffCanvas(styleForOffCanvasComponent_show);
        }
        else {
            setDisplayOffCanvas(styleForOffCanvasComponent_hide);
        }
    }, [show]);
    /* zatvaranie offCanvas */
    var handleClickHideBlock = function (event) {
        var target = event.target;
        var eventId = target.id;
        eventId === "screenBlok" && setShow(false);
    };
    return (react_1.default.createElement("div", { id: "screenBlok", onClick: handleClickHideBlock, style: __assign(__assign({}, styleMasterForOffCanvasComponent.styleForScreen), displayOffCanvas.styleForScreen) },
        react_1.default.createElement("div", { id: "offCanvasBlock", style: __assign(__assign({}, styleMasterForOffCanvasComponent.styleForBox), displayOffCanvas.styleForBox) }, children)));
};
exports.OffCanvasComponent = {
    OffCanvas: OffCanvas,
    OffCanvasHeader: OffCanvasHeader_1.default,
    OffCanvasBody: OffCanvasBody_1.default
};
//# sourceMappingURL=OffCanvas.master.js.map