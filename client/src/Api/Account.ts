import API_URL from "../Config/constant";
import axios from "axios";
import api from "./axios";

// const HttpPostLogin = (LoginDto: Object, cb: Function) => {
//   axios
//     .post(`${API_URL}/api/Account/login`, LoginDto)
//     .then((response) => {
//       console.log("HttpPostLogin success");
//       console.log(response);
//       cb(null, response.data);
//     })
//     .catch((error) => {
//       console.log("HttpPostLogin error");
//       cb(new Error("Login failed, please check credential."));
//     });
// };

const HttpPostLogin = async (LoginDto: Object, cb: Function) => {
  try {
    const response = await api({
      method: "post",
      url: "/Account/login",
      data: LoginDto,
    });

    console.log("response HttpPostLoginnnnnnn");
    console.log(response);

    cb(null, response.data);
  } catch (error) {
    console.error(error);
    cb(new Error("Login failed, please check credential."));
  }
};

// const HttpPostRegister = (RegisterDto: Object, cb: Function) => {
//   axios
//     .post(`${API_URL}/Account/register`, RegisterDto)
//     .then((response) => {
//       console.log("HttpPostRegister success");
//       console.log(response);
//       cb(null);
//     })
//     .catch((error) => {
//       console.log("HttpPostRegister error");
//       cb(new Error("Login failed, please check credential."));
//     });
// };

const HttpPostRegister = async (RegisterDto: Object, cb: Function) => {
  try {
    const response = await api({
      method: "post",
      url: "/Account/register",
      data: RegisterDto,
    });

    console.log("HttpPostRegister success");
    console.log(response);

    cb(null, response.data);
  } catch (error) {
    console.error(error);
    cb(new Error("Login failed, please check credential."));
  }
};

export { HttpPostLogin, HttpPostRegister };
