export default function TarjertaComentario() {
  return (
    <>
      <div className="panel">
        <div className="panel-body">
          <div className="media-block">
            <a className="media-left">
              <img
                className="img-circle img-sm"
                alt="Profile Picture"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
              />
            </a>
            <div className="media-body">
              <div className="mar-btm">
                <a
                  href="#"
                  className="btn-link text-semibold media-heading box-inline"
                >
                  Lisa D.
                </a>
                <p className="text-muted text-sm"> 11 min ago</p>
              </div>
            </div>
            <p>me encanta esta ruta</p>
          </div>
        </div>
      </div>
    </>
  );
}
