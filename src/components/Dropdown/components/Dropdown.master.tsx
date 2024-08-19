
import React from "react";
import { PropsForDropdownComponents } from "../types";
import servicesChangeVariantDropDwn from "../services/changeVariant.services";
import "../style/root_style.css";
import "../style/dropDownMaster/primaryDropDownMaster.css";
import "../style/dropDownMaster/secondaryDropDownMaster.css";
import "../style/dropDownMaster/alertDropDownMaster.css";

function Dropdown({
    children,
    variant_dropdown = "primaryDropdown",
    lg = false,
    sm = false,
    drop_text,
    custom_background_color_dropdown
}: PropsForDropdownComponents): JSX.Element {
    const [show, setShow] = React.useState<boolean>(true);
    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>({
        backgroundColor: ""
    })

    //? funkcia zatvarania a otvaranie................................
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
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
            <button
                style={{
                    ...customStyle
                }}
                className={`${selectStyleType} dropDownMaster`}
                onClick={handleClick}>
                {drop_text}
            </button>
            {
                React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { selectStyleType, show });
                })
            }
        </div>
    )
};

export default Dropdown;