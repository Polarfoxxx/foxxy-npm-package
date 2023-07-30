"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var services_changeVariant_1 = __importDefault(require("../services.changeVariant"));
var style_1 = require("../../style");
describe("test modal component", function () {
    test("testing undefindent variants", function () {
        var variant_mdl = undefined;
        var CSS_Variant = style_1.allvariantsForModal.defaultStyleForModal;
        var services = services_changeVariant_1.default.changeVariantForModal({ variant_mdl: variant_mdl });
        expect(services).toEqual(expect.objectContaining(CSS_Variant));
    });
    test("testing empty text variants", function () {
        var variant_mdl = "";
        var CSS_Variant = style_1.allvariantsForModal.defaultStyleForModal;
        var services = services_changeVariant_1.default.changeVariantForModal({ variant_mdl: variant_mdl });
        expect(services).toEqual(expect.objectContaining(CSS_Variant));
    });
    test("testing white variants", function () {
        var variant_mdl = "white";
        var CSS_Variant = style_1.allvariantsForModal.whiteStyleForModal;
        var services = services_changeVariant_1.default.changeVariantForModal({ variant_mdl: variant_mdl });
        expect(services).toEqual(expect.objectContaining(CSS_Variant));
    });
});
//# sourceMappingURL=test_servicesChangeVariant.test.js.map