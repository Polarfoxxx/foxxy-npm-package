import CSS from 'csstype';
import { TypeReturnStyleForElement } from './types';
import { defStyle } from './styles/master.style';
import { TypeForStyleFunction } from './types';

import { whiteStyle } from './styles/sunn.style';
import { darkStyle } from './styles/dark.style';

const servicesChangeStyle = {
    changerStyle
}
export default servicesChangeStyle


function changerStyle({ variant, border, radius, lg, md, sm }: TypeForStyleFunction): TypeReturnStyleForElement {
    let styles: CSS.Properties = {}
  
    switch (variant) {
        case "white":
            if (!border) {
                styles = whiteStyle.defStyle;
            } else {
                styles = whiteStyle.borderStyle;
            }
            break;
        case "dark":
            if (!border) {
                styles = darkStyle.defStyle;
            } else {
                styles = darkStyle.borderStyle;
            }
            break;
        default:
            // Handle default case if needed
            break;
    }
    


    return (
        {
            defStyle, styles
        }
    )
}