import { master_ShowStyleOffCanvas } from "../style";
import { TypeForShowAndHideStyleAndMaster } from "../types";

const servicePositionOffCanvas = {
    positionOffCanvas
};
export default servicePositionOffCanvas;

export type TypeForPositionServices = {
    position: string,
    show: boolean
}

function positionOffCanvas({ position, show }: TypeForPositionServices): TypeForShowAndHideStyleAndMaster {
    if (show) {
        switch (position) {
            case "left":
                return master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_show;
            case "top":
                return master_ShowStyleOffCanvas.showAndHide_top.styleForOffCanvasComponent_show;
            case "right":
                return master_ShowStyleOffCanvas.showAndHide_right.styleForOffCanvasComponent_show;
            default:
                return master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_show;
        }
    } else {
        switch (position) {
            case "left":
                return master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_hide;
            case "top":
                return master_ShowStyleOffCanvas.showAndHide_top.styleForOffCanvasComponent_hide;
            case "right":
                return master_ShowStyleOffCanvas.showAndHide_right.styleForOffCanvasComponent_hide;
            default:
                return master_ShowStyleOffCanvas.showAndHide_Left.styleForOffCanvasComponent_hide;
        }
    }

}