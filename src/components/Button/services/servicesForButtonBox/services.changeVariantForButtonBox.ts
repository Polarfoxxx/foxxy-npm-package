import { TypeFor_services_Style_buttonBox } from "../../types";

const servicesChangeVariantForButtonBox = {
    changeVariantForButtonBox
};
export default servicesChangeVariantForButtonBox;

function changeVariantForButtonBox({
    buttonBox_variant,
  }: TypeFor_services_Style_buttonBox): string {

    let variant_Style_className: string = "";
    //? Podmienka pre veľkosť (lg alebo sm)
    if (buttonBox_variant) {
        variant_Style_className = `${buttonBox_variant}`;
    } 
    return variant_Style_className;
};


