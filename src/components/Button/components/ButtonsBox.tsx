import React from "react";
import { TypeForButtonBox } from "../types";
import { servicesChangeVariantForButtonsBox } from "../services";
import "../styles/root_style.css";
import "../styles/buttonBox/primaryButtonBox.css";

function ButtonBox({
    children,
    buttonBox_variant,
    width_buttonBox,
    height_buttonBox,
    layout_Buttonts,
    ...props }: TypeForButtonBox) {

    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [sizeButtonBox, setSizeButtonBox] = React.useState<React.CSSProperties>({
        width: "0",
        height: "0",
        flexDirection: "row"
    });

    //? useeffect for style................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantForButtonsBox.changeVariantForButtonBox({ buttonBox_variant }))
    }, [buttonBox_variant]);

    //? useeffect for setting width and height................................
    React.useEffect(() => {
        setSizeButtonBox({
            width: width_buttonBox,
            height: height_buttonBox,
            flexDirection: layout_Buttonts
        })
    }, [width_buttonBox, height_buttonBox,layout_Buttonts]);



    return (
        <div
            style={{ ...sizeButtonBox }}
            className={selectStyleType}
            {...props}>
            {
                children
            }
        </div>

    )
};

export default ButtonBox;

