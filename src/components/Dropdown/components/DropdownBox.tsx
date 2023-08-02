
import React from "react";
import { PropsForDropBoxComponents } from "../types";

const DropdownBox: React.FC<PropsForDropBoxComponents> = ({ children }): JSX.Element => {

    return (
        <div>
           {children}
        </div>
    )
};

export default DropdownBox
