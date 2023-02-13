export default function TarjetaDetalles({detallesRuta}) {
  return (
    <>
      <div>
        <div className="d-flex align-items-center mb-5 mt-5 p-5"
        key={detallesRuta.id}>
          <div className="flex-shrink-0">
          <div dangerouslySetInnerHTML={{ __html: `${detallesRuta.url}` }} />
          </div>

          <div className="flex-grow-1 ms-3">
            <p className="fs-1 fw-bold text-center">{detallesRuta.ciudad}</p>
            <p className="fs-3 text-center">{detallesRuta.distancia}
            
             
            </p>
            <p className="fs-3 fw-bold  text-center">{detallesRuta.fecha}</p>
            <p className="fs-3 text-center">{detallesRuta.nivel}</p>
            <p className="fs-3 text-center">{detallesRuta.velocidad}</p>
            <p className="fs-3 text-center">{detallesRuta.tipo}</p>
            <p className="fs-3 text-center">{detallesRuta.duracion}</p>
            <p className="fs-3 text-center">{detallesRuta.detalles}</p>
            
            
            <div className="d-grid gap-2 p-3">
              <a className="btn btn-primary btn-lg">Unirse a ruta</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
