export default function BarraBuscador({rutaABuscar, setRutaABuscar}) {
    return(
        <input
        className="form-control mt-5 ms-5 border"
        style={{ width: "50rem" }}
        type="text"
        placeholder="Buscar "
        aria-label="Buscar"
        value={rutaABuscar}
        onChange={(e) => setRutaABuscar(e.target.value)}

        
        
      />
    )
}