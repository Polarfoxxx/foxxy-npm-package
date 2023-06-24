"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffCanvasComponent = void 0;
var react_1 = __importDefault(require("react"));
var OffCanvasHeader_1 = __importDefault(require("./OffCanvasHeader"));
var OffCanvasBody_1 = __importDefault(require("./OffCanvasBody"));
var OffCanvas = function (_a) {
    var children = _a.children;
    var _b = react_1.default.useState("8"), state = _b[0], useState = _b[1];
    return (react_1.default.createElement("div", { style: {} },
        react_1.default.createElement("h1", null, state),
        children));
};
exports.OffCanvasComponent = {
    OffCanvas: OffCanvas,
    OffCanvasHeader: OffCanvasHeader_1.default,
    OffCanvasBody: OffCanvasBody_1.default
};
//# sourceMappingURL=OffCanvas.master.js.map