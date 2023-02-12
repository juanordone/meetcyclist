import { Link } from "react-router-dom";

export default function Tarjeta({ ciudad, id }) {
  return (
    <>
      <div className="col-lg-4 mb-4">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{ciudad}</h5>
            <p className="card-text"></p>
            <Link to={`/detallesruta/${id}`} className="btn btn-outline-success btn-sm">
              Read More
            </Link>
            <a href="" className="btn btn-outline-danger btn-sm">
              <i className="bi bi-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
