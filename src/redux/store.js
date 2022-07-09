import { createStore } from "redux";
/* import logger from "redux-logger"; */ //for debuggin, we can console errors
import rootReduser from "./root-reduser";
import { persistStore } from "redux-persist";

/* const middlewares = [logger]; */

const store = createStore(rootReduser);

const persistor = persistStore(store);

export { store, persistor };
