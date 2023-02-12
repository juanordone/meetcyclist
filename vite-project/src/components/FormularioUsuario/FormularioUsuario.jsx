import "./FormularioUsuario.css";

export default function FormularioUsuario() {
  return (
    <>
      <div className="col-xl-8">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputUsername">
                Apodo (Cómo aparecerá su nombre para otros usuarios en el sitio)
              </label>
              <input
                className="form-control"
                id="inputUsername"
                type="text"
                placeholder="Apodo"
                
              />
            </div>

            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputFirstName">
                 Nombre
                </label>
                <input
                  className="form-control"
                  id="inputFirstName"
                  type="text"
                  placeholder="Nombre"
                  
                />
              </div>

              <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputLastName">
                 Apellidos
                </label>
                <input
                  className="form-control"
                  id="inputLastName"
                  type="text"
                  placeholder="Apellidos"
                
                />
              </div>
            </div>

            

            <div className="mb-3">
              <label className="small mb-1" htmlFor="inputEmailAddress">
                Email 
              </label>
              <input
                className="form-control"
                id="inputEmailAddress"
                type="email"
                placeholder="Email"
                
              />
            </div>


            <button className="btn btn-primary" type="button">
             Guardar cambios
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
