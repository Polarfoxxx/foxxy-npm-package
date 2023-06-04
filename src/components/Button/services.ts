import CSS from 'csstype';
import { TypeVariant } from './types';
import { TypeReturnStyleForElement } from './types';
import { defStyle } from './style';

type TypeButtonStyle = {
    whiteStyle: {},
    whiteStyleBorder: {},
    dark: {},
    darkBorder: {}
}

const servicesChangeStyle = {
    changerStyle
}
export default servicesChangeStyle




function changerStyle({ variant }: TypeVariant, border?: boolean): TypeReturnStyleForElement {

    let styles: CSS.Properties = {}
    
    const buttonStyle: TypeButtonStyle = {
        whiteStyle: {
            background: "white",
            color: "black"
        },
        whiteStyleBorder: {
            background: "white",
            color: "black",
            border: '1px solid orange'
        },
        dark: {
            background: "black",
            color: "white"
        },
        darkBorder: {
            background: "black",
            color: "white",
            border: '1px solid red'
        },
    }


    if (variant === "white") {
        if (!border) { styles = buttonStyle.whiteStyle }
        else { styles = buttonStyle.whiteStyleBorder }
    }
    else if (variant === "dark") {
        if (!border) { styles = buttonStyle.dark }
        else { styles = buttonStyle.darkBorder }
    }


    return (
        {
            defStyle, styles
        }
    )
}