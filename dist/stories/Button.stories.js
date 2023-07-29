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
exports.variant_ocean = exports.variant_sun = exports.variant_funny = exports.variant_dark = exports.variant_white = exports.variant_default = void 0;
var Button_master_1 = require("../components/Button/components/Button.master");
var react_1 = __importDefault(require("react"));
var addon_actions_1 = require("@storybook/addon-actions");
var meta = {
    title: 'Example/Button',
    component: Button_master_1.ButtonComponent.Button,
    tags: ['autodocs'],
    argTypes: {
        text: {
            control: "text",
            description: "text in button (max 9 letters)",
        },
        variant_btn: {
            description: "you can choose a color variant for the component button",
            options: ['default', 'dark', "funny", "white", "sun", "ocean"],
            control: { type: 'radio' },
            table: {
                defaultValue: { summary: "default" }
            }
        },
        border: {
            control: "boolean",
            description: "border change",
            defaultValue: false,
            table: {
                defaultValue: { summary: false }
            },
        },
        round: {
            description: "rounded edges",
            control: "boolean",
            defaultValue: false,
            table: {
                defaultValue: { summary: false }
            },
        },
        lg: {
            description: "bigger",
            control: "boolean",
            defaultValue: false,
            table: {
                defaultValue: { summary: false }
            },
        },
        sm: {
            description: "small",
            control: "boolean",
            defaultValue: false,
            table: {
                defaultValue: { summary: false }
            },
        },
    },
    args: {
        text: "click me",
        border: false,
        round: false,
        lg: false,
        sm: false,
    }
};
exports.default = meta;
var variant_default = function (args) {
    var handleClick = function (e) {
        (0, addon_actions_1.action)("click button")();
    };
    return (react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
        react_1.default.createElement(Button_master_1.ButtonComponent.Button, __assign({ onClick: handleClick, variant_btn: 'default' }, args))));
};
exports.variant_default = variant_default;
exports.variant_default.args = {};
var variant_white = function (args) {
    return (react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
        react_1.default.createElement(Button_master_1.ButtonComponent.Button, __assign({ variant_btn: 'white' }, args))));
};
exports.variant_white = variant_white;
exports.variant_white.args = {};
var variant_dark = function (args) {
    return (react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
        react_1.default.createElement(Button_master_1.ButtonComponent.Button, __assign({ variant_btn: 'dark' }, args))));
};
exports.variant_dark = variant_dark;
exports.variant_dark.args = {};
var variant_funny = function (args) {
    return (react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
        react_1.default.createElement(Button_master_1.ButtonComponent.Button, __assign({ variant_btn: 'funny' }, args))));
};
exports.variant_funny = variant_funny;
exports.variant_funny.args = {};
var variant_sun = function (args) {
    return (react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
        react_1.default.createElement(Button_master_1.ButtonComponent.Button, __assign({ variant_btn: 'sun' }, args))));
};
exports.variant_sun = variant_sun;
exports.variant_sun.args = {};
var variant_ocean = function (args) {
    return (react_1.default.createElement(Button_master_1.ButtonComponent.ButtonBox, null,
        react_1.default.createElement(Button_master_1.ButtonComponent.Button, __assign({ variant_btn: 'ocean' }, args))));
};
exports.variant_ocean = variant_ocean;
exports.variant_ocean.args = {};
//# sourceMappingURL=Button.stories.js.map