
import TarjetaDetalles from "../../components/TarjetaDetalles/TarjetaDetalles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comentarios from "../../components/Comentarios/Comentarios";
import TarjertaComentario from "../../components/TarjetaComentario/TarjetaComentario";

export default function DetallesRuta({}) {
  const { id } = useParams();
  const [detallesRuta, setDetallesRuta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/rutas/ruta/${id}`);
        const data = await response.json();
        setDetallesRuta(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <TarjetaDetalles detallesRuta={detallesRuta} />
      <Comentarios />
      <TarjertaComentario />
    </>
  );
}
