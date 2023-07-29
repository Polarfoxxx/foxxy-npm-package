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
exports.variant_modals = void 0;
var react_1 = __importDefault(require("react"));
var Modal_master_1 = require("../components/Modal/components/Modal.master");
var Form_master_1 = require("../components/Form/components/Form.master");
var Button_master_1 = require("../components/Button/components/Button.master");
var Button_stories_1 = __importDefault(require("./Button.stories"));
var Form_stories_1 = __importDefault(require("./Form.stories"));
var addon_actions_1 = require("@storybook/addon-actions");
var meta = {
    title: 'Example/Modal',
    component: Modal_master_1.ModalComponent.Modal,
    tags: ['autodocs'],
    argTypes: __assign(__assign({ variant_mdl: {
            description: 'you can choose a color variant for the component Modal',
            options: ['default', 'dark', 'white'],
            control: { type: 'radio' },
        }, show: {
            control: "boolean",
            description: "show/hide",
            defaultValue: false,
            table: {
                defaultValue: { summary: false }
            },
        } }, Button_stories_1.default.argTypes), Form_stories_1.default.argTypes),
    args: __assign(__assign({ show: false, text: "click me" }, Button_stories_1.default.args), Form_stories_1.default.args)
};
exports.default = meta;
var variant_modals = function (args) {
    var handleClick = function (e) {
        e.preventDefault();
        (0, addon_actions_1.action)("submit")();
    };
    var _a = args.buttonCount, buttonCount = _a === void 0 ? 1 : _a;
    var buttons = Array.from({ length: buttonCount }, function (_, index) { return (react_1.default.createElement(Button_master_1.ButtonComponent.Button, __assign({ onClick: handleClick }, args, { key: "button".concat(index) }))); });
    var _b = args.inputCount, inputCount = _b === void 0 ? 1 : _b;
    var inputs = Array.from({ length: inputCount }, function (_, index) { return (react_1.default.createElement(Form_master_1.FormComponent.FormInputs, __assign({}, args, { key: "button".concat(index) }))); });
    return (react_1.default.createElement(Modal_master_1.ModalComponent.Modal, __assign({}, args),
        react_1.default.createElement(Form_master_1.FormComponent.Form, __assign({ onSubmit: handleClick, variant: 'default' }, args),
            react_1.default.createElement(Form_master_1.FormComponent.FormHeader, null),
            inputs,
            react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null, buttons))));
};
exports.variant_modals = variant_modals;
exports.variant_modals.args = {};
//# sourceMappingURL=Modal.stories.js.map