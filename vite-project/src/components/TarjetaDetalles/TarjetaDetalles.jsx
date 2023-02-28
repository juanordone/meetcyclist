import "./TarjetaDetalle.css";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../AuthContext/AuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function TarjetaDetalles({ detallesRuta }) {
  const { id } = useParams();
  const { authorization } = useAuthContext();
  const [grupeta, setGrupeta] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/rutas/grupeta/${id}`
        );
        const data = await response.json();
        setGrupeta(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function unirseRuta() {
    fetch(
      `http://localhost:3000/user/addUserRuta/${detallesRuta.id}/${authorization.id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    ).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "center",
          title: "Te has unido a la ruta, a pedalear",
          confirmButtonColor: "rgb(251, 82, 0)",
        });
      } else if (response.status === 409) {
        alert("ya estas en la ruta");
      }
    });
  }

  function borrarseRuta() {
    fetch(`http://localhost:3000/user/${detallesRuta.id}/${authorization.id}`,{
      method: "DELETE",
      headers:{"content-type": "application/json"},
      body: JSON.stringify()
    }
    ).then((response) => {
      console.log(response.status);
      if (response.status === 400) {
        alert("error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "center",
          title: "Te has borrado de la grupeta correctamente",
          confirmButtonColor: "rgb(251, 82, 0)",
        });
      } else if (response.status === 409) {
        alert("ya estas en la ruta");
      }
    });
  }
  return (
    <>
      <div className="container-fluid" key={detallesRuta.id}>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12 ">
            <div
              className="card-img-top d-flex justify-content-center"
              dangerouslySetInnerHTML={{ __html: `${detallesRuta.url}` }}
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mt-5 text-center">
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr className="">
                    <th className="fs-1 fw-bold ciudad border-0">
                      <i className="bi bi-geo-alt"></i> {detallesRuta.ciudad}
                    </th>
                  </tr>
                  <tr>
                    <td className="fs-3 fw-bold text-start text-truncate">
                      <p>
                        Distancia{" "}
                        <i className="bi bi-bicycle ciudad d-inline-block w-auto"></i>{" "}
                        :
                      </p>
                      <p>
                        Fecha{" "}
                        <i className="bi bi-calendar3 ciudad d-inline-block w-auto"></i>{" "}
                        :
                      </p>
                      <p>
                        Nivel de la ruta{" "}
                        <i className="bi bi-reception-3 ciudad d-inline-block w-auto"></i>{" "}
                        :
                      </p>
                      <p>
                        Velocidad media{" "}
                        <i className="bi bi-fast-forward-btn ciudad d-inline-block w-auto"></i>{" "}
                        :
                      </p>
                      <p>
                        Tipo de ruta{" "}
                        <i className="bi bi-repeat ciudad d-inline-block w-auto"></i>{" "}
                        :
                      </p>
                      <p>
                        Duración aprox.{" "}
                        <i className="bi bi-clock ciudad d-inline-block w-auto"></i>{" "}
                        :
                      </p>
                      <p>
                        Detalles{" "}
                        <i className="bi bi-chat-left-dots ciudad d-inline-block w-auto"></i>{" "}
                        :
                      </p>
                    </td>
                    <td className="fs-3 text-end text-truncate">
                      <p>{detallesRuta.distancia}</p>
                      <p>{detallesRuta.fecha}</p>
                      <p>{detallesRuta.nivel}</p>
                      <p>{detallesRuta.velocidad}</p>
                      <p>{detallesRuta.tipo}</p>
                      <p>{detallesRuta.duracion}</p>
                      <p>{detallesRuta.detalles}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-grid gap-2 p-3">
                <button
                  type="button"
                  className="botonunir"
                  onClick={unirseRuta}
                >
                  Unirse a ruta
                </button>
                <button type="button" className="botonunir mt-4" onClick={borrarseRuta}>
                  Salir de la ruta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 text-center">
        <h3>Grupeta</h3>
        <div className="d-flex justify-content-center gap-5">
          {grupeta.map((participantes, index) => (
            <div className="" key={index}>
              <p className="">{participantes.apodo}</p>
              <img
                className="img-circle img-sm rounded-circle"
                alt="Profile Picture"
                src={`http://localhost:3000/${participantes.imagen}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
