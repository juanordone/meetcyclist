import Boton from "../../components/Boton/Boton";
import "./Bienvenida.css";
import { useAuthContext } from "../../AuthContext/AuthContext";
import Footer from "../../components/Footer/Footer";

export default function Bienvenida() {
  const { authorization } = useAuthContext();
  return (
    <>
      <div className="imgFondo d-flex align-items-center justify-content-center flex-wrap">
  <div className="position-absolute top-0 start-0 mt-3 ms-5" id="meet">
    Meet Cyclist <i className="bi bi-r-circle fs-6"></i>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center">
    <h1 className="col-12 col-md-8 text-center" id="titulo">
      No salgas nunca más solo
    </h1>
    <div className="rounded-4 position-absolute top-0 end-0 mb-3 me-5 mt-5 d-flex justify-content-end">
      {!authorization?.email ? (
        <Boton to="iniciosesion" campo="iniciar sesion" />
      ) : (
        <Boton to="home" campo="iniciar sesion" />
      )}
    </div>
  </div>
</div>

      <div className="d-flex justify-content-center">
        <section className="container-sm  row justify-content-center mt-5 ">
          <div className=" col-12 col-md-4 ">
            <h2 className="fs-1" id="meet">
              Comparte{" "}
            </h2>
            <h2 className="fs-1">Conoce </h2>
            <h2 className="fs-1">Disfruta </h2>
            <p className="mt-5">
              {" "}
              Los usuarios de Meet Cyclist publican la ruta que quieren hacer
              para que otros ciclistas se les unan y hacer la ruta mas amena y
              divertida. Olvídate de salir solo.
            </p>
            <div className="mt-5  ms-md-5 d-grid gap-2 col-8 col-md-6 mx-auto ">
              <Boton to="iniciosesion" campo="iniciar sesion" />

              <Boton to="/iniciosesion" campo="registro" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="../../../bienvenida2.jpg"
              className="img-fluid"
              alt="imagen movil"
            />
          </div>
        </section>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}
