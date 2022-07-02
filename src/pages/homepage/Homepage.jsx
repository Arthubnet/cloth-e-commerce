import React from "react";
import Directory from "../../components/directory/Directory";
import "./homepage.styles.scss";
import Hero from "./hero/Hero";
import Carousel from "./Carousel";

const Homepage = () => {
  return (
    <div className="home">
      <Hero />
      <Carousel />
      <div className="homepage">
        <Directory />
      </div>
    </div>
  );
};

export default Homepage;
