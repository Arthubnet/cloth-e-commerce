import { createSelector } from "reselect";

let selectShop = (state) => state.shop;

export let selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollection],
    (collections) => collections[collectionUrlParam]
  );

export default selectCollection;
