import * as Yup from "yup";
import { store } from "../../app/store";
import { fetchLogin } from "../../services/user";
import { sha512 } from "js-sha512";

export interface LoginDTO {
  password: string;
  email: string;
}

export const validationSchema: Yup.SchemaOf<LoginDTO> = Yup.object({
  email: Yup.string()
    .required("El email del usuario es requerido")
    .email("El email tiene un formato invalido"),
  password: Yup.string().required("La contraseña es requerida"),
});

export const initialValues: LoginDTO = {
  email: "",
  password: "",
};

export const loginUser = (values: LoginDTO) => {
  const user: LoginDTO = {
    email: values.email,
    password: sha512(values.password),
  };
  store.dispatch(fetchLogin(user));
};
