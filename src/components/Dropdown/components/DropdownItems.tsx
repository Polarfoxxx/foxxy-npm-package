
import React from "react";
import { PropsForDropItemsComponents } from "../types";
import { masterStyle_forDropdown } from "../style";

const DropdownItems: React.FC<PropsForDropItemsComponents> = ({ href, name_link }): JSX.Element => {

    /* hover effect */
    const boxMouseHandler = (e: React.MouseEvent<HTMLDivElement>, mouseOver: boolean): void => {
        const box = e.currentTarget as HTMLDivElement;
        box.style.backgroundColor = mouseOver ? "red" : "transparent";
    };


    return (
        <div
            onMouseOver={(e) => boxMouseHandler(e, true)}
            onMouseOut={(e) => boxMouseHandler(e, false)}>
            <a
                style={{ ...masterStyle_forDropdown.styleMasterDropItem }}
                href={href}>
                {
                    name_link.length > 34 ? "err" : name_link
                }
            </a>
        </div>
    )
};

export default DropdownItems;
