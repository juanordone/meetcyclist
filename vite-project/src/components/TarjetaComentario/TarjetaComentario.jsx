export default function TarjertaComentario({ Comentarios, apodo }) {
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
                <h5>{apodo}</h5>
                <p className="text-muted text-sm"> 11 min ago</p>
              </div>
            </div>
            <p>{Comentarios}</p>
          </div>
        </div>
      </div>
    </>
  );
}
