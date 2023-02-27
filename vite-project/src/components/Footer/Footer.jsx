import "./Footer.css"

export default function Footer() {
  return (
    <>
      <footer className="text-center  ">
        <div className="container pt-4">
          <h3 className="subeRuta">Meet Cyclist</h3>
          <div className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
            >
              <i className="bi bi-facebook-f"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
            >
              <i className="bi bi-twitter"></i>
            </a>

           

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
            >
              <i className="bi bi-instagram"></i>
            </a>

          

            <a className="btn   btn-lg  m-1" href="#!">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div className="text-center text-dark p-3">
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MeetCyclist
          </a>
        </div>
      </footer>
    </>
  );
}
