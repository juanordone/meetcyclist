import { Link } from "react-router-dom";
import { useAuthContext } from "../../AuthContext/AuthContext";


export default function Navbar() {
  const { logout, authorization } = useAuthContext();
  
  return (
    <>
      <header className="navbar border-bottom  ">
        <div className="container-fluid ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
            <a
              href="/home"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none fs-1"
            >
              Meet Cyclist
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </a>

            

            

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <Link className="dropdown-item" to={`/subirRuta/${authorization.id}`}>
                    Subir Ruta
                  </Link>
                </li>
                
                <li>
                  <Link className="dropdown-item" to={`/perfil/${authorization.id}`}>
                    Perfil
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item"  onClick={logout} to={"/"}>
                    Salir
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
