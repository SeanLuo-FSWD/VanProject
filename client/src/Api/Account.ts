import API_URL from "../Config/constant";
import axios from "axios";

const HttpPostLogin = (LoginDto: Object, cb: Function) => {
  axios
    .post(`${API_URL}/api/Account/login`, LoginDto)
    .then((response) => {
      console.log("HttpPostLogin success");
      console.log(response);
      cb(null, response.data);
    })
    .catch((error) => {
      console.log("HttpPostLogin error");
      cb(new Error("Login failed, please check credential."));
    });
};

const HttpPostRegister = (RegisterDto: Object, cb: Function) => {
  console.log("55555555555555555");
  console.log(RegisterDto);

  axios
    .post(`${API_URL}/api/Account/register`, RegisterDto)
    .then((response) => {
      console.log("HttpPostRegister success");
      console.log(response);
      cb(null, response.data);
    })
    .catch((error) => {
      console.log("HttpPostRegister error");
      cb(new Error("Login failed, please check credential."));
    });
};

export { HttpPostLogin, HttpPostRegister };
