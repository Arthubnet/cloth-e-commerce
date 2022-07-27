import React, { useState, useRef, useEffect } from "react";
import "./product-page.styles.scss";
import CustomButton from "./../../components/custom-button/CustomButton";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "./../../redux/shop/shop.selector";
import {
  Route,
  Routes,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import CarouselArrow from "./../../components/CarouselArrow";

/* Framer */
import { motion, AnimatePresence } from "framer-motion";

function ProductPage({ collections }) {
  let { product } = useParams();
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let previousPage = useLocation().pathname.slice(
    0,
    useLocation().pathname.lastIndexOf("/")
  );

  //finding the right product
  let productsImages = [];
  collections.map((collection) => {
    if (collection.routeName == previousPage.slice(6)) {
      collection.products.map((item) => {
        if (item.name == product) {
          productsImages = item;
        }
      });
    }
  });

  /* Arrow functions */

  let nextPic = () => {
    if (count == productsImages.imageUrl.length - 1) {
      setCount((count = 0));
      return;
    }
    if (count < productsImages.imageUrl.length - 1) {
      setCount(count + 1);
    }
  };

  let prevPic = () => {
    if (count == 0) {
      setCount((count = productsImages.imageUrl.length));
    }
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log(productsImages.imageUrl[0].picture);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <section className="product-page">
            <button
              className="prevPage-btn"
              onClick={() => navigate(previousPage)}
            >
              <h4>{`back to ${previousPage.slice(6)}`}</h4>
            </button>
            <div className="product-page__container">
              <div className="product-page__pictures">
                <div className="product-page__pictures-inner">
                  <CarouselArrow left={"left"} prevPic={prevPic} />
                  <CarouselArrow nextPic={nextPic} />
                  <AnimatePresence>
                    <motion.img
                      src={`${productsImages.imageUrl[count].picture}`}
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ type: "tween" }}
                      alt="promo"
                      key={count}
                    />
                  </AnimatePresence>
                </div>
                <p>
                  {count + 1} / {productsImages.imageUrl.length}
                </p>
              </div>
              <div className="product-page__description">
                <h2>Black Shoes</h2>
                <h3>$120</h3>
                <p>
                  {`A crew neck sweatshirt in cotton-blend loopback. Designed with rib
          trims and twin tipped cuffs. Loopback cotton-blend sweat / Regular fit
          / Rib trims / Twin tipped cuffs Adopted by sports-players in winter
          training sessions, the cotton sweatshirt is a sportswear classic. Ours
          features subtle Fred Perry design details, with twin tipping at the
          cuffs. 79% Cotton / 21% Polyester Machine Wash Model's height: 186cm /
          6.1' Model wears: M Style M7535 Colour Navy. Also test is here`}
                </p>
                <CustomButton>Add to cart</CustomButton>
              </div>
            </div>
          </section>
        }
      />
    </Routes>
  );
}

const mapPropsToState = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapPropsToState)(ProductPage);
