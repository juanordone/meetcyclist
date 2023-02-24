import { Formik, useFormik } from "formik";
import { TarjetaEsquema } from "./TarjetaEsquema";
import Swal from "sweetalert2";

import "./TarjetaPerfilUsuario.css";

export default function TarjetaPerfilUsuario({ detallesUsuario }) {
  async function onSubmit(values, actions) {
    let formdata = new FormData();
    formdata.append("file", values.imagen);
    console.log(values.imagen);
    fetch(`http://localhost:3000/user/imagen/${detallesUsuario.id}`, {
      method: "POST",
      body: formdata,
    }).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "center",
          title: "Imagen subida correctamente",
          confirmButtonColor: "rgb(251, 82, 0)",
        });
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
    setFieldValue,
  } = useFormik({
    initialValues: { imagen: "" },
    validationSchema: TarjetaEsquema,
    onSubmit,
  });
  return (
    <>
      <div className="card mb-4  mt-5">
        <div className="card-header">Perfil de {detallesUsuario.apodo}</div>
        <div className="card-body text-center">
          <img
            className="img-account-profile rounded-circle mb-2"
            src={`http://localhost:3000/${detallesUsuario.imagen}`}
            alt="avatar"
          />

          <div className="small font-italic text-muted mb-4 ">
            JPG o PNG no mas de 5MB
          </div>
          <div className=" ">
            <form onSubmit={handleSubmit}>
              <div className="file-select">
                <input
                  className=""
                  onChange={(e) => setFieldValue("imagen", e.target.files[0])}
                  onBlur={handleBlur}
                  name="imagen"
                  id="imagen"
                  value={undefined}
                  type="file"
                />
              </div>
              <div className="">
                <button className="mt-3 botonPerfil" type="submit">
                  Subir imagen
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h6 className="ps-3"> Nombre: {detallesUsuario.nombre} </h6>
          <h6 className="ps-3">Apellidos: {detallesUsuario.apellidos}</h6>
          <h6 className="ps-3">Email: {detallesUsuario.email}</h6>
        </div>
      </div>
    </>
  );
}
