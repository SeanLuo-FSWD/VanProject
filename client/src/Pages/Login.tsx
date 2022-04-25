import React, { useState, useContext } from "react";
import { HttpPostLogin } from "../Api/Account";
import { GlobalContext } from "../Store/Context/GlobalContext";

function Login() {
  interface formValuesInterface {
    Email: string;
    Password: string;
  }

  let initialValues: formValuesInterface = {
    Email: "",
    Password: "",
  };

  const [loginFV, setLoginFV] = useState(initialValues);

  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  function onLoginFormSubmit() {
    console.log("formvalues....");
    console.log(loginFV);

    HttpPostLogin(loginFV, (err: Error, result: any) => {
      if (err) {
        window.alert(err.message);
      } else {
        console.log("success login");
        console.log(result);

        const { jwtkey, ...cUser } = result;

        localStorage.setItem("user", JSON.stringify(result));
        setCurrentUser(cUser);
      }
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLoginFormSubmit();
          setLoginFV(initialValues);
        }}
      >
        <input
          name="Email"
          placeholder="Email"
          value={loginFV.Email}
          type="text"
          onChange={(e) => {
            setLoginFV({ ...loginFV, Email: e.target.value });
          }}
        />
        <input
          name="Password"
          placeholder="Password"
          value={loginFV.Password}
          type="password"
          onChange={(e) => {
            setLoginFV({ ...loginFV, Password: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
