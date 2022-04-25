import React from "react";
import { HttpPostLogin } from "../Api/Account";
import FormManager from "../UI/FormManager";

function Login() {
  interface formValuesInterface {
    username: string;
    email: string;
    password: string;
  }

  let initialValues: formValuesInterface = {
    username: "",
    email: "",
    password: "",
  };

  function onLoginFormSubmit(formValues: formValuesInterface) {
    console.log("formvalues....");
    console.log(formValues);

    HttpPostLogin(formValues, (err: Error, result: any) => {
      if (err) {
        window.alert(err.message);
      } else {
        console.log("success login");
        console.log(result);
      }
    });
  }

  return (
    <div>
      <FormManager initialValues={initialValues}>
        {({ values, setValues }: any) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(values);
              onLoginFormSubmit(values);
              setValues(initialValues);
            }}
          >
            <input
              name="Email"
              placeholder="Email"
              value={values.Email}
              type="text"
              onChange={(e) => {
                setValues({ ...values, Email: e.target.value });
              }}
            />
            <input
              name="Password"
              placeholder="Password"
              value={values.Password}
              type="password"
              onChange={(e) => {
                setValues({ ...values, Password: e.target.value });
              }}
            />
          </form>
        )}
      </FormManager>
    </div>
  );
}

export default Login;
