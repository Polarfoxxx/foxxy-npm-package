import { TypeVariantForCarouselAndButton } from "../../types";
import { TypeFromChangeVariantForCarousel } from "../../types";
declare const servicesChangeVariantForCarousel: {
    changeVariantForCarousel: typeof changeVariantForCarousel;
};
export default servicesChangeVariantForCarousel;
declare function changeVariantForCarousel({ variant }: TypeFromChangeVariantForCarousel): TypeVariantForCarouselAndButton;
