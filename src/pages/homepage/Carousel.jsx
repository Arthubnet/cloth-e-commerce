import React from "react";
import { useEffect, useState, useRef } from "react";
import "./carousel.styles.scss";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { selectCarouselImages } from "./../../redux/carousel/carousel.selector";
import { createStructuredSelector } from "reselect";

function Carousel({ carouselImages }) {
  /* const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }); */
  return (
    <div className="carousel">
      <div className="carousel__inner">
        {carouselImages.map((image) => (
          <img
            className="carousel__inner-image"
            key={image.id}
            src={image.imageUrl}
            alt="polo"
          ></img>
        ))}
      </div>
      <div className="carousel__inner">
        {carouselImages.map((image) => (
          <img
            className="carousel__inner-image"
            key={image.id}
            src={image.imageUrl}
            alt="polo"
          ></img>
        ))}
      </div>
    </div>

    /*  <motion.div
      className="carousel"
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="carousel__inner"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {carouselImages.map((image) => (
          <img
            className="carousel__inner-image"
            key={image.id}
            src={image.imageUrl}
            alt="polo"
          ></img>
        ))}
      </motion.div>
    </motion.div> */
  );
}

let mapPropsToState = createStructuredSelector({
  carouselImages: selectCarouselImages,
});

export default connect(mapPropsToState)(Carousel);
