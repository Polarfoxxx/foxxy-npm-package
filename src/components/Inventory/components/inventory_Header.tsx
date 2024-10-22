import React from "react";
import "@components/global_root.css";
import "../style/inventory_root_style.css";
import "../style/index.css";

export type Type_for_InventoryHeader = {
    selectStyleType: string,
    inventory_header_tittle: string
    inventory_header_text: string
};

function InventoryHeader({
    selectStyleType,
    inventory_header_tittle,
    inventory_header_text,
}: Type_for_InventoryHeader): JSX.Element {
    const [selectStyleType_forHeader, setSelectStyleType_forHeader] = React.useState("");
    const [headerTittle, setHeaderTittle] = React.useState({
        tittle: "",
        text: ""
    });
    const [headerText, setHeaderText] = React.useState("");

//? change style for inventory header....................
    React.useEffect(() => {
        setSelectStyleType_forHeader(selectStyleType);
    }, [
        selectStyleType
    ]);

//? set state header and text...........................
React.useEffect(() => {

},[
    inventory_header_text,
    inventory_header_tittle
])
    return (
        <div className={`${selectStyleType_forHeader} inventoryHeader`}>
            <div>
                <h3>{}</h3>
            </div>
        </div>
    );
};

export default InventoryHeader;