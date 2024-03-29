
import React from "react";
import { PropsForDropItemsComponents } from "../types";
import { masterStyle_forDropdown } from "../style";

const DropdownItems: React.FC<PropsForDropItemsComponents> = ({ href, name_link, variant_CSS }): JSX.Element => {

    /* hover effect */
    const boxMouseHandler = (e: React.MouseEvent<HTMLDivElement>, mouseOver: boolean): void => {
        const box = e.currentTarget as HTMLDivElement;
        box.style.backgroundColor = mouseOver ? "#E9E8E9" : "transparent";
    };


    return (
        <div
            onMouseOver={(e) => boxMouseHandler(e, true)}
            onMouseOut={(e) => boxMouseHandler(e, false)}>
            <a
                style={{
                    ...masterStyle_forDropdown.styleMasterDropItem,
                    ...variant_CSS.dropItem
                }}
                href={href}>
                {
                    name_link.length > 34 ? "err" : name_link
                }
            </a>
        </div>
    )
};

export default DropdownItems;
