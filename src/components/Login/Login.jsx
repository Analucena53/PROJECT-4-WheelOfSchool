import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import "./Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (user === "" || password === "") {
      Swal.fire({
        imageUrl: "public/images/iconoError.svg",
        imageWidth: 100,
        imageHeight: 100,
        title: "Oops...",
        text: "Rellene todos los campos",
      });
    } else {
    
      window.location.href = "/Home";
    }
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
            <button className="buttonLogin" type="submit">
                Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
