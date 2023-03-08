import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContext/AuthContext";
import { FormularioEsquema } from "./FormularioEsquema";
import { initialValues } from "./utils/form";
import {useEffect} from "react"
import "./Formulario.css"
import Swal from "sweetalert2";

export default function Formulario() {
  const { authorization } = useAuthContext();
  const params = useParams();
  const navigate = useNavigate();

 


  async function onSubmit(values, actions) {
    fetch(`http://localhost:3000/rutas/addRutas/${authorization.id} `, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values, authorization),
    }).then((response) => {
      console.log(values);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "center",
          title: "Ruta registrada con exito",
          confirmButtonColor: "rgb(251, 82, 0)",
        });
      } else if (response.status === 409) {
        alert("");
      }
    });
    console.log(values);
    console.log(actions);
    navigate("/home")
    actions.resetForm();
  }

  const {
    values,
    errors,
    touched,

    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: FormularioEsquema,
    onSubmit,
  });

  return (
    <>
      <div>
        <h3 className="tituloSubir">Sube tu ruta</h3>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="form-group mt-5 col-md-6">
            <input
              value={values.ciudad}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className={
                errors.ciudad && touched.ciudad
                  ? "form-control is-invalid"
                  : "form-control "
              }
              name="ciudad"
              placeholder="Ciudad"
              id="ciudad"
            />
          </div>
          <div className="form-group mt-5 col-md-6">
            <input
              type="text"
              className={
                errors.distancia && touched.distancia
                  ? "form-control is-invalid"
                  : "form-control "
              }
              name="distancia"
              placeholder="Distancia"
              value={values.distancia}
              onChange={handleChange}
              onBlur={handleBlur}
              id="distancia"
            />
          </div>

          <div className="form-group mt-5 col-md-6 ">
            <select
              className={
                errors.nivel && touched.nivel
                  ? "form-select is-invalid"
                  : "form-select "
              }
              onChange={handleChange}
              onBlur={handleBlur}
              id="nivel"
            >
              <option value="">Selecciona el nivel de tu ruta</option>
              <option value="Facil">Facil</option>
              <option value="Media">Media</option>
              <option value="Dificil">Dificil</option>
            </select>
          </div>

          <div className="form-group mt-5 col-md-6">
            <input
              type="text"
              className={
                errors.velocidad && touched.velocidad
                  ? "form-control is-invalid"
                  : " form-control"
              }
              placeholder="Velocidad"
              name="velocidad"
              value={values.velocidad}
              onChange={handleChange}
              onBlur={handleBlur}
              id="velocidad"
            />
          </div>
          <div className="form-group mt-5 col-md-6">
            <select
              className={
                errors.tipo && touched.tipo
                  ? "form-select is-invalid"
                  : "form-select "
              }
              onChange={handleChange}
              onBlur={handleBlur}
              id="tipo"
            >
              <option value="">Selecciona el tipo de tu ruta</option>
              <option value="Solo ida">Solo ida</option>
              <option value="Ida y vuelta">Ida y vuelta</option>
              <option value="Circular">Circular</option>
            </select>
          </div>
          <div className="form-group mt-5 col-md-6">
            <input
              type="text"
              className={
                errors.duracion && touched.duracion
                  ? "form-control is-invalid"
                  : " form-control"
              }
              placeholder="duración aproximada"
              name="duracion"
              value={values.duracion}
              onChange={handleChange}
              onBlur={handleBlur}
              id="duracion"
            />
          </div>
          <div className="form-group mt-5 col-md-6">
            <input
              type="date"
              className={
                errors.fecha && touched.fecha
                  ? "form-select is-invalid"
                  : "form-select "
              }
              placeholder="00/00/00"
              name="fecha"
              value={values.fecha}
              onChange={handleChange}
              onBlur={handleBlur}
              id="fecha"
            />
          </div>
          <div className=" mt-5 col-md-6">
            <img src="../../../rutaregistro.png" width={55} />
          </div>
          <div className="form-group mt-5">
            <input
              type="text"
              className={
                errors.url && touched.url
                  ? "form-control is-invalid"
                  : " form-control"
              }
              placeholder="Url Google maps"
              name="url"
              value={values.url}
              onChange={handleChange}
              onBlur={handleBlur}
              id="url"
            />
          </div>
          <div className="form-group mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Detalles"
              name="detalles"
              value={values.detalles}
              onChange={handleChange}
              onBlur={handleBlur}
              id="detalles"
            />
          </div>
          <div className="form-group d-grid gap-2 col-6 mx-auto">
            <button type="submit" className=" botonsubirruta">
              Subir Ruta
            </button>
          </div>
        </form>
       
      </div>
    </>
  );
}
