import { TypeForShowAndHideStyleAndMaster } from "../types";
declare const servicePositionOffCanvas: {
    positionOffCanvas: typeof positionOffCanvas;
};
export default servicePositionOffCanvas;
export type TypeForPositionServices = {
    position: string;
    show: boolean;
};
declare function positionOffCanvas({ position, show }: TypeForPositionServices): TypeForShowAndHideStyleAndMaster;
