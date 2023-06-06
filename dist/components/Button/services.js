import { defStyle } from './styles/master.style';
import { largeSize } from './styles/lg.style';
import { smallSize } from './styles/small.style';
import { defaultStyle } from './styles/default.styles';
import { whiteStyle } from './styles/white.style';
import { darkStyle } from './styles/dark.style';
const servicesChangeStyle = {
    changerStyle
};
export default servicesChangeStyle;
function changerStyle({ variant, border, round, lg, sm }) {
    /* deklaracia */
    let sizeElement = {};
    let styles = defaultStyle.defStyle;
    let impStyleName = {
        defStyle: {},
        radiusStyle: {},
        borderStyle: {},
        borderRadiusStyle: {}
    };
    /* anonymma funkcia meniaca variantu */
    (() => {
        if (variant === "white") {
            impStyleName = whiteStyle;
        }
        else if (variant === "dark") {
            impStyleName = darkStyle;
        }
        /* vyber konkretnej varianty */
        styles = border ?
            (round ? impStyleName.borderRadiusStyle : impStyleName.borderStyle) :
            (round ? impStyleName.radiusStyle : impStyleName.defStyle);
    })();
    /* anonymna funkcia meniaca velkost */
    (() => {
        if (lg && sm) {
            sizeElement = lg ? largeSize : smallSize;
        }
        ;
    })();
    return ({
        defStyle,
        styles,
        sizeElement
    });
}
