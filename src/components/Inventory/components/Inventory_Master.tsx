import React from "react";

export type Type_for_InventoryMaster = {
    children: JSX.Element[];
    variant_Invenctory?: "primaryInvenctory" | "secondaryInvenctory" | "alertInvenctory" |  "successInvenctory" | "darkInvenctory" | "nightInvenctory",
};

function InventoryMaster({ 
    children,
    variant_Invenctory = "primaryInvenctory"
}: Type_for_InventoryMaster): JSX.Element {

    return (
        <div>
            {
                React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { selectStyleType });
                })
            }
        </div>
    );
};

export default InventoryMaster;