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
    var children = _a.children, variant_crs = _a.variant_crs;
    var _b = react_1.default.useState(style_1.allvariantForCarousel.defaultStyleforCarousel), variantFromCarousel = _b[0], setVariantFromCarousel = _b[1];
    /* servis pre zmenu varianty funkcia*/
    react_1.default.useEffect(function () {
        setVariantFromCarousel(services_chancheVariant_1.default.changeVariantForCarousel({ variant_crs: variant_crs }));
    }, [variant_crs]);
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