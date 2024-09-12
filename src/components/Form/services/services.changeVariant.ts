import { Type_for_formChange_variant, Type_for_formChange_variantfor_input } from "../types";

const servicesChangeVariantForForm = {
    changerVariantForForm,
    changerVariantForInputForm
};
export default servicesChangeVariantForForm;

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
    selectStyleType,
    oneBorder_input
}: Type_for_formChange_variantfor_input): string {

    if (oneBorder_input) {
        return `${selectStyleType} oneLine`
    } else
        return `${selectStyleType}`
};

