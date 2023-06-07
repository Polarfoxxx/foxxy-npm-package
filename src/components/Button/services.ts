import CSS from 'csstype';
import { TypeReturnStyleForElement } from './types';
import { defStyle } from './styles/master.style';
import { TypeForStyleFunction } from './types';
import { TypeButtonStyle } from './types';

import { largeSize } from './styles/lg.style';
import { smallSize } from './styles/small.style';


import { defaultStyle } from './styles/default.styles';
import { whiteStyle } from './styles/white.style';
import { darkStyle } from './styles/dark.style';

const servicesChangeStyle = {
    changerStyle
}
export default servicesChangeStyle;


function changerStyle({ variant, border, round, lg, sm }: TypeForStyleFunction): TypeReturnStyleForElement {
    /* deklaracia */
    let sizeElement: CSS.Properties = {};
    let styles: CSS.Properties = {};
    let impStyleName: TypeButtonStyle = {
        defStyle: {},
        radiusStyle: {},
        borderStyle: {},
        borderRadiusStyle: {}
    };

    /* anonymma funkcia meniaca variantu */
    (() => {
        if (variant) {
            if (variant === "white") {
                impStyleName = whiteStyle
            } else if (variant === "dark") {
                impStyleName = darkStyle
            }
            /* vyber konkretnej varianty */
            styles = border ?
                (round ? impStyleName.borderRadiusStyle : impStyleName.borderStyle) :
                (round ? impStyleName.radiusStyle : impStyleName.defStyle)
        }else {styles = defaultStyle.defStyle}
    })();

    /* anonymna funkcia meniaca velkost */
    (() => {
        if (lg && sm) {
            sizeElement = lg ? largeSize : smallSize;
        };
    })();



    return (
        {
            defStyle,
            styles,
            sizeElement
        }
    )
}