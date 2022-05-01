import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { GetMessages } from "../Api/Chat";
import { ICurrentUser } from "../Interfaces";

function Chat() {
  const { register, handleSubmit } = useForm();
  const [currentUser, setCurrentUser] = useState({} as ICurrentUser);

  useEffect(() => {
    console.log("1111111111111111111111");
    console.log(localStorage.getItem("user"));

    const urlParams = new URLSearchParams(window.location.search);
    const interlocutor = urlParams.get("user");
    console.log("2222222222222222");
    console.log(interlocutor);

    const user: string | null = localStorage.getItem("user");
    let cUser: ICurrentUser;
    if (user) {
      setCurrentUser(JSON.parse(user));
      cUser = JSON.parse(user);

      const chat_users = cUser.id + "," + interlocutor;
      console.log("3333333333333333");
      console.log(chat_users);

      GetMessages(chat_users, (err: Error, result: any) => {
        if (err) {
          window.alert(err.message);
        } else {
          console.log(result);
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>{currentUser.userName}</h1>
      <h2>{currentUser.id}</h2>
      <h2>{currentUser.jwtToken}</h2>
      <form
        onSubmit={handleSubmit((data: any) =>
          console.log(JSON.stringify(data))
        )}
      >
        <textarea {...register("message")} placeholder="message" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Chat;
