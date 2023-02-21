import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Reg() {
  const [name, setname] = useState(" ");
  const [username, setusername] = useState(" ");
  const [password, setpassword] = useState(" ");
  const navigate = useNavigate();
  function reg(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/reg", { name, username, password })
      .then(function (response) {
        if (response) {
          navigate("/login");
        }
      });
  }
  return (
    <div>
      <form onSubmit={reg}>
        <input
          type="text"
          placeholder="urname"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />

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
          placeholde
          r="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <input type="submit" value="register" />
      </form>
    </div>
  );
}

export default Reg;
