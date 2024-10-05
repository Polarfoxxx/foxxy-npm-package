import React from "react";
import { Type_for_formHeader } from "../types";
import servicesChangeVariantForForm from "../services/services.changeVariant";
import "@components/global_root.css";
import "../style/form_root_style.css";
import "../style/index.css";


function FormHeader({
    form_name,
    variant_formheader = "none",
    selectStyleType
}: Type_for_formHeader): JSX.Element {
    const [selectStyleHeader, setSelectStyleHeader] = React.useState("");

    React.useEffect(() => {
        setSelectStyleHeader(servicesChangeVariantForForm.changerVariantForHeaderForm({ variant_formheader }))
    }, [variant_formheader]);

    return (
        <div className={`${selectStyleType} headerForm ${selectStyleHeader}`}>
            <p>{form_name}</p>
        </div>
    );
};


export default FormHeader;