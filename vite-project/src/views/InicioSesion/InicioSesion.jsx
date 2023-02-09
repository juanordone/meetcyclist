import Login from "../../components/Login/Login";
import Registro from "../../components/Registro/Registro";
import "./InicioSesion.css"
export default function InicioSesion(){
    return(
        <>
        <div className="imgFondoLogin">
        <Login/>
        <Registro/>
        </div>
        </>
        
    )
}