import { Link } from "react-router-dom";
import { useState } from "react";
import "./login.css";

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

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      user={user}
      handleUserChange={handleUserChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
    />
  );
}

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

export default Login;
