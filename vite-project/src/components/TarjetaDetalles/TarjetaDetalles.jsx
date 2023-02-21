import "./TarjetaDetalle.css";
export default function TarjetaDetalles({ detallesRuta }) {
  return (
    <>
      <div
        className="container d-flex justify-content-around align-items-center"
        key={detallesRuta.id}
      >
        <div className="col-6 mt-5">
          <div dangerouslySetInnerHTML={{ __html: `${detallesRuta.url}` }} />
        </div>

        <div className="col-6 mt-5 text-center">
          <p className="fs-1 fw-bold  ciudad "> <i class="bi bi-geo-alt"></i> {detallesRuta.ciudad}</p>
          <div className="d-flex justify-content-between">
            <div className="fs-3 fw-bold text-start">
              <p>Distancia <i class="bi bi-bicycle ciudad"></i> :</p>
              <p>Fecha <i class="bi bi-calendar3 ciudad"></i> :</p>
              <p>Nivel de la ruta <i class="bi bi-reception-3 ciudad"></i> :</p>
              <p>Velocidad media <i class="bi bi-fast-forward-btn ciudad"></i> :</p>
              <p>Tipo de ruta <i class="bi bi-repeat ciudad"></i> :</p>
              <p>Duración aprox. <i class="bi bi-clock ciudad"></i> :</p>
              <p>Detalles <i class="bi bi-chat-left-dots ciudad"></i> :</p>
            </div>
            <div className="fs-3 text-end">
              <p>{detallesRuta.distancia}</p>
              <p>{detallesRuta.fecha}</p>
              <p>{detallesRuta.nivel}</p>
              <p>{detallesRuta.velocidad}</p>
              <p>{detallesRuta.tipo}</p>
              <p>{detallesRuta.duracion}</p>
              <p>{detallesRuta.detalles}</p>
            </div>
          </div>

          <div className="d-grid gap-2 p-3">
            <button className="botonunir">Unirse a ruta</button>
          </div>
        </div>
      </div>
    </>
  );
}
