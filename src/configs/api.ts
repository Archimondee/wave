import axios from "axios";
import Config from "react-native-config";

export const host = axios.create({
  baseURL: Config.HOST,
});

// const getHeaderPrivate = (token: string) => {
//   return {
//     headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
//   };
// };

const api = {
  testApi: () => host.get("bpi/currentprice.json"),
  getContent: () => host.get("on-boarding/content"),
  getCategoryList: () => host.get("util/category/list"),
};

export default api;
