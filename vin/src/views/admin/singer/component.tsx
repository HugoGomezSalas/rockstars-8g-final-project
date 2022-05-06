import {
  Box,
  Button,
  Paper,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import TableInfo from "../../../components/table/component";
import { singersSelector } from "../../../features/musicSlice";
import { fetchDeleteSinger, getSingers } from "../../../services/singer";
import { Formik } from "formik";
import { styles } from "./styles";
import {
  createSinger,
  initialValuesUpdate,
  initialValuesCreate,
  validationSchemaCreate,
  validationSchemaUpdate,
  updateSinger,
  UpdateSingerDTO,
} from "./form";

const AdminSinger = () => {
  const [editIndex, setEditIndex] = useState<number | undefined>(undefined);
  const dispatch = useDispatch();

  const singers = useAppSelector(singersSelector);

  useEffect(() => {
    dispatch(getSingers());
  }, [dispatch]);

  const passToUpdate = (values: UpdateSingerDTO) => {
    if (editIndex !== undefined)
      updateSinger(values, {
        id: singers[editIndex]._id,
        index: editIndex,
      });
  };

  return (
    <>
      <Typography variant="h2" sx={styles.title}>
        Administrador de cantantes.
      </Typography>{" "}
      <Box sx={styles.SingerContainer}>
        <TableInfo
          rowsPerPageOptions={[5, 10, 15]}
          data={singers}
          columnsNames={["Id", "Nombre artistico", "Imagen", "Acciones"]}
          title="Géneros"
          row={(item, index) => (
            <TableRow>
              <TableCell sx={styles.SingerId}>{item._id}</TableCell>
              <TableCell sx={styles.SingerField}>{item.stageName}</TableCell>
              <TableCell sx={styles.SingerField}>{item.stageName}</TableCell>
              <TableCell sx={styles.SingerActions}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(fetchDeleteSinger(item._id, index))}
                >
                  Eliminar
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => setEditIndex(index)}
                >
                  Editar
                </Button>
              </TableCell>
            </TableRow>
          )}
        />
        <Box sx={styles.formGroup}>
          <Box>
            <Typography variant="h5" sx={styles.title}>
              Crear un nuevo genero.
            </Typography>{" "}
            <Formik
              initialValues={initialValuesCreate}
              onSubmit={createSinger}
              validationSchema={validationSchemaCreate}
            >
              {({ handleSubmit, handleChange, values, errors }) => (
                <form onSubmit={handleSubmit}>
                  <Paper elevation={6} sx={styles.formContainer}>
                    <TextField
                      label="Nombre"
                      error={Boolean(errors.description)}
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      helperText={errors.description}
                    />
                    <Button
                      sx={styles.formButton}
                      variant="contained"
                      color="success"
                      type="submit"
                    >
                      Crear
                    </Button>
                  </Paper>
                </form>
              )}
            </Formik>
          </Box>
          {editIndex !== undefined && (
            <Box>
              <Typography variant="h5" sx={styles.title}>
                {`Editar el genero ${singers[editIndex].stageName}.`}
              </Typography>{" "}
              <Formik
                initialValues={initialValuesUpdate}
                onSubmit={passToUpdate}
                validationSchema={validationSchemaUpdate}
              >
                {({ handleSubmit, handleChange, values, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <Paper elevation={6} sx={styles.formContainer}>
                      <TextField
                        label="Nombre"
                        error={Boolean(errors.description)}
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        helperText={errors.description}
                      />
                      <Button
                        sx={styles.formButton}
                        variant="contained"
                        color="warning"
                        type="submit"
                      >
                        Editar
                      </Button>
                    </Paper>
                  </form>
                )}
              </Formik>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default AdminSinger;
