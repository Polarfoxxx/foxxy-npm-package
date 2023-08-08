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
var showAndHide_services_1 = __importDefault(require("../showAndHide.services"));
var style_1 = require("../../style");
var changeVariant_services_1 = __importDefault(require("../changeVariant.services"));
var style_2 = require("../../style");
describe("test dropDown services", function () {
    test("testing show/hide", function () {
        var show = true;
        var services = showAndHide_services_1.default.showAndHide_dropdown({ show: show });
        expect(services).toEqual(__assign({}, style_1.masterStyle_forDropdown.showAndHideDropdown.dropdown_Show));
    });
    test("testing change variant", function () {
        var variant_drop = "dark";
        var services = changeVariant_services_1.default.changeVariantDropDwn(variant_drop);
        expect(services).toEqual(__assign({}, style_2.variantStyle_forDropdown.dropDarkVariant));
    });
    test("testing undefined variant", function () {
        var variant_drop = "";
        var services = changeVariant_services_1.default.changeVariantDropDwn(variant_drop);
        expect(services).toEqual(__assign({}, style_2.variantStyle_forDropdown.dropDefVariant));
    });
});
//# sourceMappingURL=testDropdownServices.test.js.map