import servicesChangeVariantForButtons from "../services.changeVariant";
import { allVariantStyleForButton } from "../../styles";
import { allSizeButtonElement } from "../../styles";

describe("test button component", () => {

    test("testing the returned default object", () => {
        const variant_btn = undefined;
        const border = false;
        const round = false;
        const lg = false;
        const sm = false;

        const variant_style = allVariantStyleForButton.defaultStyle.defStyle;
        const masterStyle = allSizeButtonElement.masterStyle;
        const sizeElement = {};

        const services = servicesChangeVariantForButtons.changeVariantForButtons({ variant_btn, border, round, lg, sm })

        expect(services).toEqual(
            expect.objectContaining({ masterStyle, variant_style, sizeElement })
        );
    });


    test("testing the returned object for random values", () => {
        const variant_btn = "dark";
        const border = true;
        const round = false;
        const lg = true;
        const sm = false;

        const variant_style = allVariantStyleForButton.darkStyle.borderStyle;
        const masterStyle = allSizeButtonElement.masterStyle;
        const sizeElement = allSizeButtonElement.largeSize;

        const services = servicesChangeVariantForButtons.changeVariantForButtons({ variant_btn, border, round, lg, sm })

        expect(services).toEqual(
            expect.objectContaining({ masterStyle, variant_style, sizeElement })
        );
    });
});