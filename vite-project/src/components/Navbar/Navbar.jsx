import { Link } from "react-router-dom";
import { useAuthContext } from "../../AuthContext/AuthContext";
import SubirRuta from "../../views/SubirRuta/SubirRuta";

export default function Navbar() {
  const { logout, authorization } = useAuthContext();
  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
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

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 link-secondary">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-dark">
                  Inventory
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-dark">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-dark">
                  Products
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

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
                  <Link className="dropdown-item" to="/subirRuta/:id">
                    Subir Ruta
                  </Link>
                </li>
                
                <li>
                  <Link className="dropdown-item" to="/perfil">
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
