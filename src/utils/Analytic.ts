import { firebase } from "@react-native-firebase/analytics";
import { getTrackingPermissionsAsync } from "expo-tracking-transparency";
import { Platform } from "react-native";

export const logEvent = async (eventName: string, value: object) => {
  const { granted } = await getTrackingPermissionsAsync();
  if (granted || Platform.OS === "android") {
    await Promise.all([firebase.analytics().logEvent(eventName, value)])
      .then(res => window.console.log("logEvent Success", res))
      .catch(err => window.console.log("logEvent Error", err));
  }
};

export const trackScreenView = async (
  screen_class: string,
  screen_name: string,
) => {
  // Set & override the MainActivity screen name
  // Screen Class is File Name
  // Screen Name is Screen from Analytic
  const { granted } = await getTrackingPermissionsAsync();
  if (granted || Platform.OS === "android") {
    Promise.all([
      await firebase.analytics().logScreenView({
        screen_class: screen_class,
        screen_name: screen_name,
      }),
    ])
      .then(res =>
        window.console.log(
          "trackScreenView Success",
          res,
          screen_name,
          screen_class,
        ),
      )
      .catch(err => window.console.log("trackScreenView Error", err));
  }
};

export const changeToSlug = (text: string) => {
  return text.split(" ").join("-").toLowerCase();
};
