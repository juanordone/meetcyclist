import { Link } from "react-router-dom";

export default function Tarjeta({ ciudad, id, url }) {
  return (
    <>
      <div className="container mt-5">
        <div className="col-lg-6 mb-4">
          <div className="card shadow-none">
            <div
              className="card-img d-flex justify-content-center mt-3"
              dangerouslySetInnerHTML={{ __html: `${url}` }}
            />
            <div className="card-body">
              <h5 className="card-title">{ciudad}</h5>
              <p className="card-text"></p>
              <Link
                to={`/detallesruta/${id}`}
                className="btn btn-outline-success btn-sm"
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
