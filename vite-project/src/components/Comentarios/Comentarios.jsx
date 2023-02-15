import "./Comentarios.css";
export default function Comentarios() {
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="container bootdey">
        <div class="col-md-12 bootstrap snippets">
          <div class="panel">
            <div class="panel-body">
              <textarea
                class="form-control"
                rows="2"
                placeholder="Que quieres saber?"
              ></textarea>
              <div class="mar-top clearfix">
                <button class="btn btn-sm btn-primary pull-right" type="submit">
                  <i class="fa fa-pencil fa-fw"></i> Share
                </button>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-body">
              <div class="media-block">
                <a class="media-left">
                  <img
                    class="img-circle img-sm"
                    alt="Profile Picture"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </a>
                <div class="media-body">
                  <div class="mar-btm">
                    <a
                      href="#"
                      class="btn-link text-semibold media-heading box-inline"
                    >
                      Lisa D.
                    </a>
                    <p class="text-muted text-sm"> 11 min ago</p>
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
