import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer as pReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { userReducer } from "./user/reducers";
import type { UserState } from "./user/types";

export interface StoreStateType {
  user: UserState;
}

const rootReducer = combineReducers({
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["persist"], // select reducer to persist
};
const persistedReducer = pReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export { store, persistor };
