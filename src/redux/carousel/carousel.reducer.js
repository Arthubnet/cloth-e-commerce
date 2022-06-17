import CAROUSEL_DATA from "./../../pages/homepage/carousel.data";

let INITIAL_STATE = {
  carouselImages: CAROUSEL_DATA,
};

let carouselReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default carouselReducer;
