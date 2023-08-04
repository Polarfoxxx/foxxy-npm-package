
import React from "react";
import { PropsForDropBoxComponents } from "../types";
import { masterStyle_forDropdown } from "../style";

const DropdownBox: React.FC<PropsForDropBoxComponents> = ({ children, variant_CSS }): JSX.Element => {

    return (
        <div style={{
            ...masterStyle_forDropdown.styleMasterDropBox,
            ...variant_CSS.dropBox
        }}>
            { 
            React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { variant_CSS });
                })
                }
        </div>
    )
};

export default DropdownBox
