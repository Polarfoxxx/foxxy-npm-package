
import servicesForChangeVariantForOffCanvas from "../services.changeVariant";
import { allVariantOffCanvas } from "../../style";

describe("test services change variant", () => {

    test("format style object", () => {
        const variant_offCnv = "dark"
        const services = servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas({ variant_offCnv })

        expect(services).toMatchObject({
            styleForBox: expect.any(Object),
            styleForScreen: expect.any(Object),
            styleHeader: expect.any(Object),
            styleBody: expect.any(Object),
            styleButton_Box: expect.any(Object),
        });
    });

    test("false variant", () => {
        const variant_offCnv = "xxx"
        const servicesTwo = servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas({ variant_offCnv })
        const returningObject = allVariantOffCanvas.defaultVariantForOffCanvas;

        expect(servicesTwo).toEqual(
            expect.objectContaining(returningObject)
        );
    });

})
