import React from "react";
import { TypeForIntrinsicAttributes, ChildProps_child_FormContent } from "../types";
import servicesChangeVariantForFrom from "../services/services.changeVariant";

function Form({
    children,
    variant_form = "primaryForm",
    form_name = "",
    form_border = false,
    custom_background_form,
    custom_text_color_form,
    custom_rouded_form,
    custom_padding_form,
    custom_width_form,
    custom_height_form,
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
    //? servis meniaci variantu form.......................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantForFrom.changerVariantForForm({ variant_form, form_border }))
    }, [variant_form, form_border]);


    //? servis pre custom style............................................
    React.useEffect(() => {
        setCustomStyle({
            backgroundColor: custom_background_form,
            color: custom_text_color_form,
            borderRadius: custom_rouded_form,
            padding: custom_padding_form,
            width: custom_width_form,
            height: custom_height_form,
        });
    }, [custom_background_form,
        custom_text_color_form,
        custom_rouded_form,
        custom_padding_form,
        custom_width_form,
        custom_height_form
    ]);

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
