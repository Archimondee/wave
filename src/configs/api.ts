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

const getHeaderPublic: any = () => {
  return {
    headers: {
      Accept: "*/*",
      //"X-PUBLIC-TOKEN": Config.PUBLIC_KEY,
    },
  };
};

const api = {
  testApi: () => host.get("bpi/currentprice.json"),
  postLogin: (body: any) => host.post("/login", body, getHeaderPublic()),
  postRegister: (body: any) =>
    host.post("/registration", body, getHeaderPublic()),
};

export default api;
