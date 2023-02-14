import "./TarjetaPerfilUsuario.css"

export default function TarjetaPerfilUsuario({detallesUsuario}) {
  return (
    <>
    
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Perfil de {detallesUsuario.apodo}</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src="https://cdn-icons-png.flaticon.com/512/1499/1499944.png"
                alt="avar"
              />

              <div className="small font-italic text-muted mb-4">
                JPG o PNG no mas de 5MB
              </div>

              <button className="btn btn-primary" type="button">
               Subir nueva imagen
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
