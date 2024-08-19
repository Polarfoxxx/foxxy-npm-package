
import React from "react";
import { PropsForDropItemsComponents } from "../types";
import "../style/dropDown_root_style.css";

function DropdownItems({
    href,
    name_link,
    selectStyleType
}: PropsForDropItemsComponents): JSX.Element {

    return (
        <div>
            <a
                className={`${selectStyleType} dropItem`}
                href={href}>
                {name_link}
            </a>
        </div>
    )
};

export default DropdownItems;
