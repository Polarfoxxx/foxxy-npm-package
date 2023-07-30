"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var services_changeVariant_1 = __importDefault(require("../services.changeVariant"));
var style_1 = require("../../style");
describe("test form component", function () {
    test("testing undefindent variants", function () {
        var variant_form = undefined;
        var CSS_Variant = style_1.allVariantForForm.defaultStyleForForm;
        var services = services_changeVariant_1.default.changerVariantForForm({ variant: variant });
        expect(services).toEqual(expect.objectContaining(CSS_Variant));
    });
    test("testing white variants", function () {
        var variant_form = "white";
        var CSS_Variant = style_1.allVariantForForm.whiteStyleForForm;
        var services = services_changeVariant_1.default.changerVariantForForm({ variant: variant });
        expect(services).toEqual(expect.objectContaining(CSS_Variant));
    });
});
//# sourceMappingURL=test_servicesChangeVariant.test.js.map