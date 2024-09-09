import React from "react";
import { TypeForButtonBox } from "../types";
import { servicesChangeVariantForButtonsBox } from "../services";
import "@components/global_root.css";
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
    custom_rounded_buttonBox,
    custom_background_buttonBox,
    ...props
}: TypeForButtonBox): JSX.Element {

    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
        backgroundColor: "",
        borderRadius: "",
        gap: "5px"
    });

    //? useeffect for style.................................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantForButtonsBox.changeVariantForButtonBox({ buttonBox_variant, layout_Buttonts }))
    }, [buttonBox_variant, layout_Buttonts]);

    //? custom style....................................................
    React.useEffect(() => {
        setCustomStyle({
            width: custom_width_buttonBox,
            height: custom_height_buttonBox,
            gap: custom_gap_Buttons,
            backgroundColor: custom_background_buttonBox,
            borderRadius: custom_rounded_buttonBox
        })
    }, [custom_width_buttonBox,
        custom_height_buttonBox,
        custom_gap_Buttons,
        custom_background_buttonBox,
        custom_rounded_buttonBox
    ]);



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

