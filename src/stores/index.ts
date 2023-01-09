import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer as pReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { userReducer } from "./user/reducers";
import type { UserState } from "./user/types";
import type { QueueState } from "./queue/types";
import { persistReducer } from "./persist/reducers";
import type { PersistState } from "./persist/types";
import { queueReducer } from "./queue/reducers";

export interface StoreStateType {
  user: UserState;
  queue: QueueState;
  persist: PersistState;
}

const rootReducer = combineReducers({
  user: userReducer,
  queue: queueReducer,
  persist: persistReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["persist", "user"], // select reducer to persist
};
const persistedReducer = pReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export { store, persistor };
