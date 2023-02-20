export default function BarraBuscador({rutaABuscar, setRutaABuscar}) {
    return(
        <input
        className="form-control mt-5 ms-5 "
        style={{ width: "50rem" }}
        type="text"
        placeholder="Buscar ruta "
        aria-label="Buscar"
        value={rutaABuscar}
        onChange={(e) => setRutaABuscar(e.target.value)}

        
        
      />
    )
}