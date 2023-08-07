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
exports.variant_Dropdown = void 0;
var react_1 = __importDefault(require("react"));
var Dropdown_master_1 = require("../components/Dropdown/components/Dropdown.master");
var meta = {
    title: 'FoxxyComp/Dropdown',
    component: Dropdown_master_1.DropdownComponent.Dropdopwn,
    tags: ['autodocs'],
    argTypes: {
        variant_drop: {
            description: 'you can choose a color variant for the component Dropdown',
            options: ['default', 'dark', 'white'],
            control: { type: 'radio' },
        },
        drop_text: {
            control: { type: 'text' },
        },
        href: {
            control: { type: 'text' },
        }
    },
    args: {
        variant_drop: "default",
        drop_text: "dropdown",
        href: "https://translate.google.com/?hl=sk&sl=en&tl=sk&text=Your%20npm_public%20branch%20isn%27t%20protected&op=translate"
    }
};
exports.default = meta;
var variant_Dropdown = function (args) {
    return (react_1.default.createElement(Dropdown_master_1.DropdownComponent.Dropdopwn, __assign({}, args),
        react_1.default.createElement(Dropdown_master_1.DropdownComponent.DropdownBox, null,
            react_1.default.createElement(Dropdown_master_1.DropdownComponent.DropdownItems, __assign({ name_link: "dddfdgsdsddfdssssssdddsfdfdfsdddd" }, args)),
            react_1.default.createElement(Dropdown_master_1.DropdownComponent.DropdownItems, __assign({ name_link: "linkTwo" }, args)),
            react_1.default.createElement(Dropdown_master_1.DropdownComponent.DropdownItems, __assign({ name_link: "linkThre" }, args)),
            react_1.default.createElement(Dropdown_master_1.DropdownComponent.DropdownItems, __assign({ name_link: "linkThre" }, args)),
            react_1.default.createElement(Dropdown_master_1.DropdownComponent.DropdownItems, __assign({ name_link: "linkThre" }, args)))));
};
exports.variant_Dropdown = variant_Dropdown;
exports.variant_Dropdown.args = {};
//# sourceMappingURL=Dropdown.stories.js.map