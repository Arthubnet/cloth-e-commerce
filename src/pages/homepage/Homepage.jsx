import React from "react";
import Directory from "../../components/directory/Directory";
import "./homepage.styles.scss";
import PolosLink from "./PolosLink";
import Hero from "./Hero";
/* Framer motion */
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="homepage"
    >
      <Hero />
      <PolosLink />
      <div className="directory">
        <Directory />
      </div>
    </motion.div>
  );
};

export default Homepage;
