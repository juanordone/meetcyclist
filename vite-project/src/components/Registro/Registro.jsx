export default function Registro() {
  return (
    <>
    <div className="container">
      <h3>Registro</h3>
      <form>
        <div className="form-group mt-5">
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Nombre"
          />
        </div>

        <div className="form-group mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Apellidos"
            name="apellidos"
          />
        </div>

        <div className="form-group mt-5">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="form-group mt-5">
          <input
            type="password"
            className="form-control mt-5"
            placeholder="Contraseña"
            name="password"
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary mt-5" />
        </div>
        <div className="form-check text-light mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            required
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Acepto la politica de privacidad
          </label>
        </div>
      </form>
      </div>
      </>
   
  );
}
