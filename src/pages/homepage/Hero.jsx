import React from "react";
import "./hero.styles.scss";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero">
      <div className="hero__img">
        <img src="https://i.ibb.co/xXZgR0s/hero1.jpg" alt="hero_image" />
      </div>
      <div className="hero__title">
        <h1>A British Icon</h1>
        <p>
          We feel safe to say that our new collection is most succesfull one.
          Check our graphic prints and sporting colours.
        </p>
        <Link to="/shop">Shop now</Link>
      </div>
    </div>
  );
}

export default Hero;
