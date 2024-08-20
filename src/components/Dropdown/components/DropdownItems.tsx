
import React from "react";
import { PropsForDropItemsComponents } from "../types";
import "../style/dropDown_root_style.css";

function DropdownItems({
    href,
    name_link,
    selectStyleType,
    custom_textColor_forItem
}: PropsForDropItemsComponents): JSX.Element {
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
        color: ""
    });

       //? servis pre custom style............................................
       React.useEffect(() => {
        setCustomStyle({
            color: custom_textColor_forItem
        });
    }, [custom_textColor_forItem]);

    
    return (
        <div>
            <a
            style={{...customStyle}}
                className={`${selectStyleType} dropItem`}
                href={href}>
                {name_link}
            </a>
        </div>
    )
};

export default DropdownItems;
