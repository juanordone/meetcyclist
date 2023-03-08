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
            <div className="col-md-6 mt-5 mb-5 mb-md-0">
              <Formulario />
            </div>
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9">
              <ReactPlayer
                className=" embed-responsive-item ReactPlayer"
                url="../../../videosubirruta2.mp4"
                controls
                playing
                
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
