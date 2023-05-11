import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slice/app";
import authReducer from "./slice/auth";

// slice
const rootPeristConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // whitelist: [] ,
  // blacklist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export { rootPeristConfig, rootReducer };
