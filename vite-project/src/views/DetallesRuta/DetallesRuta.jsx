import TarjetaDetalles from "../../components/TarjetaDetalles/TarjetaDetalles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comentarios from "../../components/Comentarios/Comentarios";
import TarjertaComentario from "../../components/TarjetaComentario/TarjetaComentario";

export default function DetallesRuta({}) {
  const { id } = useParams();
  const [detallesRuta, setDetallesRuta] = useState([]);
  const [comentariosRuta, setComentariosRuta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/rutas/ruta/${id}`);
        const data = await response.json();
        setDetallesRuta(data);
        const responseComentarioRuta = await fetch(
          `http://localhost:3000/comentario/comentarioRuta/${id}`
        );
        const dataComentariosRuta = await responseComentarioRuta.json();
        setComentariosRuta(dataComentariosRuta);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <div className="colorhome">
      <TarjetaDetalles detallesRuta={detallesRuta} />
      <Comentarios />
      <div>
        {comentariosRuta.map((comentarioUsuario) => (
          <TarjertaComentario
            key={comentarioUsuario.id}
            Comentarios={comentarioUsuario.comentario}
            apodo={comentarioUsuario.apodo}
            imagen={comentarioUsuario.imagen}
          />
        ))}
      </div>
      </div>
    </>
  );
}
