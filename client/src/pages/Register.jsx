import React from "react";
import { useState } from "react";
import "./Register.scss";

function Register({ Login, setLogin }) {
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
    if (register) {
      const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const response = await data.json();
      console.log(response);
    } else {
      const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const response = await data.json();
      console.log(response);
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="register-form">
        <div>
          <button type="button" onClick={() => setRegister(false)}>
            Login
          </button>
          <button type="button" onClick={() => setRegister(true)}>
            Register
          </button>
        </div>
        <label>Username</label>
        <input name="username" type="text" onChange={handleChange} required />
        <label>E-Mail</label>
        <input name="email" type="email" onChange={handleChange} required />
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
        <button type="submit">{register ? <>Register</> : <>Login</>}</button>
      </form>
    </div>
  );
}

export default Register;
