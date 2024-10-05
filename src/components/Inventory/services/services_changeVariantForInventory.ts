import { Type_for_InventoryMaster } from "../components/Inventory_Master";

const servicesChangeVariantForInventory = {
    changeVariantForMasterInventory
};
export default servicesChangeVariantForInventory;

export type Type_for_changeVariantForMasterInventory = {
    variant_Invenctory: Type_for_InventoryMaster["variant_Invenctory"];
    withBorder: Type_for_InventoryMaster["withBorder"];
};

function changeVariantForMasterInventory({
    variant_Invenctory,
    withBorder

}: Type_for_changeVariantForMasterInventory): string {

    let variant = variant_Invenctory
    if (withBorder) {
        return `${variant} border`
    };
    return `${variant}`
};