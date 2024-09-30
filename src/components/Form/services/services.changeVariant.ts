import {
    Type_for_formChange_variant,
    Type_for_formChange_variantfor_input,
    Type_for_formChange_variantfor_header
} from "../types";

const servicesChangeVariantForForm = {
    changerVariantForForm,
    changerVariantForInputForm,
    changerVariantForHeaderForm
};
export default servicesChangeVariantForForm;

//? function changing a variant for master form.............
function changerVariantForForm({
    variant_form,
}: Type_for_formChange_variant): string {
    return variant_form
};


//? function changing a variant only for input form.............
function changerVariantForInputForm({
    selectStyleType,
    oneBorder_input
}: Type_for_formChange_variantfor_input): string {

    if (oneBorder_input) {
        return `${selectStyleType} oneLine`
    } else
        return `${selectStyleType}`
};

//? function changing a variant only for header form.............
function changerVariantForHeaderForm({
    variant_formheader
}: Type_for_formChange_variantfor_header): string {

    if (variant_formheader === "underLine" || variant_formheader === "boldHeader") {
        return `${variant_formheader}`
    } else if (variant_formheader === "underLineBold") {
        return "underLine boldHeader"
    } else
        return ""
};

