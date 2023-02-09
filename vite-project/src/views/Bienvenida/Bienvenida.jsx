import Boton from "../../components/Boton/Boton";
import "./Bienvenida.css";

export default function Bienvenida() {
  return (
    <>
      <div className="imgFondo">
        <div className="rounded-4 position-absolute top-0 end-0 mt-5  me-5">
          <Boton />
          <Boton />
        </div>
      </div>
    </>
  );
}
