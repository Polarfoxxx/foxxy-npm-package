
import React from "react";
import { PropsForDropdownComponents,ChildProps_child_dropdownContent } from "../types";
import servicesChangeVariantDropDwn from "../services/changeVariant.services";
import "../style/dropDown_root_style.css";
import "../style/dropDownMaster/primaryDropDownMaster.css";
import "../style/dropDownMaster/secondaryDropDownMaster.css";
import "../style/dropDownMaster/alertDropDownMaster.css";

function Dropdown({
    children,
    variant_dropdown = "primaryDropdown",
    lg = false,
    sm = false,
    dropdown_name = "My dropdown",
    custom_background_color_dropdown,
    custom_showAndHidden_time = 1
}: PropsForDropdownComponents): JSX.Element {
    const [show, setShow] = React.useState(false);
    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
        backgroundColor: ""
    })

    //? funkcia zatvarania a otvaranie................................
    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
        setShow(!show);
    };

    //? servis pre variantu............................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantDropDwn.changeVariantDropDwn({ variant_dropdown, lg, sm }));
    }, [variant_dropdown, lg, sm]);

    //? servis pre custom style............................................
    React.useEffect(() => {
        setCustomStyle({
            backgroundColor: custom_background_color_dropdown
        });
    }, [variant_dropdown, lg, sm]);

   
    return (
        <div
            className="dropDownBox">
            <a
                style={{
                    ...customStyle
                }}
                className={`${selectStyleType} dropDownMaster`}
                onClick={handleClick}>
                {dropdown_name}
            </a>
            {
                React.Children.map(children, (child: React.ReactElement<ChildProps_child_dropdownContent>) => {
                    return React.cloneElement(child, { selectStyleType, show,custom_showAndHidden_time});
                })
            }
        </div>
    )
};

export default Dropdown;