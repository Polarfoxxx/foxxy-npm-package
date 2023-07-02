
import servicesForChangeVariantForOffCanvas from "../services.changeVariant";

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
        const returningObject = {
            styleForBox: {
                backgroundColor: "rgba(161, 170, 180)"
            },
            styleForScreen: {
                backgroundColor: "rgba(139, 190, 231, 0.603)"
            },
            styleHeader: {
                color: "black"
            },
            styleBody: {
                color: "black"
            },
            styleButtonBox: {

            },
        };

        expect(servicesTwo).toEqual(
            expect.objectContaining(returningObject)
        );
    });

})
