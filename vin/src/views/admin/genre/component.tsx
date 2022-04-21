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
import { genresSelector } from "../../../features/musicSlice";
import { fetchDeleteGenre, getGenres } from "../../../services/genre";
import { Formik } from "formik";
import { styles } from "./styles";
import {
  createGenre,
  initialValuesUpdate,
  initialValuesCreate,
  validationSchemaCreate,
  validationSchemaUpdate,
  updateGenre,
  UpdateGenreDTO,
} from "./form";

const AdminGenre = () => {
  const [editIndex, setEditIndex] = useState<number | undefined>(undefined);
  const dispatch = useDispatch();

  const genres = useAppSelector(genresSelector);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const passToUpdate = (values: UpdateGenreDTO) => {
    if (editIndex !== undefined)
      updateGenre(values, {
        id: genres[editIndex]._id,
        index: editIndex,
      });
  };

  return (
    <>
      <Typography variant="h2" sx={styles.title}>
        Administrador de géneros.
      </Typography>{" "}
      <Box sx={styles.genreContainer}>
        <TableInfo
          rowsPerPageOptions={[5, 10, 15]}
          data={genres}
          columnsNames={["Id", "Nombre", "Acciones"]}
          title="Géneros"
          row={(item, index) => (
            <TableRow>
              <TableCell sx={styles.genreId}>{item._id}</TableCell>
              <TableCell sx={styles.genreField}>{item.description}</TableCell>
              <TableCell sx={styles.genreActions}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => dispatch(fetchDeleteGenre(item._id, index))}
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
              onSubmit={createGenre}
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
                {`Editar el genero ${genres[editIndex].description}.`}
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

export default AdminGenre;
