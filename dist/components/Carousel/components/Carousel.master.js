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
exports.CarouselComponent = void 0;
var react_1 = __importDefault(require("react"));
var CarouselItem_1 = __importDefault(require("./CarouselItem"));
var CarouselBox_1 = __importDefault(require("./CarouselBox"));
var style_1 = require("../style");
var services_chancheVariant_1 = __importDefault(require("../services/services.chancheVariant"));
var Carousel = function (_a) {
    var children = _a.children, variant = _a.variant;
    /* servis pre zmenu varianty funkcia*/
    var variantFromCarousel = services_chancheVariant_1.default.changeVariantForCarousel({ variant: variant }) || style_1.allvariantForCarousel.defaultStyleforCarousel;
    return (react_1.default.createElement("div", { className: "carousel", style: __assign(__assign({}, style_1.allStyleComponentsCarousel.styleCarouselMasterComponent), variantFromCarousel.varCarousel) }, react_1.default.Children.map(children, function (child) {
        return react_1.default.cloneElement(child, { variantFromCarousel: variantFromCarousel });
    })));
};
exports.CarouselComponent = {
    Carousel: Carousel,
    CarouselBox: CarouselBox_1.default,
    CarouselItem: CarouselItem_1.default,
};
//# sourceMappingURL=Carousel.master.js.map