import React from "react";
import { useEffect, useState, useRef } from "react";
import "./carousel.styles.scss";
import { motion, useDragControls } from "framer-motion";
import { connect } from "react-redux";
import { selectCarouselImages } from "./../../redux/carousel/carousel.selector";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import CarouselArrow from "../../components/CarouselArrow";

function Carousel({ carouselImages }) {
  let [moveImage, setMoveImage] = useState(false);
  let ref = useRef();
  let [currentPicture, setCurrentPicture] = useState(0);
  /*   const [currentPosition, setCurrentPosition] = useState(-210 * 1); */
  const [width, setWidth] = useState(0);
  /*  const carousel = useRef(); */

  /*   useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []); */
  console.log();
  return (
    <div className="carousel">
      <CarouselArrow setMoveImage={setMoveImage} left="left" />
      <CarouselArrow setMoveImage={setMoveImage} />
      <motion.div
        className="carousel__inner"
        animate={{ x: moveImage ? -ref.current.clientWidth : 0 }}
        transition={{ type: "spring", stiffness: 75 }}
      >
        {carouselImages.map((image, i) => (
          <Link to={"/shop"}>
            <img
              ref={ref}
              className="carousel__inner-image"
              key={i}
              src={image.imageUrl}
              alt="polo"
            ></img>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

let mapPropsToState = createStructuredSelector({
  carouselImages: selectCarouselImages,
});

export default connect(mapPropsToState)(Carousel);
