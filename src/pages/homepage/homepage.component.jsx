import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";
import { connect } from "react-redux";
import Hero from "./hero/hero.component";
import Carousel from "./carousel.component";

const Homepage = ({ currentUser }) => {
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Homepage);
