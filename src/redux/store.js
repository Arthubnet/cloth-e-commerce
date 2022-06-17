import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //for debuggin, we can console errors
import rootReduser from "./root-reduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

const middlewares = [logger];

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
