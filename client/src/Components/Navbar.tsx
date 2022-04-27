import React, { useContext } from "react";
import { GlobalContext } from "../Store/Context/GlobalContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  const onLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <div>
      <ContWrap>
        <h3>{currentUser?.userName}</h3>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="members">
          <h3>Members</h3>
        </Link>
        <button onClick={onLogout}>Logout</button>
      </ContWrap>
    </div>
  );
}

const ContWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
export default Navbar;
