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
exports.variant_white = exports.variant_funny = exports.variant_dark = exports.variant_default = void 0;
// import the FormComponent and the ButtonComponent
var react_1 = __importDefault(require("react"));
var Form_master_1 = require("../components/Form/components/Form.master");
var Button_master_1 = require("../components/Button/components/Button.master");
var Button_stories_1 = __importDefault(require("./Button.stories"));
var addon_actions_1 = require("@storybook/addon-actions");
var meta = {
    title: 'FoxxyComp/Form',
    component: Form_master_1.FormComponent.Form,
    tags: ['autodocs'],
    argTypes: __assign({ formName: {
            description: 'choose the name of the Form',
            control: 'text',
            defaultValue: 'my form',
        }, variant_form: {
            description: 'you can choose a color variant for the component Form',
            options: ['default', 'dark', 'funny', 'white'],
            control: { type: 'radio' },
        }, label: {
            description: "the name of the input",
            control: "text",
        }, placeholder: {
            description: "the placeholder of the input",
            control: "text",
        }, buttonCount: {
            description: "number of button components",
            control: { type: 'number', min: 1, max: 5 },
            defaultValue: 1,
        }, inputCount: {
            description: "number of input components",
            control: { type: 'number', min: 1, max: 5 },
            defaultValue: 1,
        } }, Button_stories_1.default.argTypes),
    args: __assign({ form_name: 'me form', label: "", placeholder: "me input" }, Button_stories_1.default.args),
};
exports.default = meta;
var variant_default = function (args) {
    /* funkcia pre submit */
    var handleClick = function (e) {
        e.preventDefault();
        (0, addon_actions_1.action)("submit")();
    };
    var _a = args.buttonCount, buttonCount = _a === void 0 ? 1 : _a;
    var buttons = Array.from({ length: buttonCount }, function (_, index) { return (react_1.default.createElement(Button_master_1.ButtonComponent.Button, __assign({ onClick: handleClick, type: 'submit' }, args, { key: "button".concat(index) }))); });
    var _b = args.inputCount, inputCount = _b === void 0 ? 1 : _b;
    var inputs = Array.from({ length: inputCount }, function (_, index) { return (react_1.default.createElement(Form_master_1.FormComponent.FormInputs, __assign({}, args, { key: "Form".concat(index) }))); });
    return (react_1.default.createElement(Form_master_1.FormComponent.Form, __assign({ onSubmit: handleClick, variant: 'default' }, args),
        react_1.default.createElement(Form_master_1.FormComponent.FormHeader, null),
        inputs,
        react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null, buttons)));
};
exports.variant_default = variant_default;
exports.variant_default.args = {};
var variant_dark = function (args) {
    return (react_1.default.createElement(Form_master_1.FormComponent.Form, __assign({ variant_form: 'dark' }, args),
        react_1.default.createElement(Form_master_1.FormComponent.FormHeader, null),
        react_1.default.createElement(Form_master_1.FormComponent.FormInputs, __assign({}, args)),
        react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
            react_1.default.createElement(Button_master_1.ButtonComponent.Button, { text: "click" }))));
};
exports.variant_dark = variant_dark;
exports.variant_dark.args = {};
var variant_funny = function (args) {
    return (react_1.default.createElement(Form_master_1.FormComponent.Form, __assign({ variant_form: 'funny' }, args),
        react_1.default.createElement(Form_master_1.FormComponent.FormHeader, null),
        react_1.default.createElement(Form_master_1.FormComponent.FormInputs, __assign({}, args)),
        react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
            react_1.default.createElement(Button_master_1.ButtonComponent.Button, { text: "click" }))));
};
exports.variant_funny = variant_funny;
exports.variant_funny.args = {};
var variant_white = function (args) {
    return (react_1.default.createElement(Form_master_1.FormComponent.Form, __assign({ variant_form: 'white' }, args),
        react_1.default.createElement(Form_master_1.FormComponent.FormHeader, null),
        react_1.default.createElement(Form_master_1.FormComponent.FormInputs, __assign({}, args)),
        react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
            react_1.default.createElement(Button_master_1.ButtonComponent.Button, { text: "click" }))));
};
exports.variant_white = variant_white;
exports.variant_white.args = {};
//# sourceMappingURL=Form.stories.js.map