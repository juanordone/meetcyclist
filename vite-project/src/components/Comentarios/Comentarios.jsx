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
        </div>
      </div>
    </>
  );
}
