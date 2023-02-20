import { Link } from "react-router-dom";
import "./Tarjeta.css"

export default function Tarjeta({ ciudad, id, url , fecha}) {
  return (
    <>
      <div className=" mt-5">
        <div className="col-11 mb-4">
          <div className="card shadow-sm bordetarjeta p-1">
            <div
              className="card-img d-flex justify-content-center "
              dangerouslySetInnerHTML={{ __html: `${url}` }}
            />
            <div className="card-body">
              <h5 className="card-title mb-4">{ciudad}</h5>
              <p className="card-text mb-4">{fecha}</p>
              <Link
                to={`/detallesruta/${id}`}
                className="botonTarjeta "
              >
                Leer más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
