import servicesChangeVariantForCarousel from "../services.chancheVariant";
import { allvariantForCarousel } from "../../style";

describe("test carousel component", () => {

    test("testing undefindent variants", () => {
        const variant_crs = undefined;
        const CSS_Variant = allvariantForCarousel.defaultStyleforCarousel;
        const services = servicesChangeVariantForCarousel.changeVariantForCarousel({ variant_crs });


        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });


    test("testing empty text variants", () => {
        const variant_crs = "";
        const CSS_Variant = allvariantForCarousel.defaultStyleforCarousel;
        const services = servicesChangeVariantForCarousel.changeVariantForCarousel({ variant_crs });


        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });

    test("testing dark variants", () => {
        const variant_crs = "dark";
        const CSS_Variant = allvariantForCarousel.darkStyleforCarousel;
        const services = servicesChangeVariantForCarousel.changeVariantForCarousel({ variant_crs });


        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });
});
