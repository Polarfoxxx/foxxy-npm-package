import { CSSProperties } from 'react';
import { masterStyle } from '../styles/size.style/master.style';
import { TypeButtonStyle, TypeForStyleFunction, TypeReturnStyleForElement } from '../types';
import { allVariantStyleForButton, allSizeButtonElement } from '../styles';

const servicesChangeVariantForButtons = {
    changeVariantForButtons
};
export default servicesChangeVariantForButtons;



function changeVariantForButtons({ variant_btn, border, round, lg, sm }: TypeForStyleFunction): TypeReturnStyleForElement {
    /* deklaracia */
    let sizeElement: CSSProperties = {};
    let variant_style: CSSProperties = allVariantStyleForButton.defaultStyle.defStyle;
    let impStyleName: TypeButtonStyle = allVariantStyleForButton.defaultStyle;

    /* farebna varianta */
    if (variant_btn === "white") {
        impStyleName = allVariantStyleForButton.whiteStyle
    } else if (variant_btn === "dark") {
        impStyleName = allVariantStyleForButton.darkStyle
    } else if (variant_btn === "funny") {
        impStyleName = allVariantStyleForButton.funnyStyle
    } else if (variant_btn === "sun") {
        impStyleName = allVariantStyleForButton.sunStyle
    } else if (variant_btn === "ocean") {
        impStyleName = allVariantStyleForButton.oceanStyle
    } else if (variant_btn === "default") {
        impStyleName = allVariantStyleForButton.defaultStyle
    } else if (variant_btn === undefined) {
        impStyleName = allVariantStyleForButton.defaultStyle
    } else {
        impStyleName = allVariantStyleForButton.defaultStyle
    };

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