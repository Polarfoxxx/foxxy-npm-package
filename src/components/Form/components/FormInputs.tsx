import React from "react";
import { Type__for_InputsAndLabel } from "../types";

function FormInputs({
    selectStyleType,
    label_name_form,
    text_align_in_Input,
    custom_rouded_in_Input,
    text_align_label,
    ...props
}: Type__for_InputsAndLabel): JSX.Element {

    const [customStyle_for_input, setCustomStyle_for_input] = React.useState<React.CSSProperties>({
        textAlign: "center",
        borderRadius: ""
    });
    const [customStyle_for_label, setCustomStyle_for_label] = React.useState<React.CSSProperties>({

    })


    //? custom style input............................................
    React.useEffect(() => {
        setCustomStyle_for_input({
            textAlign: text_align_in_Input,
            borderRadius: custom_rouded_in_Input
        });
    }, [text_align_in_Input, custom_rouded_in_Input]);

    //? custom style label............................................
    React.useEffect(() => {
        setCustomStyle_for_label({
            textAlign: text_align_label,
        });
    }, [text_align_label]);


    return (
        <div className="label_and_input_box"
        style={customStyle_for_label}>
            <label
                className={`${selectStyleType} formLabel`}
                htmlFor="inputs"
                {...props}>
                {label_name_form}
            </label>
            <input
                {...props}
                className={`${selectStyleType} formInput`}
                style={customStyle_for_input}
                id="inputs" />
        </div>
    )
}


export default FormInputs