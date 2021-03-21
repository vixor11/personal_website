import React, { useState, useEffect } from "react";
import Login from "./Login";
import CmsHome from "./CmsHome";
import config from "../../config";

import { Route, Switch } from "react-router-dom";

export default function LoginRegister() {
  const data = {
    login_name: localStorage.getItem("login_name"),
    pwd: localStorage.getItem("pwd"),
  };

  const [isLoggedIn, setLoginState] = useState();

  useEffect(() => {
    console.log(`use effect is running: ${process.env.CURRENT_URL}`);

    fetch(`${config.CURRENT_URL}/user/checkLoggedIn`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      console.log("fetch finishes running: " + res.isLoggedIn);

      setLoginState(res.isLoggedIn);
    });
  }, []);

  function handleLogin(loginStatus) {
    setLoginState(loginStatus);
  }

  return (
    <div id="loginPapi">
      <Switch>
        <Route
          path="/admin"
          render={
            isLoggedIn
              ? (props) => (
                  <CmsHome
                    {...props}
                    isLoggedIn={isLoggedIn}
                    handleLogin={handleLogin}
                  />
                )
              : (props) => (
                  <Login
                    {...props}
                    isLoggedIn={isLoggedIn}
                    handleLogin={handleLogin}
                  />
                )
          }
        />
      </Switch>
    </div>
  );
}
