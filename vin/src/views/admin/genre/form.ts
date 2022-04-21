import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { store } from "../../../app/store";
import { fetchAddGenre, fetchUpdateGenre } from "../../../services/genre";

export interface CreateGenreDTO {
  description: string;
}
export interface UpdateGenreDTO {
  description: string;
}

export interface GenrePosition {
  id: string;
  index: number;
}

export const validationSchemaCreate: Yup.SchemaOf<CreateGenreDTO> = Yup.object({
  description: Yup.string()
    .min(3, "Tienes que escribir al menos 3 caracteres")
    .max(10, "Tienes que escribir menos de 10 caracteres")
    .required("El nombre del genero es requerido"),
});

export const validationSchemaUpdate: Yup.SchemaOf<UpdateGenreDTO> = Yup.object({
  description: Yup.string()
    .min(3, "Tienes que escribir al menos 3 caracteres")
    .max(10, "Tienes que escribir menos de 10 caracteres")
    .required("El nombre del genero a actualizar es requerido"),
});

export const initialValuesCreate: CreateGenreDTO = {
  description: "",
};
export const initialValuesUpdate: UpdateGenreDTO = {
  description: "",
};

export const createGenre = (
  values: CreateGenreDTO,
  formikHelpers: FormikHelpers<CreateGenreDTO>
) => {
  store.dispatch(fetchAddGenre(values));
};

export const updateGenre = (
  values: UpdateGenreDTO,
  genrePosition: GenrePosition
) => {
  store.dispatch(fetchUpdateGenre(values, genrePosition));
};
