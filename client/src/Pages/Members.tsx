import React, { useEffect, useState } from "react";
import { HttpGetMembers } from "../Api/Users";
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
      return <h2 key={ele.id}>{ele.userName}</h2>;
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
