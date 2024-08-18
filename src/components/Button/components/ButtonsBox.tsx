import React from "react";
import { TypeForButtonBox } from "../types";
import { servicesChangeVariantForButtonsBox } from "../services";
import "../styles/root_style.css";
import "../styles/buttonBox/primaryButtonBox.css";
import "../styles/buttonBox/secondaryButtonBox.css";
import "../styles/buttonBox/alertButtonBox.css";

function ButtonBox({
    children,
    buttonBox_variant = "primaryButtonBox",
    width_buttonBox,
    height_buttonBox,
    layout_Buttonts,
    gap_Buttons,
    rounded,
    custom_background_Box,
    customBackGrColor,
  customTextColor,
    ...props }: TypeForButtonBox): JSX.Element {

    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [sizeButtonBox, setSizeButtonBox] = React.useState<React.CSSProperties>({
        width: "auto",
        padding: "10px",
        height: "auto",
        flexDirection: "row",
        gap: "0",
        backgroundColor: "",
        borderRadius: "0"
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
            flexDirection: layout_Buttonts,
            gap: gap_Buttons,
            backgroundColor: custom_background_Box,
            borderRadius: rounded
        })
    }, [width_buttonBox, height_buttonBox, layout_Buttonts, gap_Buttons, custom_background_Box, rounded]);



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

