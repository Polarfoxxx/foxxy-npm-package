
import React from "react";
import { PropsForDropItemsComponents } from "../types";
import "@components/global_root.css";
import "../style/dropDown_root_style.css";
import "../style/dropDownItem/alertDropDownItem.css";
import "../style/dropDownItem/darkDropDownItem.css";
import "../style/dropDownItem/nightDropDownItem.css";
import "../style/dropDownItem/primaryDropDownItem.css";
import "../style/dropDownItem/secondaryDropDownitem.css";
import "../style/dropDownItem/successDropDownItem.css";

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
        <div
            style={{ ...customStyle }}
            className={`${selectStyleType} dropItem`}>
            <a
                href={href}>
                {name_link}
            </a>
        </div>
    )
};

export default DropdownItems;
