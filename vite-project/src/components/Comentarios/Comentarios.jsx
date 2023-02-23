import "./Comentarios.css";
import { useFormik } from "formik";
import { useAuthContext } from "../../AuthContext/AuthContext";
import { EsquemaComentarios } from "./EsquemaComentarios";
import { useParams } from "react-router-dom";

export default function Comentarios() {
  const {id} = useParams()
  const {authorization} = useAuthContext()
  async function onSubmit(values,actions) {
    fetch(`http://localhost:3000/comentario/addcomentario/${id}/${authorization.id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify( values ),
    }).then((response)=> {
      console.log(values);
      if(response.status === 400){
        alert("Error al recibir el body");
      }else if(response.status === 200){
        alert(`comentario ${values.comentario} registrado correctamente`)
      }else if (response.status === 409){
        alert("");
      }
    });
    console.log(values);
    console.log(actions);
    actions.resetForm();
 
  };
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: { comentario: "" },
    validationSchema: EsquemaComentarios,
    onSubmit,})


  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <form onSubmit={handleSubmit}>
        <div className="container bootdey mt-5">
          <div className="col-md-12 bootstrap snippets">
            <div className="panel">
              <div className="panel-body">
                <textarea
                  type="text"
                  id="comentario"
                  name="comentario"
                  value={values.comentario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form-control"
                  rows="2"
                  placeholder="Para mas información sobre la ruta escribe aquí  y el creador te respondera lo mas rapido posible . . ."
                ></textarea>
                <div className="mar-top clearfix">
                  <button
                    className="btn btn-sm btn-primary border pull-right"
                    type="submit"
                  >
                    <i className="fa fa-pencil fa-fw"></i> Publicar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );

}
