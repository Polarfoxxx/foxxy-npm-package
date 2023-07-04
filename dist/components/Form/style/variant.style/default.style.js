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
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStyleForForm = void 0;
var master_style_1 = require("../master.style/master.style");
exports.defaultStyleForForm = {
    form: __assign({ backgroundColor: "rgb(210, 233, 233)" }, master_style_1.masterStyleForForm.form),
    formBody: __assign({}, master_style_1.masterStyleForForm.formBody),
    formHeader: __assign(__assign({}, master_style_1.masterStyleForForm.formHeader), { backgroundColor: "rgb(17, 106, 123)", color: "white" }),
    formLabel: __assign(__assign({}, master_style_1.masterStyleForForm.formLabel), { color: "black" }),
    formInputs: __assign(__assign({}, master_style_1.masterStyleForForm.formInputs), { borderRadius: "7px", border: "1px solid rgb(82, 109, 130)" }),
};
//# sourceMappingURL=default.style.js.map