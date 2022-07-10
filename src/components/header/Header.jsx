import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

function Header({ currentUser, hidden }) {
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
          <div class="dropdown-content">
            <a href="https://fred-ecommerce-project.herokuapp.com/shop/mens">
              Men's
            </a>
            <a href="https://fred-ecommerce-project.herokuapp.com/shop/womens">
              Women's
            </a>
            <a href="https://fred-ecommerce-project.herokuapp.com/shop/caps">
              Caps
            </a>
            <a href="https://fred-ecommerce-project.herokuapp.com/shop/shoes">
              Shoes
            </a>
            <a href="https://fred-ecommerce-project.herokuapp.com/shop/bags">
              Bags
            </a>
          </div>
        </div>
        <Link className="option shop" to={"/shop"}>
          SHOP
        </Link>
        {currentUser ? (
          <div className="option " onClick={() => signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to={"/signin"}>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
