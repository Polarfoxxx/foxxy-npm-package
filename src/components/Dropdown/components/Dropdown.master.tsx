
import React from "react";
import { PropsForDropdownComponents, TypeVariantStyle_dropdown } from "../types";
import { masterStyle_forDropdown, variantStyle_forDropdown } from "../style";
import DropdownBox from "./DropdownBox";
import DropdownItems from "./DropdownItems";
import servicesShowAndHide_dropdown from "../services/showAndHide.services";
import servicesChangeVariantDropDwn from "../services/changeVariant.services";

const Dropdopwn: React.FC<PropsForDropdownComponents> = ({ children, variant_drop, drop_text }): JSX.Element => {
    const [show, setShow] = React.useState<boolean>(true);
    const [show_CSS, setShow_CSS] = React.useState<React.CSSProperties>(masterStyle_forDropdown.showAndHideDropdown.dropdown_Hide);
    const [variant_CSS, setVariant_CSS] = React.useState<TypeVariantStyle_dropdown>(variantStyle_forDropdown.dropDefVariant);

    /* funkcia zatvarania a otvaranie */
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setShow(!show);
        setShow_CSS(servicesShowAndHide_dropdown.showAndHide_dropdown({ show }))
    };

    /* hover effect na button */
    const boxMouseHandler = (e: React.MouseEvent<HTMLButtonElement>, mouseOver: boolean): void => {
        const box = e.currentTarget as HTMLButtonElement;
        box.style.backgroundColor = mouseOver ? "rgba(162, 162, 162, 0.022)" : "rgba(5, 5, 5, 0.263)";
    };

    /* servis pre variantu */
    React.useEffect(() => {
        setVariant_CSS(servicesChangeVariantDropDwn.changeVariantDropDwn<PropsForDropdownComponents["variant_drop"]>(variant_drop));
    }, [variant_drop])

    return (
        <div
            className="dropdown"
            style={{
                ...show_CSS,
                ...masterStyle_forDropdown.styleMasterDropdown,
                ...variant_CSS.dropdown
            }}>
            <button
                onMouseOver={(e) => boxMouseHandler(e, true)}
                onMouseOut={(e) => boxMouseHandler(e, false)}
                onClick={handleClick}
                style={{
                    ...masterStyle_forDropdown.styleMasterButtonDrop,
                    ...variant_CSS.dropBtn
                }}>
                {
                    drop_text.length > 18 ? "err" : drop_text
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
    Dropdopwn,
    DropdownBox,
    DropdownItems
};
