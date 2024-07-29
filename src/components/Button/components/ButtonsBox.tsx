import React from "react";
import { TypeForButtonBox } from "../types";
import { servicesChangeVariantForButtonsBox } from "../services";

function ButtonBox({
    children,
    buttonBox_variant,
    width_buttonBox,
    height_buttonBox ,
...props}: TypeForButtonBox) {

    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [sizeButtonBox, setSizeButtonBox] = React.useState<React.CSSProperties>({
        width: "",
        height: ""
    });

    //? useeffect for style................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantForButtonsBox.changeVariantForButtonBox({ buttonBox_variant }))
    }, [buttonBox_variant]);

    //? useeffect for setting width and height................................
    React.useEffect(() => {
        setSizeButtonBox({
            width: width_buttonBox,
            height: height_buttonBox
        })
    }, [width_buttonBox, height_buttonBox]);

    return (
        <div
            style={{ ...sizeButtonBox }}
            className={selectStyleType}>
            {
                children
            }
        </div>

    )
};

export default ButtonBox;

