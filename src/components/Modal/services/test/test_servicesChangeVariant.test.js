import servicesChangeVariantForModal from "../services.changeVariant";
import { allvariantsForModal } from "../../style";

describe("test modal component", () => {

    test("testing undefindent variants", () => {
        const variant = undefined;
        const CSS_Variant = allvariantsForModal.defaultStyleForModal
        const services = servicesChangeVariantForModal.changeVariantForModal({ variant });


        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });


    test("testing empty text variants", () => {
        const variant = "";
        const CSS_Variant = allvariantsForModal.defaultStyleForModal
        const services = servicesChangeVariantForModal.changeVariantForModal({ variant });


        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });

    test("testing white variants", () => {
        const variant = "white";
        const CSS_Variant = allvariantsForModal.whiteStyleForModal
        const services = servicesChangeVariantForModal.changeVariantForModal({ variant });


        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });
});
