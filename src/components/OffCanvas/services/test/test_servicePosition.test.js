import servicePositionOffCanvas from "../services.position";
import { styleMasterForOffCanvasComponent_top } from "../../style/master.style/position_top/master.top.style";

describe("test position OffCanvas", () => {

    test("object format for position and valid display", () => {
        const position = "left";
        const show = true;
        const services = servicePositionOffCanvas.positionOffCanvas({ position, show });

        expect(services).toMatchObject({
            styleForBox: expect.any(Object),
            styleForScreen: expect.any(Object),
        });
    });

    test("object format for position and display invalid", () => {
        const position = "top";
        const show = false;
        const services = servicePositionOffCanvas.positionOffCanvas({ position, show });

        expect(services).toEqual({
            styleForBox: expect.objectContaining({
                ...styleMasterForOffCanvasComponent_top.styleForBox,
                top: "-100%",
                transition: "1s"
            }),
            styleForScreen: expect.objectContaining({
                display: "none",
            })
        });
    });
})