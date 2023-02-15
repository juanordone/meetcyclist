import "./Comentarios.css";
export default function Comentarios() {
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container bootdey">
        <div className="col-md-12 bootstrap snippets">
          <div className="panel">
            <div className="panel-body">
              <textarea
                className="form-control"
                rows="2"
                placeholder="Que quieres saber?"
              ></textarea>
              <div className="mar-top clearfix">
                <button
                  className="btn btn-sm btn-primary pull-right"
                  type="submit"
                >
                  <i className="fa fa-pencil fa-fw"></i> Publicar
                </button>
              </div>
            </div>
          </div>
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
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
