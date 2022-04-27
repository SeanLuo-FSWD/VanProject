import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HttpGetMember } from "../Api/Members";
import { IMember } from "../Interfaces";

function Member() {
  const { memberId } = useParams();

  const [Member, setMember] = useState(null as IMember | null);

  useEffect(() => {
    if (memberId) {
      HttpGetMember(memberId, (err: Error, result: IMember) => {
        if (err) {
          window.alert(err.message);
        } else {
          setMember(result);
        }
      });
    }
  }, []);

  if (Member) {
    return (
      <div>
        <div>
          <p>Username: {Member.userName}</p>
          <p>Age: {Member.age}</p>
          <p>City: {Member.city}</p>
          <p>Gender: {Member.gender}</p>
          <Link to="/chat">
            <button>Chat</button>
          </Link>
        </div>
      </div>
    );
  } else {
    return <h2>Loading</h2>;
  }
}

export default Member;
