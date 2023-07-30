"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var services_chancheVariant_1 = __importDefault(require("../services.chancheVariant"));
var style_1 = require("../../style");
describe("test carousel component", function () {
    test("testing undefindent variants", function () {
        var variant_crs = undefined;
        var CSS_Variant = style_1.allvariantForCarousel.defaultStyleforCarousel;
        var services = services_chancheVariant_1.default.changeVariantForCarousel({ variant_crs: variant_crs });
        expect(services).toEqual(expect.objectContaining(CSS_Variant));
    });
    test("testing empty text variants", function () {
        var variant_crs = "";
        var CSS_Variant = style_1.allvariantForCarousel.defaultStyleforCarousel;
        var services = services_chancheVariant_1.default.changeVariantForCarousel({ variant_crs: variant_crs });
        expect(services).toEqual(expect.objectContaining(CSS_Variant));
    });
    test("testing dark variants", function () {
        var variant_crs = "dark";
        var CSS_Variant = style_1.allvariantForCarousel.darkStyleforCarousel;
        var services = services_chancheVariant_1.default.changeVariantForCarousel({ variant_crs: variant_crs });
        expect(services).toEqual(expect.objectContaining(CSS_Variant));
    });
});
//# sourceMappingURL=test_servicesChangeVariant.test.js.map