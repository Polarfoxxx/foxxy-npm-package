import { TypeForCSS_OffCanvas } from "../types";
import { TypeForPositionServices } from "../types";
declare const servicePositionOffCanvas: {
    positionOffCanvas: typeof positionOffCanvas;
};
export default servicePositionOffCanvas;
declare function positionOffCanvas({ position, show }: TypeForPositionServices): TypeForCSS_OffCanvas;
