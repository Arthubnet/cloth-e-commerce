import React from "react";
import Directory from "../../components/directory/Directory";
import "./homepage.styles.scss";
import Hero from "./Hero";
import Carousel from "./Carousel";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Carousel />
      <div className="directory">
        <Directory />
      </div>
    </div>
  );
};

export default Homepage;
