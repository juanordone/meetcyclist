import "./FormularioUsuario.css";
import { useFormik } from "formik";
import { FormularioEsquemaUsuario } from "./FormularioEsquemaUsuario";
import { initialValues } from "./utils/formUsuario";
import { useAuthContext } from "../../AuthContext/AuthContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormularioUsuario() {
  const {authorization} = useAuthContext()
  const params = useParams()
  async function onSubmit(values, actions) {
    fetch(`http://localhost:3000/user/${authorization.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values,authorization)
    }).then((response)=> {
      console.log(values);
      if(response.status === 400){
        alert("Error al recibir el body");
      }else if(response.status === 200){
        Swal.fire({
          position: "center",
          title: "Actualizado correctamente",
          confirmButtonColor: "rgb(251, 82, 0)",
        });
      }else if (response.status === 409){
        alert("");
      }
    });
    console.log(values);
    console.log(actions);
    actions.resetForm();
  }

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: FormularioEsquemaUsuario,
    onSubmit,
  });
  return (
    <>
     <div className="mt-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="small mb-1" htmlFor="apodo">
                Apodo (Cómo aparecerá su nombre para otros usuarios en el sitio)
              </label>
              <input
                value={values.apodo}
                onChange={handleChange}
                onBlur={handleBlur}
                name="apodo"
                className="form-control"
                id="apodo"
                type="text"
                placeholder="Apodo"
              />
            </div>

            <div className="row gx-3 mb-3">
              <div className="col-md-6">
                <label className="small mb-1" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="nombre"
                  className="form-control"
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                />
              </div>

              <div className="col-md-6">
                <label className="small mb-1" htmlFor="apellidos">
                  Apellidos
                </label>
                <input
                  value={values.apellidos}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="apellidos"
                  className="form-control"
                  id="apellidos"
                  type="text"
                  placeholder="Apellidos"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="small mb-1" htmlFor="email">
                Email
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                className="form-control"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <button className="botonperfilformulario" type="submit">
              Guardar cambios
            </button>
          </form>
          </div>
        
    </>
  );
}
