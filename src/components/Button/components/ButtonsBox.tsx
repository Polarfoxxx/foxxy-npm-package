import React from "react";
import { TypeForButtonBox } from "../types";

function ButtonBox({ children,
    buttonBox_variant,
    width_buttonBox,
    height_buttonBox }: TypeForButtonBox) {

    const [selectStyleType, setSelectStyleType] = React.useState("");


    return (
        <div>
            {children}
        </div>

    )
};

export default ButtonBox;

