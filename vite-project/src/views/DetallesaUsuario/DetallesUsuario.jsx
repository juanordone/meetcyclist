import FormularioUsuario from "../../components/FormularioUsuario/FormularioUsuario";
import Navbar from "../../components/Navbar/Navbar";
import Tarjeta from "../../components/Tarjeta/Tarjeta";
import TarjetaPerfilUsuario from "../../components/TarjetaPerfilUsuario/TarjetaPerfilUsuario";

export default function DetallesUsuario() {
  return (
    <>
      <Navbar />

      <div className="container-xl px-4 mt-4">
        <TarjetaPerfilUsuario />

        <FormularioUsuario />
      </div>
      <div className="mt-5 ms-5">
      <Tarjeta/>
      </div>
    </>
  );
}
