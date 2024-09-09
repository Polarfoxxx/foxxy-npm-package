
import React from "react";
import { PropsForDropdownComponents, ChildProps_child_dropdownContent } from "../types";
import servicesChangeVariantDropDwn from "../services/changeVariant.services";
import "@components/global_root.css";
import "../style/dropDown_root_style.css";
import "../style/dropDownMaster/primaryDropDownMaster.css";
import "../style/dropDownMaster/secondaryDropDownMaster.css";
import "../style/dropDownMaster/alertDropDownMaster.css";
import "../style/dropDownMaster/successDropDownMaster.css";
import "../style/dropDownMaster/darkDropDownMaster.css";
import "../style/dropDownMaster/nightDropDownMaster.css";
import arrowDropdown from "@assets/arrowDropdown.png";

function Dropdown({
    children,
    variant_dropdown = "primaryDropdown",
    lg_dropdown = false,
    sm_dropdown = false,
    border_dropdown = false,
    dropdown_name = "My dropdown",
    custom_background_color_dropdown,
    custom_showAndHidden_time = 0.4,
    custom_rouded_dropdown,
    custom_textColor_for_dropdown,
}: PropsForDropdownComponents): JSX.Element {

    const [show, setShow] = React.useState(false);
    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
        backgroundColor: "",
        borderRadius: "",
        color: ""
    });
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    //? funkcia zatvarania a otvaranie................................
    const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
        setShow(!show);
    };
    //? Funkcia pre kontrolu kliknutia mimo dropdownu.......................
    const handleClickOutside = (event: MouseEvent): void => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShow(false);
        }
    };
    //? Pridanie event listeneru na kliknutie mimo dropdownu...............
    React.useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    //? servis pre variantu............................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantDropDwn.changeVariantDropDwn({
            variant_dropdown,
            lg_dropdown,
            sm_dropdown,
            border_dropdown
        }));
    }, [
        variant_dropdown,
        lg_dropdown,
        sm_dropdown,
        border_dropdown
    ]);

    //? servis pre custom style............................................
    React.useEffect(() => {
        setCustomStyle({
            backgroundColor: custom_background_color_dropdown,
            borderRadius: custom_rouded_dropdown,
            color: custom_textColor_for_dropdown
        });
    }, [
        custom_background_color_dropdown,
        custom_rouded_dropdown,
        custom_textColor_for_dropdown
    ]);


    return (
        <div
            ref={dropdownRef}
            className="dropDownBox">
            <a
                style={{ ...customStyle }}
                className={`${selectStyleType} dropDownMaster`}
                onClick={handleClick}>
                {dropdown_name}
            </a>
            {
                React.Children.map(children, (child: React.ReactElement<ChildProps_child_dropdownContent>) => {
                    return React.cloneElement(child, { selectStyleType, show, custom_showAndHidden_time });
                })
            }
        </div>
    )
};

export default Dropdown;