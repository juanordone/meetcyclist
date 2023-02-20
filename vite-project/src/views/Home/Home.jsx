import Tarjeta from "../../components/Tarjeta/Tarjeta";
import { useEffect, useState } from "react";
import BarraBuscador from "../../components/BarraBuscador/BarraBuscador";
import "./Home.css"

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
        setError("Busca otro lugar donde pedalear");
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
    <div className="d-flex justify-content-center">
      <BarraBuscador
        rutaABuscar={rutaABuscar}
        setRutaABuscar={setRutaABuscar}
      />
      </div>
      <p className="text-uppercase fs-1 fw-semibold text-center mt-5 noruta ">{error}</p>
      
      <div className="container d-flex flex-wrap gap-5 justify-content-center">
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
