import React from "react";
import { Type__for_InputsAndLabel } from "../types";
import servicesChangeVariantForForm from "../services/services.changeVariant";
import "@components/global_root.css";
import "../style/form_root_style.css";
import "../style/primaryStyle/masterPrimaryStyle.css";
import "../style/secondaryStyle/masterSecondaryStyle.css";
import "../style/alertStyle/masterAlertStyle.css";
import "../style/successStyle/masterSuccessStyle.css";
import "../style/darkStyle/masterDarkStyle.css";
import "../style/nightStyle/masterNightStyle.css";


function FormInputs({
    selectStyleType,
    label_name_form = "",
    text_align_in_Input = "left",
    custom_rouded_in_Input = 5,
    text_align_label = "left",
    oneBorder_input = false,
    ...props
}: Type__for_InputsAndLabel): JSX.Element {
    const [customStyle_for_input, setCustomStyle_for_input] = React.useState<React.CSSProperties>({});
    const [customStyle_for_label, setCustomStyle_for_label] = React.useState<React.CSSProperties>({});
    const [variant_StyleFor_input, setVariant_StyleFor_input] = React.useState("");


    //? change input variant...............................
    React.useEffect(() => {
        selectStyleType &&
            setVariant_StyleFor_input(servicesChangeVariantForForm.changerVariantForInputForm({
                selectStyleType,
                oneBorder_input
            }));
    }, [
        selectStyleType,
        oneBorder_input
    ]);

    //? custom style input.................................
    React.useEffect(() => {
        setCustomStyle_for_input({
            textAlign: text_align_in_Input,
            borderRadius: `${custom_rouded_in_Input}px`
        });
    }, [
        text_align_in_Input,
        custom_rouded_in_Input
    ]);

    //? custom style label............................................
    React.useEffect(() => {
        setCustomStyle_for_label({
            textAlign: text_align_label,
        });
    }, [
        text_align_label
    ]);

console.log(variant_StyleFor_input);

    return (
        <div
            className="label_and_input_box"
            style={customStyle_for_label}>
            <label
                className={`${selectStyleType} formLabel`}
                htmlFor="inputs"
                {...props}>
                {label_name_form}
            </label>
            <input
                {...props}
                className={`${variant_StyleFor_input} formInput `}
                style={customStyle_for_input}
                id="inputs" />
        </div>
    )
}


export default FormInputs