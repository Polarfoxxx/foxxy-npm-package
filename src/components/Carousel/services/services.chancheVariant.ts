
import { TypeVariantForCarouselAndButton } from "../types";
import { TypeFromChangeVariantForCarousel } from "../types";
import { allvariantForCarousel } from "../style";

const servicesChangeVariantForCarousel = {
    changeVariantForCarousel
};
export default servicesChangeVariantForCarousel;


function changeVariantForCarousel({ variant }: TypeFromChangeVariantForCarousel): TypeVariantForCarouselAndButton {

    /* podmienka meniaca variantu */
    if (variant === "white") {
        return allvariantForCarousel.whiteStyleforCarousel
    } else if (variant === "dark") {
        return allvariantForCarousel.darkStyleforCarousel
    } else if (variant === "default") {
        return allvariantForCarousel.defaultStyleforCarousel
    } else if (variant === undefined) {
        return allvariantForCarousel.defaultStyleforCarousel
    } else {
        return allvariantForCarousel.defaultStyleforCarousel
    }
}