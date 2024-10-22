import React from "react";
import "../style/inventory_root_style.css";
import "@components/global_root.css";
import servicesChangeVariantForInventory from "../services/services_changeVariantForInventory";
import "../style/index.css";

export type ChildProps_child_InventoryContent = {
    selectStyleType: string;
};

export type Type_for_InventoryMaster = {
    children: JSX.Element[];
    variant_Invenctory?: "primaryInvenctory" | "secondaryInvenctory" | "alertInvenctory" | "successInvenctory" | "darkInvenctory" | "nightInvenctory",
    withBorder?: false,
    max_heightInventory?: string,
    custom_bg_colorInventory?: string,
    custom_rouded_Inventory?: number
};

function InventoryMaster({
    children,
    variant_Invenctory = "primaryInvenctory",
    withBorder = false,
    custom_bg_colorInventory,
    custom_rouded_Inventory,
}: Type_for_InventoryMaster): JSX.Element {
    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>();

    //? change variant....................................
    React.useEffect(() => {
        setSelectStyleType(servicesChangeVariantForInventory.changeVariantForMasterInventory({ variant_Invenctory, withBorder }));
    }, [
        variant_Invenctory,
        withBorder
    ])

    //? change custom variant.............................
    React.useEffect(() => {
        setCustomStyle({
            backgroundColor: custom_bg_colorInventory,
            borderRadius: `${custom_rouded_Inventory}px`,
        });
    }, [
        custom_bg_colorInventory,
        custom_rouded_Inventory,
    ]);


    return (
        <div
            className={`${selectStyleType} masterInventory`}
            style={{ ...customStyle }}>
            {
                React.Children.map(children, (child: React.ReactElement<ChildProps_child_InventoryContent>) => {
                    return React.cloneElement(child, { selectStyleType });
                })
            }
        </div>
    );
};

export default InventoryMaster;