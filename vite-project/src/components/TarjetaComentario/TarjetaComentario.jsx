export default function TarjertaComentario({ Comentarios, apodo, imagen }) {
  return (
    <>
      <div className="panel container">
        <div className="panel-body">
          <div className="media-block">
            <a className="media-left">
              <img
                className="img-circle img-sm"
                alt="Profile Picture"
                src={`http://localhost:3000/${imagen}`}
              />
            </a>
            <div className="media-body">
              <div className="mar-btm ms-2">
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
