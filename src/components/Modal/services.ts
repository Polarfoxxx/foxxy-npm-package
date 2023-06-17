
import { TypeFromMasterStyle } from "./style/master.style";
import { hideStyleFromModal } from "./style/master.style";
import { CSSProperties } from "react";
import { oceanStyleFormModal } from "./style/ocean.style";

const servicesChangeVariantFromModal = {
    changeVariantfromModal
};
export default servicesChangeVariantFromModal



type Props = {
    variant?: "default" | "white" | "ocean",
};

function changeVariantfromModal({variant} : Props): CSSProperties {
let variantStyle: CSSProperties = {}

if(variant === "white") {
    variantStyle = oceanStyleFormModal
}


return(
    variantStyle
)
}