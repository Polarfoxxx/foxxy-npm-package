import { defStyle } from './styles/master.style';
const servicesChangeStyle = {
    changerStyle
};
export default servicesChangeStyle;
function changerStyle({ variant, border, radius, lg, md, sm }) {
    let styles = {};
    const buttonStyle = {
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
    };
    if (variant === "white") {
        if (!border) {
            styles = buttonStyle.whiteStyle;
        }
        else {
            styles = buttonStyle.whiteStyleBorder;
        }
    }
    else if (variant === "dark") {
        if (!border) {
            styles = buttonStyle.dark;
        }
        else {
            styles = buttonStyle.darkBorder;
        }
    }
    return ({
        defStyle, styles
    });
}
