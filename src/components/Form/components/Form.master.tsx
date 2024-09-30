import React from "react";
import {
    TypeForIntrinsicAttributes,
    ChildProps_child_FormContent,
    Type_for_customStyle
} from "../types";
import servicesChangeVariantForFrom from "../services/services.changeVariant";
import FormLeftSideInfo from "./FormLeftSideInfo";
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
    form_side_info = false,
    leftSideInfoText = "leftside",
    custom_leftSide_layout = 5,
    custom_background_form = "",
    custom_text_color_form = "black",
    custom_rouded_form = 15,
    custom_padding_form = 10,
    custom_width_form = "450px",
    custom_height_form = "auto",
    custom_gap_input = 7,
    ...props
}: TypeForIntrinsicAttributes): JSX.Element {
    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<Type_for_customStyle>({
        masterForm: {},
        master_childrenBox: {},
        leftSide_box: {}
    });

    //? servis meniaci variantu form.......................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantForFrom.changerVariantForForm({ variant_form }))
    }, [
        variant_form,
    ]);


    //? custom style............................................
    React.useEffect(() => {
        setCustomStyle({
            masterForm: {
                backgroundColor: custom_background_form,
                color: custom_text_color_form,
                borderRadius: `${custom_rouded_form}px`,
                width: custom_width_form,
                height: custom_height_form,
                gap: `${custom_gap_input}px`,
            },
            master_childrenBox: {
                padding: `${custom_padding_form / 6}px ${custom_padding_form}px`,
            },
            leftSide_box: {
                paddingTop: `${custom_leftSide_layout}%`
            }
        });
    }, [
        custom_background_form,
        custom_text_color_form,
        custom_rouded_form,
        custom_padding_form,
        custom_width_form,
        custom_height_form,
        custom_gap_input,
        custom_leftSide_layout
    ]);



    return (
        <form
            className={`${selectStyleType} masterForm`}
            style={{ ...customStyle.masterForm }}
            {...props}>
            {
                form_side_info && <FormLeftSideInfo
                    customStyle={customStyle.leftSide_box}
                    selectStyleType={selectStyleType}
                    leftSideInfoText={leftSideInfoText} />
            }
            <div
                className={`${selectStyleType} master_childrenBox`}
                style={{ ...customStyle.master_childrenBox }}>
                {
                    React.Children.map(children, (child: React.ReactElement<ChildProps_child_FormContent>) => {
                        return React.cloneElement(child, { selectStyleType, form_name });
                    })
                }
            </div>
        </form>
    )
}

export default Form;
