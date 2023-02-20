import Formulario from "../../components/Formulario/Formulario";
import React from "react";
import ReactPlayer from "react-player";
import "./SubirRuta.css";

export default function SubirRuta() {
  return (
    <>
      <div className="imgFondoRuta">
        <div className="container text-center  ">
          <div className="row align-items-center">
            <div className="col-6 mt-5">
              <Formulario />
            </div>
            <div className="col-6">
              <ReactPlayer
                className="react-player "
                url="../../../videosubirruta.mp4"
                controls
                playing
                
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
