import Tarjeta from "../../components/Tarjeta/Tarjeta";
import { useEffect, useState } from "react";
import BarraBuscador from "../../components/BarraBuscador/BarraBuscador";

export default function Home() {
  const [rutas, setRutas] = useState([]);
  const [rutaABuscar, setRutaABuscar] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/rutas");
        const data = await response.json();
        setRutas(data);
        setError(null);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRutaABuscar = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/rutas/rutasName/${rutaABuscar}`
        );
        const data = await response.json();
        setRutas(data);
        setError(null);
      } catch (error) {
        console.log(error);
        setError("La ruta no existe");
        setRutas([]);
      }
    };
    if (rutaABuscar !== "") {
      fetchRutaABuscar();
    } else {
      fetchData();
    }
  }, [rutaABuscar]);

  return (
    <>
      <BarraBuscador
        rutaABuscar={rutaABuscar}
        setRutaABuscar={setRutaABuscar}
      />
      <p className="text-uppercase fs-1 fw-semibold text-center ">{error}</p>
      <div className="container d-flex flex-wrap justify-content-center">
        {rutas.map((ruta) => (
          <Tarjeta
            key={ruta.id}
            ciudad={ruta.ciudad}
            url={ruta.url}
            id={ruta.id}
          />
        ))}
      </div>
    </>
  );
}
