import Formulario from "../../components/Formulario/Formulario";
import Navbar from "../../components/Navbar/Navbar";
import {useState} from "react"

export default function SubirRuta() {
//   const [nuevaRuta, setNuevaRuta] = useState({
//     ciudad: "",
//     distancia: "",
//     nivel: "",
//     velocidad: "",
//     tipo: "",
//     duracion: "",
//     fecha: "",
//     url: "",
//     detalles: "",
//   });

//   function handleInput(e) {
//     const nuevoRegistro = {
//       ...nuevaRuta,
//       [e.target.name]: e.target.value,
//     };
//     setNuevaRuta(nuevoRegistro);
//   }
//   function SubirRuta(e) {
//     e.preventDefault();
//     fetch("http://localhost:3000/rutas/addRutas", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(nuevaRuta),
//     }).then((response) => {
//       console.log(response.status);
//       if (response.status === 400) {
//         alert("error al recibir el body");
//       } else if (response.status === 200) {
//         alert(`usuario ${nuevaRuta.ciudad} registrado correctamente`);
//       } else if (response.status === 409) {
//         alert("usuario ya registrado");
//       }
//     });
//     setNuevaRuta({ ciudad: "",
//     distancia: "",
//     nivel: "",
//     velocidad: "",
//     tipo: "",
//     duracion: "",
//     fecha: "",
//     url: "",
//     detalles: "",});
//   }


  return (
    <>
      <Navbar />
      <Formulario />
    </>
  );
}
