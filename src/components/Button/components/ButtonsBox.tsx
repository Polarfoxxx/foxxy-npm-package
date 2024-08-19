import React from "react";
import { TypeForButtonBox } from "../types";
import { servicesChangeVariantForButtonsBox } from "../services";
import "../styles/button_root_style.css";
import "../styles/buttonBox/primaryButtonBox.css";
import "../styles/buttonBox/secondaryButtonBox.css";
import "../styles/buttonBox/alertButtonBox.css";

function ButtonBox({
    children,
    buttonBox_variant = "primaryButtonBox",
    layout_Buttonts = "row",
    custom_width_buttonBox,
    custom_height_buttonBox,
    custom_gap_Buttons,
    custom_rounded,
    custom_background_Box,
    ...props }: TypeForButtonBox): JSX.Element {

    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
        backgroundColor: "",
        borderRadius: "",
        gap: ""
    });

    //? useeffect for style................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantForButtonsBox.changeVariantForButtonBox({ buttonBox_variant, layout_Buttonts }))
    }, [buttonBox_variant, layout_Buttonts]);

    //? useeffect for setting width and height................................
    React.useEffect(() => {
        setCustomStyle({
            width: custom_width_buttonBox,
            height: custom_height_buttonBox,
            gap: custom_gap_Buttons,
            backgroundColor: custom_background_Box,
            borderRadius: custom_rounded
        })
    }, [custom_width_buttonBox, custom_height_buttonBox, custom_gap_Buttons, custom_background_Box, custom_rounded]);



    return (
        <div
            style={{ ...customStyle }}
            className={selectStyleType}
            {...props}>
            {children}
        </div>

    )
};

export default ButtonBox;

