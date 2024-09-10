import { Type_for_formChange_variant, Type_for_formChange_variantfor_input } from "../types";

const servicesChangeVariantForFrom = {
    changerVariantForForm,
    changerVariantForInputForm
};
export default servicesChangeVariantForFrom;

//? function changing a variant for master form.............
function changerVariantForForm({
    variant_form,
    form_border,
}: Type_for_formChange_variant): string {

    if (form_border) {
        return `${variant_form} border`
    } else
        return variant_form
};


//? function changing a variant only for input form.............
function changerVariantForInputForm({
    oneBorder_input
}: Type_for_formChange_variantfor_input): string {

    if (oneBorder_input) {
        return `oneLine`
    } else
        return ""
};

