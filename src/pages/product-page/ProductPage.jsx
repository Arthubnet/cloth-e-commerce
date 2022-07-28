import React, { useState } from "react";
import "./product-page.styles.scss";
import CustomButton from "./../../components/custom-button/CustomButton";
import CarouselArrow from "./../../components/CarouselArrow";
/* Redux */
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "./../../redux/shop/shop.selector";
import {
  Route,
  Routes,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import pathArrow from "../../assets/arrow-left.svg";

/* Framer */
import { motion, AnimatePresence } from "framer-motion";

function ProductPage({ collections, addItem }) {
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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="product-page"
          >
            <button
              className="prevPage-btn"
              onClick={() => navigate(previousPage)}
            >
              <motion.img whileHover={{ x: -4 }} animate={{}} src={pathArrow} />
              <h4>{`Back to ${previousPage.slice(6)}`}</h4>
            </button>
            <div className="product-page__container">
              <div className="product-page__pictures">
                <div className="product-page__pictures-inner">
                  <CarouselArrow left={"left"} prevPic={prevPic} />
                  <CarouselArrow nextPic={nextPic} />
                  <AnimatePresence>
                    <motion.img
                      src={`${productsImages.imageUrl[count].picture}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "tween" }}
                      alt="promo"
                      key={count}
                    />
                  </AnimatePresence>
                </div>
                <p className="pagination">
                  {count + 1} / {productsImages.imageUrl.length}
                </p>
              </div>
              <div className="product-page__description">
                <h1>{productsImages.name}</h1>
                <h2 className="price">${productsImages.price}</h2>
                <p>{productsImages.description}</p>
                <CustomButton onClick={() => addItem(productsImages)}>
                  Add to cart
                </CustomButton>
              </div>
            </div>
          </motion.section>
        }
      />
    </Routes>
  );
}

const mapPropsToState = createStructuredSelector({
  collections: selectCollections,
});

const mapDispathtoProps = (dispath) => ({
  addItem: (item) => dispath(addItem(item)),
});

export default connect(mapPropsToState, mapDispathtoProps)(ProductPage);
