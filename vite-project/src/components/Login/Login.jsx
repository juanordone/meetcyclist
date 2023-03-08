import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContext/AuthContext";
import "./Login.css"
export default function Login() {
  const { login, authorization } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (authorization) {
      navigate("/home");
    }
  }, [authorization]);

  const [user, setUser] = useState({
    email: "",
    contraseña: "",
  });

  function handleLogin(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="  mt-5 me-5 ">
        <h3 className="titulo">Iniciar Sesión</h3>
        <form onSubmit={(e) => login(e, user)}>
          <div className="form-group ">
            <input
              type="text"
              name="email"
              className="form-control mt-5"
              placeholder="Email"
              onChange={handleLogin}
              value={user.email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="contraseña"
              className="form-control mt-5"
              placeholder="Contraseña"
              onChange={handleLogin}
              value={user.contraseña}
            />
          </div>
          <div className="form-group ">
            <button id="iniciosesion" type="submit" className="btn btn-lg mt-5 col-6 ">
              Iniciar sesión 
            </button>
            
          </div>
        </form>
      </div>
    </>
  );
}
