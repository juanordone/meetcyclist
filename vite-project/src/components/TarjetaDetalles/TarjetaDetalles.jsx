export default function TarjetaDetalles() {
  return (
    <>
      <div>
        <div className="d-flex align-items-center mb-5 mt-5 p-5">
          <div className="flex-shrink-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d204158.12857657607!2d-4.706666426846275!3d36.91496352554677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0xd7259c44fdb212d%3A0x6025dc92c9ca32cf!2zTcOhbGFnYQ!3m2!1d36.721261!2d-4.4212655!4m5!1s0xd729eca7cdc7d77%3A0x10e9a52ea33722!2s29532%20Mollina%2C%20M%C3%A1laga!3m2!1d37.1248364!2d-4.657596799999999!5e0!3m2!1ses!2ses!4v1676202860486!5m2!1ses!2ses"
              width="800"
              height="550"
              
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex-grow-1 ms-3">
            <p className="fs-1 fw-bold text-center"></p>
            <p className="fs-3 text-center">
             
            </p>
            <p className="fs-1 fw-bold "></p>
            <div className="d-grid gap-2 p-3">
              <a className="btn btn-primary btn-lg">Unirse a ruta</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
