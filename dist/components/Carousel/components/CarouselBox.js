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
var CarouselButtonsBox_1 = __importDefault(require("./CarouselButtonsBox"));
var CarouselBox = function (_a) {
    var children = _a.children;
    var index_REF = react_1.default.useRef(0);
    var _b = react_1.default.useState({}), movement_style = _b[0], setMovement_style = _b[1];
    /* pocet obsujucich deti */
    var childrenCount = react_1.default.Children.count(children);
    /* funkcia na zmenu indexu pohybu */
    var handleClickChangeMovementIndex = function (event) {
        var eventType = event.target;
        var eventTargetName = eventType.className;
        if (eventTargetName === "right") {
            index_REF.current === (childrenCount - 1) ? index_REF.current = 0 : index_REF.current = index_REF.current + 1;
            setMovement_style({
                right: "".concat(index_REF.current * 60, "vw")
            });
        }
        else {
            index_REF.current < 1 ? index_REF.current = (childrenCount - 1) : index_REF.current = index_REF.current - 1;
            setMovement_style({
                right: "".concat(index_REF.current * 60, "vw")
            });
        }
        ;
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(CarouselButtonsBox_1.default, { handleClickChangeMovementIndex: handleClickChangeMovementIndex })),
        react_1.default.createElement("div", { style: __assign(__assign({}, style_1.allStyleComponentsCarousel.styleCarouselBox), movement_style) }, children)));
};
exports.default = CarouselBox;
//# sourceMappingURL=CarouselBox.js.map