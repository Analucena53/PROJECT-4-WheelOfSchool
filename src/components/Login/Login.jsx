import { Link } from "react-router-dom";
import { useState } from "react";
import "./login.css";
import React from 'react';




function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(`Usuario: ${user}, Contraseña: ${password}`);
  }

  function handleUserChange(event) {
    setUser(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  import React from 'react';
  import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom

  function LoginForm({ handleSubmit, user, handleUserChange, password, handlePasswordChange }) {
    return (
      <>
        <div className="loginForm">
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="loginUser">
                <label htmlFor="user">Usuario:</label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  value={user}
                  onChange={handleUserChange}
                />
              </div>
              <div className="PasswordUser">
                <label htmlFor="password">Contraseña:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button className="buttonLogin">
                <Link to="/home">Enviar</Link>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  export default LoginForm;

  export default Login;
