import * as yup from "yup";

export const TarjetaEsquema = yup.object().shape({ imagen: yup.string() });
