import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "./../cart-icon/CartIcon";

/* Redux */
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

import { motion } from "framer-motion";

function Header({ currentUser }) {
  let signOut = async () => {
    await auth.signOut();
  };
  let scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <Link className="logo" to={"/"}>
        <Logo onClick={() => scrollUp()} />
      </Link>
      <div className="options">
        <div className="dropdown">
          <button className="dropbtn">CATEGORIES</button>
          <motion.div className="dropdown-content">
            <Link to={"/shop/polos"}>Polos</Link>
            <Link to={"/shop/sweatshirts"}>Sweatshirts</Link>
            <Link to={"/shop/dresses"}>Dresses</Link>
            <Link to={"/shop/caps"}>Caps</Link>
            <Link to={"/shop/shoes"}>Shoes</Link>
            <Link to={"/shop/bags"}>Bags</Link>
          </motion.div>
        </div>
        <Link className="option shop" to={"/shop"}>
          SHOP
        </Link>
        {currentUser ? (
          <div className="option " onClick={() => signOut()}>
            {currentUser ? `${currentUser.displayName}, Sign Out` : "SIGN OUT"}
          </div>
        ) : (
          <Link className="option" to={"/signin"}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
