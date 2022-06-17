import { createSelector } from "reselect";

let carouselSelector = (state) => state.carousel;

export let selectCarouselImages = createSelector(
  [carouselSelector],
  (carousel) => carousel.carouselImages
);
