import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as auth from "../components/Auth.js";
import Header from "./Header.js";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    auth
      .authorize(email, password)
      .then((data) => {
        const token = data.token;
        localStorage.setItem("jwt", token);
        history.push("/");
      })
      .catch((e) => {
        alert("Проверьте логин и пароль");
      });
  }

  return (
    <div>
      <Header link="/signup" linkText="Регистрация" />
      <div className="enter">
        <h1 className="enter__title ">Вход</h1>
        <form onSubmit={handleSubmit} className="enter__form">
          <input
            className="enter__input"
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            className="enter__input"
            placeholder="Пароль"
            name="password"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button type="submit" className="enter__button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
