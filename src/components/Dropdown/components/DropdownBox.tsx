
import React from "react";
import { PropsForDropBoxComponents } from "../types";
import { masterStyle_forDropdown } from "../style";

const DropdownBox: React.FC<PropsForDropBoxComponents> = ({ children }): JSX.Element => {

    return (
        <div style={{...masterStyle_forDropdown.styleMasterDropBox}}>
           {children}
        </div>
    )
};

export default DropdownBox
