import * as React from "react";
import { TypeStyleFromForm } from "../types";
export type Props = {
    formName?: string;
    formVariantStyle?: TypeStyleFromForm;
};
declare const FormHeader: React.FC<Props>;
export default FormHeader;
