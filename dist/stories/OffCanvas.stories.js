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
exports.variant_OffCanvas = void 0;
var react_1 = __importDefault(require("react"));
var OffCanvas_master_1 = require("../components/OffCanvas/components/OffCanvas.master");
var Button_master_1 = require("../components/Button/components/Button.master");
var addon_actions_1 = require("@storybook/addon-actions");
var Button_stories_1 = __importDefault(require("./Button.stories"));
var meta = {
    title: 'Example/OffCanvas',
    component: OffCanvas_master_1.OffCanvasComponent.OffCanvas,
    tags: ['autodocs'],
    argTypes: __assign({ position: {
            description: 'position OffCanvas',
            options: ['left', 'top', 'right'],
            control: { type: 'radio' },
            defaultValue: "left"
        }, variant_offCnv: {
            description: 'you can choose a color variant for the component OffCanvas',
            options: ['default', 'dark', 'white'],
            control: { type: 'radio' },
        }, show: {
            description: "show/hide",
            control: "boolean",
            defaultValue: false
        }, header_Tittle: {
            description: "write the name ofCanvas",
            control: "text",
            defaultValue: "My titte",
        }, body_content: {
            description: "write the content ofCanvas",
            control: "text",
            defaultValue: "My titte",
        } }, Button_stories_1.default.argTypes),
    args: __assign({ show: false, position: "left", header_Tittle: "My titte", body_content: "My content", variant_offCnv: "default" }, Button_stories_1.default.args)
};
exports.default = meta;
var variant_OffCanvas = function (args) {
    var handleClick = function (e) {
        (0, addon_actions_1.action)("click button setShow FALSE")();
    };
    return (react_1.default.createElement(OffCanvas_master_1.OffCanvasComponent.OffCanvas, __assign({}, args),
        react_1.default.createElement(OffCanvas_master_1.OffCanvasComponent.OffCanvasHeader, null, args.header_Tittle),
        react_1.default.createElement(OffCanvas_master_1.OffCanvasComponent.OffCanvasBody, null, args.body_content),
        react_1.default.createElement(OffCanvas_master_1.OffCanvasComponent.OffCanvasButoonBox, null,
            react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
                react_1.default.createElement(Button_master_1.ButtonComponent.Button, __assign({ onClick: handleClick }, args))))));
};
exports.variant_OffCanvas = variant_OffCanvas;
exports.variant_OffCanvas.args = {};
//# sourceMappingURL=OffCanvas.stories.js.map