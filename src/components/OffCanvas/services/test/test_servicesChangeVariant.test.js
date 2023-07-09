
import servicesForChangeVariantForOffCanvas from "../services.changeVariant";
import { allVariantOffCanvas } from "../../style";

describe("test services change variant", () => {

    test("format style object", () => {
        const variant = "dark"
        const services = servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas({ variant })

        expect(services).toMatchObject({
            styleForBox: expect.any(Object),
            styleForScreen: expect.any(Object),
            styleHeader: expect.any(Object),
            styleBody: expect.any(Object),
            styleButtonBox: expect.any(Object),
        });
    });

    test("false variant", () => {
        const variantTwo = "xxx"
        const servicesTwo = servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas({ variantTwo })
        const returningObject = allVariantOffCanvas.defaultVariantForOffCanvas;

        expect(servicesTwo).toEqual(
            expect.objectContaining(returningObject)
        );
    });

})
