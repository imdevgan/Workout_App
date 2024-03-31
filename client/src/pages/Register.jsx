import React from "react";
import { useState, useEffect } from "react";
import "./Register.scss";

function Register() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    if (register) {
      data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      console.log(data);
    } else {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
    }
    console.log(loginInfo);
  };
  return (
    <div className="register">
      <div>
        <button onClick={() => setRegister(false)}>Login</button>
        <button onClick={() => setRegister(true)}>Register</button>
      </div>
      <form onSubmit={handleSubmit} className="register">
        <label>Username: </label>
        <input name="username" type="text" onChange={handleChange}></input>
        <label>E-Mail: </label>
        <input name="email" type="email" onChange={handleChange} />
        <label>Password: </label>
        <input name="password" type="password" onChange={handleChange} />
        <button type="submit">{register ? <>Register</> : <>Login</>}</button>
      </form>
    </div>
  );
}

export default Register;
