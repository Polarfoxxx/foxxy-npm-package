import React from "react";
import "../style/inventory_root_style.css";
import "@components/global_root.css";


export type Type_for_InventoryMaster = {
    children: JSX.Element[];
    variant_Invenctory?: "primaryInvenctory" | "secondaryInvenctory" | "alertInvenctory" |  "successInvenctory" | "darkInvenctory" | "nightInvenctory",
};

function InventoryMaster({ 
    children,
    variant_Invenctory = "primaryInvenctory"
}: Type_for_InventoryMaster): JSX.Element {

    const [selectStyleType, setSelectStyleType] = React.useState("");
    const [customStyle, setCustomStyle] = React.useState<React.CSSProperties>();
    
    
    React.useEffect(() => {

    }, [])

    return (
                    
        <div
        className={`${selectStyleType} masterInventory`}
        style={{...customStyle}}>
            {
                React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { selectStyleType });
                })
            }
        </div>
    );
};

export default InventoryMaster;