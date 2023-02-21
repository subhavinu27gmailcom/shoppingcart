import axios from "axios";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setusername] = useState(" ");
  const [password, setpassword] = useState(" ");
  const navigate = useNavigate();
  function log(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, password })
      .then(function (response) {
        if (response) {
          console.log(response);
          localStorage.setItem("token", "Bearer" + response.data);
          navigate("/");
        }
      });
  }

  return (
    <div>
      <form onSubmit={log}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default Login;
