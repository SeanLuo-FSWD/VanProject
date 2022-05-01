import { API_URL } from "../Config/constant";
import axios from "axios";
import api from "./axios";

const GetMessages = async (user_ids: string, cb: Function) => {
  try {
    console.log("444444444444444444");

    console.log(`/chat/GetMessages?chatIds=${user_ids}`);

    const response = await api({
      method: "get",
      url: `/chat/GetMessages?chatIds=${user_ids}`,
    });

    cb(null, response.data);
  } catch (error) {
    console.error(error);
    cb(new Error("HttpGetMembers failed"));
  }
};

export { GetMessages };
