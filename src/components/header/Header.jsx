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

  return (
    <div className="header">
      <Link to={"/"}>
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to={"/shop"}>
          SHOP
        </Link>
        <div className="option dropdown">
          <button className="dropbtn">
            CATEGORIES
            <span>&#8595;</span>
          </button>
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
