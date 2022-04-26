import React, { useState, useContext } from "react";
import { HttpPostLogin, HttpPostRegister } from "../Api/Account";
import { IUserDto } from "../Interfaces";
import { GlobalContext } from "../Store/Context/GlobalContext";

function Login() {
  interface initialLoginFormValues {
    Email: string;
    Password: string;
  }

  interface initialRegisterFormValues {
    UserName: string;
    Email: string;
    Password: string;
    Age: string;
    Gender: string;
    City: string;
  }

  let initialLoginFormValues: initialLoginFormValues = {
    Email: "",
    Password: "",
  };

  let initialRegisterFormValues: initialRegisterFormValues = {
    UserName: "",
    Email: "",
    Password: "",
    Age: "",
    Gender: "",
    City: "",
  };

  const [loginFV, setLoginFV] = useState(initialLoginFormValues);
  const [registerFV, setRegisterFV] = useState(initialRegisterFormValues);

  const [loginFormType, setLoginFormType] = useState(true);

  const { setCurrentUser } = useContext(GlobalContext);

  function onLoginFormSubmit() {
    HttpPostLogin(loginFV, (err: Error, result: IUserDto) => {
      if (err) {
        window.alert(err.message);
      } else {
        console.log("success login");
        console.log(result);

        localStorage.setItem("user", JSON.stringify(result));

        const { jwtkey, ...cUser } = result;

        setCurrentUser(cUser);
        setLoginFV(initialLoginFormValues);
      }
    });
  }

  function onRegisterFormSubmit() {
    for (const [key, value] of Object.entries(registerFV)) {
      console.log(`${key}: ${value}`);
      if (!value) {
        window.alert(`${key} cannot be empty`);
      }
    }

    HttpPostRegister(registerFV, (err: Error) => {
      if (err) {
        window.alert(err.message);
      } else {
        window.alert("registration success, please login now");
        setRegisterFV(initialRegisterFormValues);
        setLoginFormType(true);
      }
    });
  }

  return (
    <div>
      {loginFormType ? (
        <>
          <h2>Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onLoginFormSubmit();
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
            <button
              onClick={() => {
                setLoginFormType(false);
              }}
            >
              Register instead
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Register</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onRegisterFormSubmit();
            }}
          >
            <input
              name="UserName"
              placeholder="user name"
              value={registerFV.UserName}
              type="text"
              onChange={(e) => {
                setRegisterFV({ ...registerFV, UserName: e.target.value });
              }}
            />
            <input
              name="Email"
              placeholder="Email"
              value={registerFV.Email}
              type="text"
              onChange={(e) => {
                setRegisterFV({ ...registerFV, Email: e.target.value });
              }}
            />
            <input
              name="Password"
              placeholder="Password"
              value={registerFV.Password}
              type="password"
              onChange={(e) => {
                setRegisterFV({ ...registerFV, Password: e.target.value });
              }}
            />
            <input
              type="number"
              placeholder="Age"
              max="100"
              name="Age"
              onChange={(e) => {
                setRegisterFV({ ...registerFV, Age: e.target.value });
              }}
            />
            <label htmlFor="Gender">Gender</label>

            <select
              name="Gender"
              id="genders"
              onChange={(e) => {
                setRegisterFV({ ...registerFV, Gender: e.target.value });
              }}
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
            </select>

            <label htmlFor="city">City</label>
            <select
              name="City"
              id="cities"
              onChange={(e) => {
                setRegisterFV({ ...registerFV, City: e.target.value });
              }}
            >
              <option value=""></option>
              <option value="Burnaby">Burnaby</option>
              <option value="Coquitlam">Coquitlam</option>
              <option value="North Vancouver">North Vancouver</option>
              <option value="Richmond">Richmond</option>
              <option value="Surrey">Surrey</option>
              <option value="Vancouver">Vancouver</option>
            </select>
            <button type="submit">Submit</button>
            <button
              onClick={() => {
                setLoginFormType(true);
              }}
            >
              Login instead
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;
