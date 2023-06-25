import { TypeForShowAndHideStyleAndMaster } from "./types";
declare const servicesForChangeVariantForOffCanvas: {
    changeVariantForOffCanvas: typeof changeVariantForOffCanvas;
};
export default servicesForChangeVariantForOffCanvas;
type TypeVariantForOffCanvas = {
    variant: "default" | "white" | "dark";
};
declare function changeVariantForOffCanvas({ variant }: TypeVariantForOffCanvas): TypeForShowAndHideStyleAndMaster;
