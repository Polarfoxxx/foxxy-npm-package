
import React from "react";
import { PropsForDropdownComponents } from "../types";
import { masterStyle_forDropdown } from "../style";
import DropdownBox from "./DropdownBox";
import DropdownItems from "./DropdownItems";


const Dropdopwn: React.FC<PropsForDropdownComponents> = ({ children, variant_drop, drop_text }): JSX.Element => {
    const [ show, setShow ] = React.useState<boolean>(false);

    /* funkcia zatvarania a otvaranie */
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setShow(!show);
    };

    /* servis pre show */
React.useEffect(() => {

}, [show])


    return (
        <div
            className="dropdown"
            style={show? masterStyle_forDropdown.showAndHideDropdown.dropdown_Hide:masterStyle_forDropdown.showAndHideDropdown.dropdown_Show}>
            <button
                onClick={handleClick}
                style={{}}>
                {drop_text}
            </button>
            {React.Children.map(children, (child: React.ReactElement<any>) => {
                return React.cloneElement(child, {});
            })}
        </div>
    )
};

export const DropdownComponent = {
    Dropdopwn,
    DropdownBox,
    DropdownItems
};
