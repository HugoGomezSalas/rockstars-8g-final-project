import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { tokenSelector } from "../../features/authSlice";
import { Styles } from "../../theme/types";
import { initialValues, loginUser, validationSchema } from "./form";

const Login = () => {
  const navigate = useNavigate();
  const token = useAppSelector(tokenSelector);

  useEffect(() => {
    if (token !== undefined) navigate("/");
  }, [navigate, token]);

  const styles: Styles = {
    loginContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    loginForm: {
      display: "flex",
      flexDirection: "column",
      width: "500px",
      height: "500px",
      padding: "20px",
      textAlign: "center",
    },
    title: {
      margin: "20px",
      fontFamily: "'Cedarville Cursive', cursive",
      fontWeight: "bold",
    },
    inputsContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      margin: "20px",
      flex: 1,
    },
  };

  return (
    <Box sx={styles.loginContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={loginUser}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, values }) => (
          <form onSubmit={handleSubmit}>
            <Paper sx={styles.loginForm} elevation={6}>
              <Typography sx={styles.title} variant="h3">
                Rockstify
              </Typography>
              <Box sx={styles.inputsContainer}>
                <TextField
                  error={Boolean(errors.email)}
                  onChange={handleChange}
                  label="Email"
                  name="email"
                  type="email"
                  helperText={errors.email}
                />
                <TextField
                  error={Boolean(errors.password)}
                  onChange={handleChange}
                  label="Password"
                  name="password"
                  type="password"
                  helperText={errors.password}
                />
                <Box>
                  <Button variant="contained" color="success" type="submit">
                    Iniciar sesión
                  </Button>
                </Box>
              </Box>
            </Paper>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
