
import servicesForChangeVariantForOffCanvas from "../services.changeVariant";

describe("test services change variant", () => {

    test("format object", () => {
        const variant = "dark"
        const services = servicesForChangeVariantForOffCanvas.changeVariantForOffCanvas({variant})

        expect(services).toMatchObject({
                styleForBox: expect.any(Object),
                styleForScreen: expect.any(Object),
                styleHeader:expect.any(Object),
                styleBody:expect.any(Object),
                styleButtonBox: expect.any(Object),
            })
        
    })
})
