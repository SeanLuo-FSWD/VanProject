import { API_URL } from "../Config/constant";
import axios from "axios";
import api from "./axios";

const HttpGetMembers = async (cb: Function) => {
  try {
    const response = await api({
      method: "get",
      url: "/Users/members",
    });

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

    cb(null, response.data);
  } catch (error) {
    console.error(error);
    cb(new Error("HttpGetMember failed"));
  }
};

export { HttpGetMembers, HttpGetMember };
