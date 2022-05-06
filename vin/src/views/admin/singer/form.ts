import * as Yup from "yup";
import { store } from "../../../app/store";
import { fetchAddSinger, fetchUpdateSinger } from "../../../services/singer";

export interface CreateSingerDTO {
  description: string;
}
export interface UpdateSingerDTO {
  description: string;
}

export interface SingerPosition {
  id: string;
  index: number;
}

export const validationSchemaCreate: Yup.SchemaOf<CreateSingerDTO> = Yup.object(
  {
    description: Yup.string()
      .min(3, "Tienes que escribir al menos 3 caracteres")
      .max(10, "Tienes que escribir menos de 10 caracteres")
      .required("El nombre del genero es requerido"),
  }
);

export const validationSchemaUpdate: Yup.SchemaOf<UpdateSingerDTO> = Yup.object(
  {
    description: Yup.string()
      .min(3, "Tienes que escribir al menos 3 caracteres")
      .max(10, "Tienes que escribir menos de 10 caracteres")
      .required("El nombre del genero a actualizar es requerido"),
  }
);

export const initialValuesCreate: CreateSingerDTO = {
  description: "",
};
export const initialValuesUpdate: UpdateSingerDTO = {
  description: "",
};

export const createSinger = (values: CreateSingerDTO) => {
  store.dispatch(fetchAddSinger(values));
};

export const updateSinger = (
  values: UpdateSingerDTO,
  SingerPosition: SingerPosition
) => {
  store.dispatch(fetchUpdateSinger(values, SingerPosition));
};
