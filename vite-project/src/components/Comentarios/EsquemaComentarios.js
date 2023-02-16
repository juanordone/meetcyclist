import * as yup from "yup"

export const EsquemaComentarios = yup.object().shape({
    comentario: yup.string(),
})