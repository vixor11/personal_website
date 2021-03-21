import React, { useState } from "react";
import "./Login.css";

import { TextField, Button } from "@material-ui/core";
import fetch from "node-fetch";

export default function Login() {
  const [usernameValue, setUsernameValue] = useState();
  const [pwdValue, setPwdValue] = useState();

  function handleChangeUsername(event) {
    setUsernameValue(event.target.value);
  }

  function handleChangePassword(event) {
    setPwdValue(event.target.value);
  }

  function handleSubmitLogin(event) {
    let username = usernameValue;
    let pwd = pwdValue;
    localStorage.setItem("username", username);
    localStorage.setItem("pwd", pwd);

    let data = {
      login_name: localStorage.getItem("username"),
      pwd: localStorage.getItem("pwd"),
    };

    event.preventDefault();
    fetch(`${process.env["CURRENT_URL"]}/user/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        this.props.handleLogin(json.isLoggedIn);
        // this.setState({errorMessageLogin: "Login: Incorrect username or password"});
      });
  }

  return (
    <div id="loginPapi">
      <div>
        <h1>Login</h1>
        <form
          onSubmit={handleSubmitLogin}
          className="mainForm displayVertically"
        >
          <div className="">
            <TextField
              label="Username*"
              type="text"
              value={usernameValue}
              onChange={handleChangeUsername}
            />
          </div>
          <div>
            <TextField
              label="Password*"
              type="password"
              value={pwdValue}
              onChange={handleChangePassword}
            />
          </div>
          <Button
            className="test button width100"
            type="submit"
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
