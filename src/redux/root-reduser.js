//combines all states together, it's root
import { combineReducers } from "redux"; // for combining all the reducers

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "./shop/shop.reducer";
import carouselReducer from "./carousel/carousel.reducer";
/* Storing data to local storage */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // we want to persist only 'cart' reduser for now
};

const rootReduser = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  carousel: carouselReducer,
});

export default persistReducer(persistConfig, rootReduser);
