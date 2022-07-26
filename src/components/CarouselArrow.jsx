import React from "react";
import "./carousel-arrow.styles.scss";

import { ReactComponent as LeftArrow } from "../assets/prev-svg.svg";
import { ReactComponent as RightArrow } from "../assets/next-svg.svg";

function CarouselArrow({ left, setMoveImage }) {
  return (
    <div
      className={`carousel-arrow ${left ? "left" : "right"}`}
      onClick={left ? () => setMoveImage(false) : () => setMoveImage(true)}
    >
      {left ? <LeftArrow /> : <RightArrow />}
    </div>
  );
}

export default CarouselArrow;
