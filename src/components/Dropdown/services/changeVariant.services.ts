import { TypeVariantStyle_dropdown } from "../types";
import { variantStyle_forDropdown } from "../style";

const servicesChangeVariantDropDwn = {
    changeVariantDropDwn
};
export default servicesChangeVariantDropDwn;



function changeVariantDropDwn<T>(props: T): TypeVariantStyle_dropdown {
    const variant_drop = props;

    if (variant_drop === "default") {
        return variantStyle_forDropdown.dropDefVariant
    } else if (variant_drop === "white") {
        return variantStyle_forDropdown.dropWhiteVariant
    } else if (variant_drop === "dark") {
        return variantStyle_forDropdown.dropDarkVariant
    } else if (variant_drop === undefined) {
        return variantStyle_forDropdown.dropDefVariant
    };
};