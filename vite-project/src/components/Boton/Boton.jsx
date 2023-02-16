import "./Boton.css"

export default function Boton({ to, campo }) {
  return (
    <a href={`${to}`} type="button" className="btn  " id="botoninicio">
      {campo}
    </a>
  );
}
