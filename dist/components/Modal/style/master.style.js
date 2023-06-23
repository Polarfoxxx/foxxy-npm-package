"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideStyleForModal = exports.visibleStyleForModal = void 0;
exports.visibleStyleForModal = {
    fullScreen: {
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0"
    },
    formBlock: {
        width: "30vw",
        height: "auto",
        position: "absolute",
        top: "50px",
        left: "50%",
        transform: "translate(-50%)",
        transition: "0.6s"
    }
};
exports.hideStyleForModal = {
    fullScreen: {
        display: "block"
    },
    formBlock: {
        width: "30vw",
        height: "auto",
        position: "absolute",
        top: "-100%",
        left: "50%",
        transform: "translate(-50%)",
        transition: "0.6s"
    }
};
//# sourceMappingURL=master.style.js.map