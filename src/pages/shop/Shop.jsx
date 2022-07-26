import React from "react";
import "./shop.styles.scss";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import { Route, Routes } from "react-router-dom";
import CollectionPage from "./../collection/Collection";

let ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path=":collectionPage/*" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
