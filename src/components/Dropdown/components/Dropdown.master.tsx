
import React from "react";
import { PropsForDropdownComponents } from "../types";
import { masterStyle_forDropdown } from "../style";
import DropdownBox from "./DropdownBox";
import DropdownItems from "./DropdownItems";
import servicesShowAndHide_dropdown from "../services/showAndHide.services";

const Dropdopwn: React.FC<PropsForDropdownComponents> = ({ children, variant_drop, drop_text }): JSX.Element => {
    const [show, setShow] = React.useState<boolean>(true);
    const [show_CSS, setShow_CSS] = React.useState<React.CSSProperties>(masterStyle_forDropdown.showAndHideDropdown.dropdown_Hide);

    /* funkcia zatvarania a otvaranie */
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setShow(!show);
        setShow_CSS(servicesShowAndHide_dropdown.showAndHide_dropdown({ show }))
    };

    /* hover effect */
    const boxMouseHandler = (e: React.MouseEvent<HTMLButtonElement>, mouseOver: boolean): void => {
        const box = e.currentTarget as HTMLButtonElement;
        box.style.backgroundColor = mouseOver ? "red" : "#D4D2D4";
    };


    return (
        <div
            className="dropdown"
            style={{
                ...show_CSS,
                ...masterStyle_forDropdown.styleMasterDropdown
            }}>
            <button
                onMouseOver={(e) => boxMouseHandler(e, true)}
                onMouseOut={(e) => boxMouseHandler(e, false)}
                onClick={handleClick}
                style={masterStyle_forDropdown.styleMasterButtonDrop}>
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
