import { useFormik } from "formik";
import { FormularioEsquema } from "./FormularioEsquema";
import { initialValues } from "./utils/form";

export default function Formulario() {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resertForm();
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
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
            <label htmlFor="Distancia" className="form-label">
              Distancia
            </label>
            <input
              type="text"
              className="form-control"
              name="Distancia"
              placeholder="Distancia"
              value={values.distancia}
              onChange={handleChange}
              onBlur={handleBlur}
              id="distancia"
            />
          </div>

          <div className="form-group mt-5">
            <label htmlFor="Nivel" className="form-label">
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
            <label htmlFor="Nivel" className="form-label">
              Velocidad
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Velocidad"
              name="Velocidad"
              value={values.velocidad}
              onChange={handleChange}
              onBlur={handleBlur}
              id="velocidad"
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="Nivel" className="form-label">
              tipo de ruta
            </label>
            <select
              className="form-select"
              onChange={handleChange}
              onBlur={handleBlur}
              id="nivel"
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
            <label htmlFor="Fecha" className="form-label">
              Fecha
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="00/00/00"
              name="Fecha"
              value={values.fecha}
              onChange={handleChange}
              onBlur={handleBlur}
              id="fecha"
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="Url" className="form-label">
              URL
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Url Google maps"
              name="Url"
              value={values.url}
              onChange={handleChange}
              onBlur={handleBlur}
              id="url"
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="Detalles" className="form-label">
              Detalles
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Detalles"
              name="Detalles"
              value={values.detalles}
              onChange={handleChange}
              onBlur={handleBlur}
              id="detalles"
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary mt-5"disabled={isSubmitting} />
          </div>
        </form>
      </div>
    </>
  );
}
