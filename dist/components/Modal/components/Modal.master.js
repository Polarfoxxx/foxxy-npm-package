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
exports.ModalComponent = void 0;
var react_1 = __importDefault(require("react"));
var master_style_1 = require("../style/master.style");
var master_style_2 = require("../style/master.style");
var services_1 = __importDefault(require("../services"));
var Modal = function (_a) {
    var variant = _a.variant, children = _a.children, display = _a.display;
    /* deklarace */
    var displayStyle = master_style_2.hideStyleForModal;
    /* servis meniaci variantu */
    var variantStyle = services_1.default.changeVariantForModal({ variant: variant });
    /* anonimna funkcia pre zobrazovanie a zatvaranie modalu */
    (function () {
        if (display) {
            displayStyle = master_style_1.visibleStyleForModal;
        }
        else {
            displayStyle = master_style_2.hideStyleForModal;
        }
        ;
    })();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: "modalFullBlock", style: __assign(__assign({}, displayStyle.fullScreen), variantStyle) },
            react_1.default.createElement("div", { style: __assign({}, displayStyle.formBlock) }, children))));
};
exports.ModalComponent = {
    Modal: Modal
};
//# sourceMappingURL=Modal.master.js.map