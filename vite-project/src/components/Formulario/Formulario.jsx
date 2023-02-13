import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../AuthContext/AuthContext";
import { FormularioEsquema } from "./FormularioEsquema";
import { initialValues } from "./utils/form";

export default function Formulario() {
  const {authorization} = useAuthContext
  const params = useParams()
  async function onSubmit(values, actions) {
    fetch(`http://localhost:3000/rutas/addRutas/${id} `, {
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
        alert(`ruta ${values.ciudad} registrada correctamente`);
      } else if (response.status === 409) {
        alert("");
      }
    });
    console.log(values);
    console.log(actions);
    actions.resetForm();
  }

  const {
    values,
    errors,
   
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
      <div className="container">
        <h3>Subir ruta</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-5">
            <label htmlFor="ciudad" className="form-label">
              Ciudad
            </label>
            <input
              value={values.ciudad}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="ciudad"
              placeholder="Ciudad"
              id="ciudad"
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="distancia" className="form-label">
              Distancia
            </label>
            <input
              type="text"
              className="form-control"
              name="distancia"
              placeholder="Distancia"
              value={values.distancia}
              onChange={handleChange}
              onBlur={handleBlur}
              id="distancia"
            />
          </div>

          <div className="form-group mt-5">
            <label htmlFor="nivel" className="form-label">
              Nivel
            </label>
            <select
              className="form-select"
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

          <div className="form-group mt-5">
            <label htmlFor="velocidad" className="form-label">
              Velocidad
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Velocidad"
              name="velocidad"
              value={values.velocidad}
              onChange={handleChange}
              onBlur={handleBlur}
              id="velocidad"
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="tipo" className="form-label">
              tipo de ruta
            </label>
            <select
              className="form-select"
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
          <div className="form-group mt-5">
            <label htmlFor="Nivel" className="form-label">
              Duración
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="duración aproximada"
              name="duracion"
              value={values.duracion}
              onChange={handleChange}
              onBlur={handleBlur}
              id="duracion"
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="fecha" className="form-label">
              Fecha
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="00/00/00"
              name="fecha"
              value={values.fecha}
              onChange={handleChange}
              onBlur={handleBlur}
              id="fecha"
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="url" className="form-label">
              URL
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Url Google maps"
              name="url"
              value={values.url}
              onChange={handleChange}
              onBlur={handleBlur}
              id="url"
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="detalles" className="form-label">
              Detalles
            </label>
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
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary mt-5">subir ruta</button>
          </div>
        </form>
        <pre>{JSON.stringify({values,errors})}</pre>
      </div>
    </>
  );
}
