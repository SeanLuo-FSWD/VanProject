import API_URL from "../Config/constant";
import axios from "axios";
import api from "./axios";

const HttpGetMembers = async (cb: Function) => {
  try {
    const response = await api({
      method: "get",
      url: "/Users/members",
    });

    console.log("response HttpGetMembers");
    console.log(response);

    cb(null, response.data);
  } catch (error) {
    console.error(error);
    cb(new Error("HttpGetMembers failed"));
  }
};

const HttpGetMember = async (id: String, cb: Function) => {
  try {
    const response = await api({
      method: "get",
      url: `/Users/member/${id}`,
    });

    console.log("response HttpGetMember");
    console.log(response);

    cb(null, response.data);
  } catch (error) {
    console.error(error);
    cb(new Error("HttpGetMember failed"));
  }
};

export { HttpGetMembers, HttpGetMember };
