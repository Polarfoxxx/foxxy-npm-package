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
var services_position_1 = __importDefault(require("../services.position"));
var master_top_style_1 = require("../../style/master.style/position_top/master.top.style");
describe("test position OffCanvas", function () {
    test("object format for position and valid display", function () {
        var position = "left";
        var show = true;
        var services = services_position_1.default.positionOffCanvas({ position: position, show: show });
        expect(services).toMatchObject({
            styleForBox: expect.any(Object),
            styleForScreen: expect.any(Object),
        });
    });
    test("object format for position and display invalid", function () {
        var position = "top";
        var show = false;
        var services = services_position_1.default.positionOffCanvas({ position: position, show: show });
        expect(services).toEqual({
            styleForBox: expect.objectContaining(__assign(__assign({}, master_top_style_1.styleMasterForOffCanvasComponent_top.styleForBox), { top: "-100%", transition: "1s" })),
            styleForScreen: expect.objectContaining({
                display: "none",
            })
        });
    });
});
//# sourceMappingURL=test_servicePosition.test.js.map