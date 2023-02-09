import { useState, useEffect } from "react";
import { useAuthContext } from "../../AuthContext/AuthContext";

export default function Registro() {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    email: "",
    contraseña: "",
    nombre: "",
    apellidos: "",
  });

  function handleInput(e) {
    const nuevoRegistro = {
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    };
    setNuevoUsuario(nuevoRegistro);
  }

  function registro(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        alert(`usuario ${nuevoUsuario.nombre} registrado correctamente`);
      } else if (response.status === 409) {
        alert("usuario ya registrado");
      }
    });
    setNuevoUsuario({ email: "", contraseña: "", nombre: "", apellidos: "" });
  }
  return (
    <>
      <div className="container">
        <h3>Registro</h3>
        <form onSubmit={registro}>
          <div className="form-group mt-5">
            <input
              type="text"
              className="form-control"
              name="nombre"
              placeholder="Nombre"
              value={nuevoUsuario.nombre}
              onChange={handleInput}
            />
          </div>

          <div className="form-group mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Apellidos"
              name="apellidos"
              value={nuevoUsuario.apellidos}
              onChange={handleInput}
            />
          </div>

          <div className="form-group mt-5">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={nuevoUsuario.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group mt-5">
            <input
              type="password"
              className="form-control mt-5"
              placeholder="Contraseña"
              name="contraseña"
              value={nuevoUsuario.contraseña}
              onChange={handleInput}
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
