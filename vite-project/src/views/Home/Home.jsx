import Navbar from "../../components/Navbar/Navbar";
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import { useEffect, useState } from "react";

export default function Home() {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/rutas");
        const data = await response.json();
        setRutas(data);
        
      } catch (error) {
        console.log(error);
      }
      
    };
    fetchData()
  }, []);
  return (
    <>
      <Navbar />
      <h1>ESTO ES LA HOME </h1>
      <div className="d-flex flex-wrap">
        {rutas.map((ruta) => (
          <Tarjeta key={ruta.id} ciudad={ruta.ciudad} url={ruta.url} id={ruta.id}/>
        ))}
      </div>
    </>
  );
}
