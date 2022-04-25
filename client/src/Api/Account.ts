import API_URL from "../Config/constant";
import axios from "axios";

const HttpPostLogin = (LoginDto: Object, cb: Function) => {
  axios
    .post(`${API_URL}/api/Account/login`, LoginDto)
    .then((response) => {
      console.log("HttpPostLogin response");
      console.log(response);
      cb(null, response.data);
    })
    .catch((error) => {
      console.log("HttpPostLogin error");
      console.log(error);
      if (!error.response) {
        cb(new Error("Login failed, please check credential."));
      } else {
        cb(error.response.data);
      }
    });
};

export { HttpPostLogin };
