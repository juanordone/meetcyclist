import Boton from "../../components/Boton/Boton";
import "./Bienvenida.css";
import { useAuthContext } from "../../AuthContext/AuthContext";

export default function Bienvenida() {
  const { authorization } = useAuthContext();
  return (
    <>
      <div className="imgFondo">
        <div className="rounded-4 position-absolute top-0 end-0 mt-5  me-5">
          {!authorization?.email ? (
            <Boton to="iniciosesion" campo="iniciar sesion" />
          ) : (
            <Boton to="home" campo="iniciar sesion" />
          )}

          <Boton to="/iniciosesion" campo="registro" />
        </div>
      </div>
    </>
  );
}
