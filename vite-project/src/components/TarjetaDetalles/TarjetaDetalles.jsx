import "./TarjetaDetalle.css"
export default function TarjetaDetalles({ detallesRuta }) {
  return (
    <>
      
        <div
          className="container d-flex justify-content-around align-items-center"
          key={detallesRuta.id}
        >
          <div className="col-6 mt-5">
            <div  dangerouslySetInnerHTML={{ __html: `${detallesRuta.url}` }} />
          </div>

          <div className="col-6 mt-5">
            <p className="fs-1 fw-bold text-center ciudad ">{detallesRuta.ciudad}</p>
            <p className="fs-3 text-center">{detallesRuta.distancia}</p>
            <p className="fs-3 fw-bold  text-center">{detallesRuta.fecha}</p>
            <p className="fs-3 text-center">{detallesRuta.nivel}</p>
            <p className="fs-3 text-center">{detallesRuta.velocidad}</p>
            <p className="fs-3 text-center">{detallesRuta.tipo}</p>
            <p className="fs-3 text-center">{detallesRuta.duracion}</p>
            <p className="fs-3 text-center">{detallesRuta.detalles}</p>

            <div className="d-grid gap-2 p-3">
              <button className="botonunir">Unirse a ruta</button>
            </div>
          </div>
        </div>
      
    </>
  );
}
