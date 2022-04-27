import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HttpGetMembers } from "../Api/Members";
import { IMember } from "../Interfaces";

function Members() {
  const [Members, setMembers] = useState([] as IMember[]);

  useEffect(() => {
    HttpGetMembers((err: Error, result: IMember[]) => {
      if (err) {
        window.alert(err.message);
      } else {
        setMembers(result);
      }
    });
  }, []);

  const displayMembers = () => {
    let membersList = Members.map((ele: IMember) => {
      return (
        <Link key={ele.id} to={`/member/${ele.id}`}>
          <h2>{ele.userName}</h2>
        </Link>
      );
    });

    return membersList;
  };

  if (Members.length) {
    return <div>{displayMembers()}</div>;
  } else {
    return <h2>Loading</h2>;
  }
}

export default Members;
