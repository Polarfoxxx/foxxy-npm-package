import { TypeFor_services_Style_buttonBox } from "../../types";

const servicesChangeVariantForButtonBox = {
    changeVariantForButtonBox
};
export default servicesChangeVariantForButtonBox;

function changeVariantForButtonBox({
    buttonBox_variant,
    layout_Buttonts
}: TypeFor_services_Style_buttonBox): string {

    let variant_Style_className: string = "";
    //? Set classname
    if (layout_Buttonts === "column") {
        variant_Style_className = `${buttonBox_variant} column`;
    } else {
        variant_Style_className = `${buttonBox_variant} row`;
    };

    return variant_Style_className;
};


