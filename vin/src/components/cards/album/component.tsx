import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { Styles } from "../../../theme/types";
import { AlbumCardProps } from "./types";

const AlbumCard: FC<AlbumCardProps> = ({ image, songs, stock, title }) => {
  const styles: Styles = {
    container: {
      width: "300px",
    },
    image: {
      width: "300px",
      height: "300px",
      borderRadius: "10px",
      boxShadow:
        "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "black",
    },
    bottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "50px",
    },
    info: {
      fontSize: "0.8rem",
      fontWeight: "600",
      color: "gray",
    },
  };

  return (
    <Box sx={styles.container}>
      <img style={styles.image} src={image} alt={`album-${title}`} />
      <Typography sx={styles.title}>{title}</Typography>
      <Box sx={styles.bottom}>
        <Typography sx={styles.info}>{`${songs} Songs`}</Typography>
        <Typography sx={styles.info}>{`Stock (${stock})`}</Typography>
      </Box>
    </Box>
  );
};

export default AlbumCard;
