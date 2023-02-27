import Login from "../../components/Login/Login";
import Registro from "../../components/Registro/Registro";
import "./InicioSesion.css";
export default function InicioSesion() {
  return (
    <>
      <div className="imgFondoLogin">
        <div className="container text-center  ">
          <div className="row align-items-center">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-4 mt-5" id="login">
                <Login />
              </div>
              <div className="col-sm-6 col-md-4 mt-5" id="login">
                <Registro />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
