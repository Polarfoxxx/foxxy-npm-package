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
var services_1 = __importDefault(require("../services"));
var master_style_1 = require("../style/master.style");
var showAndHide_style_1 = require("../style/showAndHide.style");
var style_1 = require("../style");
var Modal = function (_a) {
    var variant = _a.variant, children = _a.children, show = _a.show, setShow = _a.setShow;
    var _b = react_1.default.useState(showAndHide_style_1.styleForModalComponent_hide), showStyle = _b[0], setShowStyle = _b[1];
    /* servis meniaci variantu */
    var variant_Style = style_1.allvariantsForModal.defaultStyleForModal;
    if (variant) {
        variant_Style = services_1.default.changeVariantForModal({ variant: variant });
    }
    ;
    /* zatvaranie otvarianie */
    react_1.default.useEffect(function () {
        if (show) {
            setShowStyle(showAndHide_style_1.styleForModalComponent_show);
        }
        else {
            setShowStyle(showAndHide_style_1.styleForModalComponent_hide);
        }
        ;
    }, [show]);
    /* zatvaranie modalu */
    var handleClickHideModal = function (event) {
        var target = event.target;
        var targetId = target.id;
        targetId === "modalScreen" && setShow(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { onClick: handleClickHideModal, id: "modalScreen", style: __assign(__assign(__assign({}, master_style_1.styleMasterForModalComponent.fullScreen), showStyle.fullScreen), variant_Style) }),
        react_1.default.createElement("div", { id: 'modalForm', style: __assign(__assign(__assign({}, master_style_1.styleMasterForModalComponent.formBlock), showStyle.formBlock), variant_Style) }, children)));
};
exports.ModalComponent = {
    Modal: Modal
};
//# sourceMappingURL=Modal.master.js.map