import CSS from 'csstype';
import { masterStyle } from '../styles/size.style/master.style';
import { TypeButtonStyle, TypeForStyleFunction, TypeReturnStyleForElement } from '../types';
import { allVariantStyleForButton, allSizeButtonElement } from '../styles';

const servicesChangeVariantForButtons = {
    changeVariantForButtons
};
export default servicesChangeVariantForButtons;



function changeVariantForButtons({ variant, border, round, lg, sm }: TypeForStyleFunction): TypeReturnStyleForElement {
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
        } else if (variant === "default") {
            impStyleName = allVariantStyleForButton.defaultStyle
        } else {
            impStyleName = allVariantStyleForButton.defaultStyle
        };

        /* vyber border varianty a radiusu*/
        variant_style = border ?
            (round ? impStyleName.borderRadiusStyle : impStyleName.borderStyle) :
            (round ? impStyleName.radiusStyle : impStyleName.defStyle);


    } else { variant_style = allVariantStyleForButton.defaultStyle.defStyle }

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