import React from "react";
import "./collection.styles.scss";
import { useParams } from "react-router-dom";
import CollectionItem from "./../../components/collection-item/CollectionItem";
/* Routes */
import { Route, Routes } from "react-router-dom";
/* Redux */
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import ProductPage from "./../product-page/ProductPage";

const CollectionPage = ({ collections }) => {
  let { collectionPage } = useParams();
  let collection = collections.filter(
    (item) => item.routeName === collectionPage
  );

  return (
    <div className="collection-page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="title">{collection[0].title}</h1>
              <div className="items">
                {collection[0].products.map((item, i) => (
                  <CollectionItem id={item.id} item={item} key={i} />
                ))}
              </div>
            </>
          }
        />
        <Route path=":product/*" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

let mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionPage);
