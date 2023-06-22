var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import servicesChangeStyleFromButtons from "../services";
import ButtonBox from "./ButtonsBox";
const Button = (_a) => {
    var { text, variant, border, round, lg, sm } = _a, props = __rest(_a, ["text", "variant", "border", "round", "lg", "sm"]);
    /* servis pre style */
    const { styles, defStyle, sizeElement } = servicesChangeStyleFromButtons.changerStyleForButton({ variant, border, round, lg, sm });
    return (React.createElement("button", Object.assign({}, props, { style: Object.assign(Object.assign(Object.assign({}, styles), defStyle), sizeElement) }), text));
};
export const ButtonComponent = {
    Button,
    ButtonBox
};
