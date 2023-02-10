import * as yup from "yup";

export const FormularioEsquema = yup.object().shape({
  ciudad: yup.string().required("Obligatorio"),
  distancia: yup.string().required("Obligatorio"),
  nivel: yup
    .string()
    .oneOf(["Facil", "Media", "Dificil"], "nivel no valido")
    .required("Obligatorio"),
  velocidad: yup.string().required("Obligatorio"),
  tipo: yup
    .string()
    .oneOf(["Solo ida", "Ida y vuelta", "Circular"], "tipo no valido")
    .required("Obligatorio"),
  duracion: yup.string().required("Obligatorio"),
  fecha: yup.date().required("Obligatorio"),
  url: yup.string().required("Obligatorio"),
  detalles: yup.string(),
});
