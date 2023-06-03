import * as React from "react";
type Props = {
    text: string;
    variant?: "default" | "white" | "dark" | "funny" | "sun" | "ocean";
    type?: "button" | "submit" | "reset";
    selector?: string;
    border?: boolean;
};
declare function Button({ text, variant, type, selector, border }: Props): React.JSX.Element;
export default Button;
