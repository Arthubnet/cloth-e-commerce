import SHOP_DATA from "./shop.data";

let INITIAL_STATE = {
  collections: SHOP_DATA,
};

let shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
