import API_URL from "../Config/constant";
import axios from "axios";
import api from "./axios";

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
  } catch (error: any) {
    console.log("HttpPostRegister.....");
    console.dir(error);

    console.log(error.response.data);

    cb(new Error(error.response.data));
  }
};

export { HttpPostLogin, HttpPostRegister };
