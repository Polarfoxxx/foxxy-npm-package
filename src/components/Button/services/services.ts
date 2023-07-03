import CSS from 'csstype';
import { defStyle } from '../styles/size.style/master.style';
import { TypeButtonStyle, TypeForStyleFunction, TypeReturnStyleForElement } from '../types';
import { allVariantStyleForButton, allSizeButtonElement } from '../styles';

const servicesChangeStyleForButtons = {
    changerStyleForButton
};
export default servicesChangeStyleForButtons;



function changerStyleForButton({ variant, border, round, lg, sm }: TypeForStyleFunction): TypeReturnStyleForElement {
    /* deklaracia */
    let sizeElement: CSS.Properties = {};
    let variant_style: CSS.Properties = {};
    let impStyleName: TypeButtonStyle = allVariantStyleForButton.defaultStyle;

    /* farebna varianta */
    if (variant) {
        if (variant === "white") {
            impStyleName = allVariantStyleForButton.whiteStyle
        } else if (variant === "dark") {
            impStyleName = allVariantStyleForButton.darkStyle
        } else if (variant === "funny") {
            impStyleName = allVariantStyleForButton.funnyStyle
        } else if (variant === "sun") {
            impStyleName = allVariantStyleForButton.sunStyle
        } else if (variant === "ocean") {
            impStyleName = allVariantStyleForButton.oceanStyle
        };

        /* vyber border varianty */
        variant_style = border ?
            (round ? impStyleName.borderRadiusStyle : impStyleName.borderStyle) :
            (round ? impStyleName.radiusStyle : impStyleName.defStyle);


    } else { variant_style = allVariantStyleForButton.defaultStyle.defStyle }

    /*  vyber velkosti */
    if (lg || sm) {
        sizeElement = lg ? allSizeButtonElement.largeSize : allSizeButtonElement.smallSize;
    };

    return (
        {
            defStyle,
            variant_style,
            sizeElement
        }
    )
}