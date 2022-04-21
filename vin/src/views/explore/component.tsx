import { Box, Typography } from "@mui/material";
import AlbumCard from "../../components/cards/album/component";
import SingerCard from "../../components/cards/singer/component";
import { Styles } from "../../theme/types";
import { getSingers } from "../../services/singer";
import { getAlbums } from "../../services/album";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { albumsSelector, singersSelector } from "../../features/musicSlice";

const Explore = () => {
  const dispatch = useDispatch();

  const singers = useAppSelector(singersSelector);
  const albums = useAppSelector(albumsSelector);

  useEffect(() => {
    dispatch(getSingers());
    dispatch(getAlbums());
  }, [dispatch]);

  const styles: Styles = {
    title: {
      fontWeight: "Bold",
      width: "500px",
      padding: "20px 0",
    },
    subtitle: {
      fontWeight: "600",
      padding: "10px 0",
      color: "gray",
    },
    albumsContainer: {
      width: "100%",
    },
    albumsList: {
      width: "100%",
      display: "flex",
      overflowX: "auto",
      gap: "60px",
      paddingBottom: "20px",
    },
    singerContainer: {
      width: "100%",
    },
    singerList: {
      width: "100%",
      display: "flex",
      overflowX: "auto",
      gap: "60px",
      paddingBottom: "20px",
    },
  };

  return (
    <>
      <Typography variant="h2" sx={styles.title}>
        Escucha a tus artistas favoritos en el mejor lugar.
      </Typography>
      <Box sx={styles.albumsContainer}>
        <Typography variant="h6" sx={styles.subtitle}>
          Últimos álbumes.
        </Typography>
        <Box sx={styles.albumsList}>
          {albums.map((album) => (
            <AlbumCard
              {...album}
              key={`album-${album._id}`}
              songs={album.songs.length}
            />
          ))}
        </Box>
        <Box sx={styles.singersContainer}>
          <Typography variant="h6" sx={styles.subtitle}>
            Los artistas más escuchados.
          </Typography>
          <Box sx={styles.singerList}>
            {singers.map((singer) => (
              <SingerCard {...singer} key={`singer-${singer._id}`} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Explore;
