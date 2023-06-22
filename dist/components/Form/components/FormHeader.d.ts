import * as React from "react";
import { TypeStyleForForm } from "../types";
export type Props = {
    formName?: string;
    formVariantStyle?: TypeStyleForForm;
};
declare const FormHeader: React.FC<Props>;
export default FormHeader;
