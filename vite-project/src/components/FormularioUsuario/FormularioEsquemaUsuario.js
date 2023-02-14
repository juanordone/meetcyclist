import * as yup from "yup"

export const FormularioEsquemaUsuario = yup.object().shape({
    apodo: yup.string(),
    nombre: yup.string(),
    apellidos: yup.string(),
    email: yup.string,

})