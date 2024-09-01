import React from "react";
import { TypeForIntrinsicAttributes, ChildProps_child_FormContent } from "../types";
import servicesChangeVariantForFrom from "../services/services.changeVariant";

function Form({
    children,
    variant_form = "primaryForm",
    form_name = "",
    border = false,
    lg = false,
    sm = false,
    custom_background,
    custom_text_color,
    custom_rouded,
    custom_padding,
    custom_width,
    custom_height,
    ...props
}: TypeForIntrinsicAttributes): JSX.Element {
    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
        backgroundColor: "",
        color: "",
        borderRadius: "",
        padding: "",
        width: "",
        height: "",
    });
    //? servis meniaci varintu formu.......................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantForFrom.changerVariantForForm({ variant_form, border, lg, sm }))
    }, [variant_form, border, lg, sm]);


    //? servis pre custom style............................................
    React.useEffect(() => {
        setCustomStyle({
            backgroundColor: custom_background,
            color: custom_text_color,
            borderRadius: custom_rouded,
            padding: custom_padding,
            width: custom_width,
            height: custom_height,
        });
    }, [custom_background, custom_text_color, custom_rouded, custom_padding, custom_width, custom_height,]);

    return (
        <form
            className={`${selectStyleType} masterForm`}
            style={{ ...customStyle }}
            {...props}>
            {
                React.Children.map(children, (child: React.ReactElement<ChildProps_child_FormContent>) => {
                    return React.cloneElement(child, { selectStyleType, form_name });
                })
            }
        </form>
    )
}

export default Form;
