import React from "react";
import Directory from "../../components/directory/Directory";
import "./homepage.styles.scss";
import Hero from "./Hero";

import PolosLink from "./PolosLink";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <PolosLink />
      <div className="directory">
        <Directory />
      </div>
    </div>
  );
};

export default Homepage;
