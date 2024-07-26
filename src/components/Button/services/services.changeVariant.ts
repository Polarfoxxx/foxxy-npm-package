import { TypeForStyleFunction } from '../types';

const servicesChangeVariantForButtons = {
    changeVariantForButtons
};
export default servicesChangeVariantForButtons;

function changeVariantForButtons({
    variant_btn,
    withBorder,
    radiusBorder,
    lg,
    sm }: TypeForStyleFunction): string {

    let variant_Style_className: string = "";
    //? Podmienka pre veľkosť (lg alebo sm)
    if (lg) {
        variant_Style_className = `${variant_btn} lg`;
    } else if (sm) {
        variant_Style_className = `${variant_btn} sm`;
    } else {
        variant_Style_className = `${variant_btn} medium`;
    };
    //? Podmienka pre border
    if (withBorder) {
        variant_Style_className = `${variant_Style_className} border`;
    }
    //? Podmienka pre zaoblený border
    if (radiusBorder) {
        variant_Style_className = `${variant_Style_className} round`;
    };
    return variant_Style_className;
};