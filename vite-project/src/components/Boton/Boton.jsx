export default function Boton({ to, campo }) {
  return (
    <a href={`${to}`} type="button" className="btn btn-success ">
      {campo}
    </a>
  );
}
