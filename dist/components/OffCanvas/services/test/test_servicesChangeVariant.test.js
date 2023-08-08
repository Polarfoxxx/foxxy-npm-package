"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var services_changeVariant_1 = __importDefault(require("../services.changeVariant"));
var style_1 = require("../../style");
describe("test services change variant", function () {
    test("format style object", function () {
        var variant_offCnv = "dark";
        var services = services_changeVariant_1.default.changeVariantForOffCanvas({ variant_offCnv: variant_offCnv });
        expect(services).toMatchObject({
            styleForBox: expect.any(Object),
            styleForScreen: expect.any(Object),
            styleHeader: expect.any(Object),
            styleBody: expect.any(Object),
            styleButton_Box: expect.any(Object),
        });
    });
    test("false variant", function () {
        var variant_offCnv = "xxx";
        var servicesTwo = services_changeVariant_1.default.changeVariantForOffCanvas({ variant_offCnv: variant_offCnv });
        var returningObject = style_1.allVariantOffCanvas.defaultVariantForOffCanvas;
        expect(servicesTwo).toEqual(expect.objectContaining(returningObject));
    });
});
//# sourceMappingURL=test_servicesChangeVariant.test.js.map