
import React from "react";
import { PropsForDropItemsComponents } from "../types";

const DropdownItems: React.FC<PropsForDropItemsComponents> = ({ href, name_link }): JSX.Element => {

    return (
        <div>
            <a
                style={{}}
                href={href}>
                {name_link}
            </a>
        </div>
    )
};

export default DropdownItems
