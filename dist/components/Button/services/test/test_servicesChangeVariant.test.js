"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var services_changeVariant_1 = __importDefault(require("../services.changeVariant"));
var styles_1 = require("../../styles");
var styles_2 = require("../../styles");
describe("test button component", function () {
    test("testing the returned default object", function () {
        var variant_btn = undefined;
        var border = false;
        var round = false;
        var lg = false;
        var sm = false;
        var variant_style = styles_1.allVariantStyleForButton.defaultStyle.defStyle;
        var masterStyle = styles_2.allSizeButtonElement.masterStyle;
        var sizeElement = {};
        var services = services_changeVariant_1.default.changeVariantForButtons({ variant_btn: variant_btn, border: border, round: round, lg: lg, sm: sm });
        expect(services).toEqual(expect.objectContaining({ masterStyle: masterStyle, variant_style: variant_style, sizeElement: sizeElement }));
    });
    test("testing the returned object for random values", function () {
        var variant_btn = "dark";
        var border = true;
        var round = false;
        var lg = true;
        var sm = false;
        var variant_style = styles_1.allVariantStyleForButton.darkStyle.borderStyle;
        var masterStyle = styles_2.allSizeButtonElement.masterStyle;
        var sizeElement = styles_2.allSizeButtonElement.largeSize;
        var services = services_changeVariant_1.default.changeVariantForButtons({ variant_btn: variant_btn, border: border, round: round, lg: lg, sm: sm });
        expect(services).toEqual(expect.objectContaining({ masterStyle: masterStyle, variant_style: variant_style, sizeElement: sizeElement }));
    });
});
//# sourceMappingURL=test_servicesChangeVariant.test.js.map