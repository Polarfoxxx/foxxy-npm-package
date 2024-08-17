
import React from "react";
import { PropsForDropdownComponents } from "../types";
import servicesChangeVariantDropDwn from "../services/changeVariant.services";

function Dropdown({
    children,
    variant_drop,
    lg,
    sm,
    drop_text
}: PropsForDropdownComponents): JSX.Element {
    const [show, setShow] = React.useState<boolean>(true);
    const [selectStyleType, setSelectStyleType] = React.useState("");

    //? funkcia zatvarania a otvaranie................................
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setShow(!show);
    };

    //? servis pre variantu............................................
    React.useEffect(() => {
        if(variant_drop || lg || sm) {
            setSelectStyleType(servicesChangeVariantDropDwn.changeVariantDropDwn({ variant_drop, lg, sm }));
        }
    }, [variant_drop,lg, sm])

    return (
        <div
            className={`${selectStyleType} dropDown`}
            style={show ? { height: "auto" } : { height: "20px", overflow: "hidden" }}>
            <button
                onClick={handleClick}>
                {drop_text}
            </button>
            {
                React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { selectStyleType });
                })
            }
        </div>
    )
};

export default Dropdown;