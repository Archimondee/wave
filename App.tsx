import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "navigations/AppNavigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "stores";
import { LogBox } from "react-native";
import { RealmProvider } from "./src/realm";
require("realm");

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  return (
    <SafeAreaProvider>
      <RealmProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      </RealmProvider>
    </SafeAreaProvider>
  );
};

export default App;
