import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormularioUsuario from "../../components/FormularioUsuario/FormularioUsuario";
import Navbar from "../../components/Navbar/Navbar";
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import TarjetaPerfilUsuario from "../../components/TarjetaPerfilUsuario/TarjetaPerfilUsuario";

export default function DetallesUsuario() {
const {id} = useParams();
const [detallesUsuario,setDetallesUsuario] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch (`http://localhost:3000/user/user/${id}`);
      const data = await response.json();
      setDetallesUsuario(data);
    }catch(error){
      console.log(error);
    }
  };
  fetchData()
},[])

  return (
    <>
      <Navbar />

      <div className="container-xl px-4 mt-4">
        <TarjetaPerfilUsuario detallesUsuario={detallesUsuario}/>

        <FormularioUsuario />
      </div>
      <div className="mt-5 ms-5">
      <Tarjeta/>
      </div>
    </>
  );
}
