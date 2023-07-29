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
exports.variant_carousel = void 0;
var react_1 = __importDefault(require("react"));
var Carousel_master_1 = require("../components/Carousel/components/Carousel.master");
var meta = {
    title: 'Example/Carousel',
    component: Carousel_master_1.CarouselComponent.Carousel,
    tags: ['autodocs'],
    argTypes: {
        variant_crs: {
            description: 'you can choose a color variant for the component Carousel',
            options: ['default', 'dark', 'white'],
            control: { type: 'radio' },
        },
    },
    args: {
        carouselItems: ["test1", "test2"]
    },
};
exports.default = meta;
var variant_carousel = function (args) {
    return (react_1.default.createElement(Carousel_master_1.CarouselComponent.Carousel, __assign({}, args),
        react_1.default.createElement(Carousel_master_1.CarouselComponent.CarouselBox, null, Array.isArray(args.carouselItems) && args.carouselItems.map(function (item, index) { return (react_1.default.createElement(Carousel_master_1.CarouselComponent.CarouselItem, { key: index }, item)); }))));
};
exports.variant_carousel = variant_carousel;
exports.variant_carousel.args = {};
//# sourceMappingURL=carousel.stories.js.map