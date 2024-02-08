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
    <>
      <button>
        <Link to="/home">Home</Link>
      </button>
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
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
         
        </form> 
        
      </div>
      <button type="submit" className="button">
            Enviar
          </button>
    </>
  );
}

export default Login;
