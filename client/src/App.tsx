import React, { useState } from "react";
import Routing from "./Routing/Routing";
import { GlobalContext } from "./Store/Context/GlobalContext";

function App() {
  const [currentUser, setCurrentUser] = useState("null");
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
