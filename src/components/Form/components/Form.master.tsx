import React from "react";
import { TypeForIntrinsicAttributes, ChildProps_child_FormContent } from "../types";
import servicesChangeVariantForFrom from "../services/services.changeVariant";
import "@components/global_root.css";
import "../style/form_root_style.css";
import "../style/formMaster/primaryFormMaster.css";
import "../style/formMaster/secondaryFormMaster.css";
import "../style/formMaster/alertFormMaster.css";
import "../style/formMaster/successFormMaster.css";
import "../style/formMaster/darkFormMaster.css";
import "../style/formMaster/nightFormMaster.css";

function Form({
    children,
    variant_form = "primaryForm",
    form_name = "my form",
    form_border = false,
    custom_background_form = "",
    custom_text_color_form = "black",
    custom_rouded_form = 0,
    custom_padding_form = 5,
    custom_width_form = "350px",
    custom_height_form = "auto",
    custom_gap_input = 5,
    ...props
}: TypeForIntrinsicAttributes): JSX.Element {
    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({});

    //? servis meniaci variantu form.......................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantForFrom.changerVariantForForm({ variant_form, form_border }))
    }, [
        variant_form,
        form_border
    ]);


    //? custom style............................................
    React.useEffect(() => {
        setCustomStyle({
            backgroundColor: custom_background_form,
            color: custom_text_color_form,
            borderRadius: `${custom_rouded_form}px`,
            padding: `${custom_padding_form / 6}px ${custom_padding_form}px`,
            width: custom_width_form,
            height: custom_height_form,
            gap: `${custom_gap_input}px`,
        });
    }, [
        custom_background_form,
        custom_text_color_form,
        custom_rouded_form,
        custom_padding_form,
        custom_width_form,
        custom_height_form,
        custom_gap_input
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
