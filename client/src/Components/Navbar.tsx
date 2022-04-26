import React, { useContext } from "react";
import { GlobalContext } from "../Store/Context/GlobalContext";
import styled from "styled-components";

function Navbar() {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const onLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <div>
      <ContWrap>
        <h3>{currentUser?.UserName}</h3>
        <button onClick={onLogout}>Logout</button>
      </ContWrap>
    </div>
  );
}

const ContWrap = styled.div`
  display: flex;
`;
export default Navbar;
