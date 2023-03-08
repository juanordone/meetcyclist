import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormularioUsuario from "../../components/FormularioUsuario/FormularioUsuario";
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import TarjetaPerfilUsuario from "../../components/TarjetaPerfilUsuario/TarjetaPerfilUsuario";

export default function DetallesUsuario() {
  const { id } = useParams();

  const [detallesUsuario, setDetallesUsuario] = useState([]);
  const [rutasUsuario, setRutasUsuario] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/user/user/${id}`);
        const data = await response.json();
        setDetallesUsuario(data);
        const responseRutasUsuario = await fetch(
          `http://localhost:3000/rutas/rutaUsuario/${id}`
        );
        const dataRutasUsuario = await responseRutasUsuario.json();
        setRutasUsuario(dataRutasUsuario);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="colorhome">
        <div className="container">
          <div className=" d-flex justify-content-evenly">
            <div className="col-sm-12 col-md-3 mb-3">
              <TarjetaPerfilUsuario detallesUsuario={detallesUsuario} />
            </div>
            <div className="col-sm-12 col-md-5">
              <FormularioUsuario setDetallesUsuario={setDetallesUsuario} />
            </div>
          </div>
          <div className=" d-flex flex-wrap justify-content-center gap-5">
            {rutasUsuario.map((rutaUsuario) => (
              <div className="col-sm-6 col-md-5 mb-3 ">
                <Tarjeta
                  setDetallesUsuario={setDetallesUsuario}
                  key={rutaUsuario.id}
                  url={rutaUsuario.url}
                  ciudad={rutaUsuario.ciudad}
                  id={rutaUsuario.id}
                  fecha={rutaUsuario.fecha}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
