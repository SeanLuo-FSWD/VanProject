import React, { useState } from "react";
import { ICurrentUser } from "./Interfaces";
import Routing from "./Routing/Routing";
import { GlobalContext } from "./Store/Context/GlobalContext";

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    let user: ICurrentUser | null = null;
    let storageUser: string | null = localStorage.getItem("user");

    if (storageUser) {
      user = JSON.parse(storageUser);
    }

    return user;
  });

  const [currentMsg, setCurrentMsg] = useState("");

  return (
    <GlobalContext.Provider
      value={{ currentUser, setCurrentUser, currentMsg, setCurrentMsg }}
    >
      <Routing />
    </GlobalContext.Provider>
  );
}

export default App;
