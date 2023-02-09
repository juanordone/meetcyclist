export default function Login() {
  return (
    <>
     <div className="container">
      <h3>Iniciar Sesion</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control mt-5"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control mt-5"
                  placeholder="Contraseña"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-dark mt-5">
                  Login
                </button>
                <a href="#" className="btn mt-5">
                  Forget Password?
                </a>
              </div>
            </form>
            </div>
         
    </>
  );
}
