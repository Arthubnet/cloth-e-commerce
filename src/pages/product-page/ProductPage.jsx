import React from "react";
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
import krasavica from "../../assets/Dresses/Boxy Pique Shirt/G4139_102_1.jpg";

function ProductPage({ collections }) {
  let { product } = useParams();
  let navigate = useNavigate();
  let previousPage = useLocation().pathname.slice(
    0,
    useLocation().pathname.lastIndexOf("/")
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <section className="product-page">
            <button onClick={() => navigate(previousPage)}>
              <h4>{`${previousPage}`}</h4>
            </button>
            <div className="product-page__pictures">
              <img src={krasavica} alt={""} />
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
          6.1' Model wears: M Style M7535 Colour Navy. Also test is here${product}`}
              </p>
              <CustomButton>Add to cart</CustomButton>
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
