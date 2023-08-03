import React from "react";
import { TypeServicesShowAndHide } from "../types";
import { masterStyle_forDropdown } from "../style";

const servicesShowAndHide_dropdown = {
    showAndHide_dropdown
};
export default servicesShowAndHide_dropdown;


function showAndHide_dropdown({ show }: TypeServicesShowAndHide): React.CSSProperties {
    if (show) {
        return masterStyle_forDropdown.showAndHideDropdown.dropdown_Show
    } else {
        return masterStyle_forDropdown.showAndHideDropdown.dropdown_Hide
    };
};