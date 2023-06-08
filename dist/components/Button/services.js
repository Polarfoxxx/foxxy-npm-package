import { defStyle } from './styles/master.style';
import { largeSize } from './styles/lg.style';
import { smallSize } from './styles/small.style';
import { defaultStyle } from './styles/default.styles';
import { whiteStyle } from './styles/white.style';
import { darkStyle } from './styles/dark.style';
import { funnyStyle } from './styles/funny.style';
import { sunStyle } from './styles/sunn.style';
import { oceanStyle } from './styles/ocean.style';
const servicesChangeStyle = {
    changerStyle
};
export default servicesChangeStyle;
function changerStyle({ variant, border, round, lg, sm }) {
    /* deklaracia */
    let sizeElement = {};
    let styles = {};
    let impStyleName = {
        defStyle: {},
        radiusStyle: {},
        borderStyle: {},
        borderRadiusStyle: {}
    };
    /* anonymma funkcia meniaca variantu */
    (() => {
        if (variant) {
            if (variant === "white") {
                impStyleName = whiteStyle;
            }
            else if (variant === "dark") {
                impStyleName = darkStyle;
            }
            else if (variant === "funny") {
                impStyleName = funnyStyle;
            }
            else if (variant === "sun") {
                impStyleName = sunStyle;
            }
            else if (variant === "ocean") {
                impStyleName = oceanStyle;
            }
            /* vyber konkretnej varianty */
            styles = border ?
                (round ? impStyleName.borderRadiusStyle : impStyleName.borderStyle) :
                (round ? impStyleName.radiusStyle : impStyleName.defStyle);
        }
        else {
            styles = defaultStyle.defStyle;
        }
    })();
    /* anonymna funkcia meniaca velkost */
    (() => {
        if (lg || sm) {
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
