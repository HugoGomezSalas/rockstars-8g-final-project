import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Styles } from "../../../theme/types";
import { SingerCardProps } from "./types";

const SingerCard: FC<SingerCardProps> = ({ image, title }) => {
  const styles: Styles = {
    container: {
      width: "250px",
      textAlign: "center",
    },
    imageContainer: {
      borderRadius: "50%",
      boxShadow:
        "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
      width: "250px",
      height: "250px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      marginBottom: "20px",
    },
    image: {
      height: "250px",
      width: "auto",
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "black",
    },
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.imageContainer}>
        <img style={styles.image} src={image} alt={`Singer-${title}`} />
      </Box>
      <Typography sx={styles.title}>{title}</Typography>
    </Box>
  );
};

export default SingerCard;
