
import { TypeVariantForCarouselAndButton } from "../types";
import { TypeFromChangeVariantForCarousel } from "../types";
import { allvariantForCarousel } from "../style";

const servicesChangeVariantForCarousel = {
    changeVariantForCarousel
};
export default servicesChangeVariantForCarousel;


function changeVariantForCarousel({ variant_crs }: TypeFromChangeVariantForCarousel): TypeVariantForCarouselAndButton {

    /* podmienka meniaca variantu */
    if (variant_crs === "white") {
        return allvariantForCarousel.whiteStyleforCarousel
    } else if (variant_crs === "dark") {
        return allvariantForCarousel.darkStyleforCarousel
    } else if (variant_crs === "default") {
        return allvariantForCarousel.defaultStyleforCarousel
    } else if (variant_crs === undefined) {
        return allvariantForCarousel.defaultStyleforCarousel
    } else {
        return allvariantForCarousel.defaultStyleforCarousel
    }
}