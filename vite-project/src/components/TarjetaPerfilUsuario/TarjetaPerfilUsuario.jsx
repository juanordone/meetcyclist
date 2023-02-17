import "./TarjetaPerfilUsuario.css";

export default function TarjetaPerfilUsuario({ detallesUsuario }) {

  return (
    <>
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Perfil de {detallesUsuario.apodo}</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src={`http://localhost:3000/${detallesUsuario.imagen}`}
                alt="avar"
              />

              <div className="small font-italic text-muted mb-4">
                JPG o PNG no mas de 5MB
              </div>

              <button className="btn btn-primary" type="button">
                Subir nueva imagen
              </button>
              <input type="file" />
            </div>
            <h6 className="ps-3"> Nombre: {detallesUsuario.nombre} </h6>
            <h6 className="ps-3">Apellidos: {detallesUsuario.apellidos}</h6>
            <h6 className="ps-3">email: {detallesUsuario.email}</h6>
          </div>
        </div>
      </div>
    </>
  );
}
