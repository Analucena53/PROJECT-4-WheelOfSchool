import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleUserChange(event) {
    setUser(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <LoginForm
      user={user}
      handleUserChange={handleUserChange}
      password={password}
      handlePasswordChange={handlePasswordChange}
    />
  );
}

function LoginForm({ user, handleUserChange, password, handlePasswordChange }) {
  return (
    <>
      <div className="loginForm">
        <div className="box">
          <form>
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
            <Link to="/Home">
              <button className="buttonLogin" type="button">
                Enviar
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
