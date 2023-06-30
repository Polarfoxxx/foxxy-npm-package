
import servicesForChangeVariantForOffCanvas from "../services.changeVariant";

describe("test services change variant", () => {

    test("format object", () => {
        const variant = "dark"
        const services = servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas(variant)

        expect(services).toEqual(
            expect.objectContaining({
                styleForBox: {
                    backgroundColor: "rgb(46, 46, 46)"
                },
                styleForScreen: {
                    backgroundColor: "rgba(37, 37, 37, 0.603)"
                },
                styleHeader: {
                    color: "rgb(229, 124, 35)"
                },
                styleBody: {
                    color: "white"
                },
                styleButtonBox: {
                },
            })
        );
    });

})