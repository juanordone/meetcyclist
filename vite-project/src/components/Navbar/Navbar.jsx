import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../AuthContext/AuthContext";
import "./Navbar.css"

export default function Navbar() {
  
 
  const { logout, authorization } = useAuthContext();
  const [imagenUsuario, setImagenUsuario] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/user/user/${authorization.id}`
        );
        const data = await response.json();
        setImagenUsuario(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <header className="navbar border-bottom  ">
        <div className="container ">
          <div>
            <a 
              href="/home"
              className="d-flex align-items-center mb-2 mb-lg-0  text-decoration-none  fs-1 titulonavbar"
            >
              Meet Cyclist 
              <svg 
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              > </svg>
              
            </a>
            </div>

            <div className="dropdown   ">
              <p>{imagenUsuario.nombre}</p>
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={`http://localhost:3000/${imagenUsuario.imagen}`}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <Link
                    className="dropdown-item"
                    to={`/subirRuta/${authorization.id}`}
                  >
                    Subir Ruta
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to={`/perfil/${authorization.id}`}
                  >
                    Perfil
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" onClick={logout} to={"/"}>
                    Salir
                  </Link>
                </li>
              </ul>
            </div>
          
        </div>
      </header>
    </>
  );
}
