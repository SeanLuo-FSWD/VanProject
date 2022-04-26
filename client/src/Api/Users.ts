import API_URL from "../Config/constant";
import axios from "axios";
import api from "./axios";

// const HttpGetMembers = async (cb: Function) => {
//   await axios
//     .get(`${API_URL}/api/Users/users`)
//     .then((response) => {
//       console.log("HttpGetMembers success");
//       console.log(response);
//       cb(null, response.data);
//     })
//     .catch((error) => {
//       console.log("HttpGetMembers error");
//       cb(new Error("getting users failed."));
//     });

//   cb(null, [
//     {
//       age: 15,
//       userName: "bob",
//       gender: "Male",
//       city: "Vancouver",
//     },
//     {
//       age: 45,
//       userName: "alice",
//       gender: "Female",
//       city: "Richmond",
//     },
//     {
//       age: 9,
//       userName: "cindy",
//       gender: "Female",
//       city: "North Vancouver",
//     },
//     {
//       age: 7,
//       userName: "eric",
//       gender: "Male",
//       city: "Vancouver",
//     },
//     {
//       age: 70,
//       userName: "david",
//       gender: "Male",
//       city: "Richmond",
//     },
//   ]);
// };

const HttpGetMembers = async (cb: Function) => {
  try {
    const response = await api({
      method: "get",
      url: "/Users/users",
    });

    console.log("response HttpGetMembers");
    console.log(response);

    cb(null, response.data);
  } catch (error) {
    console.error(error);
    cb(new Error("Login failed, please check credential."));
  }
};

export { HttpGetMembers };
