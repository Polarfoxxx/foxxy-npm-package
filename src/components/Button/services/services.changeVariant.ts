import { CSSProperties } from 'react';
import { masterStyle } from '../styles/size.style/master.style';
import { TypeButtonStyle, TypeForStyleFunction, TypeReturnStyleForElement } from '../types';
import { allVariantStyleForButton, allSizeButtonElement } from '../styles';

const servicesChangeVariantForButtons = {
    changeVariantForButtons
};
export default servicesChangeVariantForButtons;


function changeVariantForButtons({ variant_btn, border, round, lg, sm }: TypeForStyleFunction): TypeReturnStyleForElement {
    let sizeElement: CSSProperties = {};
    let variant_style: CSSProperties = allVariantStyleForButton.defaultStyle.defStyle;
    let impStyleName: TypeButtonStyle = allVariantStyleForButton.defaultStyle;

    //? color variant 
    switch (variant_btn) {
        case "white":
            impStyleName = allVariantStyleForButton.whiteStyle;
            break;
        case "dark":
            impStyleName = allVariantStyleForButton.darkStyle;
            break;
        case "funny":
            impStyleName = allVariantStyleForButton.funnyStyle;
            break;
        case "sun":
            impStyleName = allVariantStyleForButton.sunStyle;
            break;
        case "ocean":
            impStyleName = allVariantStyleForButton.oceanStyle;
            break;
        case "default":
        case undefined:
            impStyleName = allVariantStyleForButton.defaultStyle;
            break;
        default:
            impStyleName = allVariantStyleForButton.defaultStyle;
    }


    /* vyber border varianty a radiusu*/
    variant_style = border ?
        (round ? impStyleName.borderRadiusStyle : impStyleName.borderStyle) :
        (round ? impStyleName.radiusStyle : impStyleName.defStyle);

    /*  vyber velkosti */
    if (lg || sm) {
        sizeElement = lg ? allSizeButtonElement.largeSize : allSizeButtonElement.smallSize
    };


    return (
        {
            masterStyle,
            variant_style,
            sizeElement
        }
    )
}