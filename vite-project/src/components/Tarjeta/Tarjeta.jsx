import { Link } from "react-router-dom";

export default function Tarjeta({ ciudad, id,url }) {
  return (
    <>
      <div className="col-lg-4 mb-4">
        <div className="card">
        <div className="card-img-top" dangerouslySetInnerHTML={{ __html: `${url}` }} />
          
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
