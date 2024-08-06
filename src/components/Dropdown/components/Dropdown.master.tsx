
import React from "react";
import { PropsForDropdownComponents, TypeVariantStyle_dropdown } from "../types";
import DropdownBox from "./DropdownBox";
import DropdownItems from "./DropdownItems";
import servicesChangeVariantDropDwn from "../services/changeVariant.services";

function Dropdown({
    children,
    variant_drop,
    dropCount,
    drop_text }: PropsForDropdownComponents): JSX.Element {
    const [show, setShow] = React.useState<boolean>(true);
    const [variant_CSS, setVariant_CSS] = React.useState<TypeVariantStyle_dropdown>();

    /* funkcia zatvarania a otvaranie */
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setShow(!show);
    };

    /* servis pre variantu */
    React.useEffect(() => {
        setVariant_CSS(servicesChangeVariantDropDwn.changeVariantDropDwn<PropsForDropdownComponents["variant_drop"]>(variant_drop));
    }, [variant_drop])

    return (
        <div
            className="dropdown"
            style={show ? { height: "auto" } : { height: "40px", overflow: "hidden" }}>
            <button
                onClick={handleClick}
                >
                {
                    drop_text
                }
            </button>
            {
                React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { variant_CSS });
                })
            }
        </div>
    )
};

export const DropdownComponent = {
    Dropdown,
    DropdownBox,
    DropdownItems
};
