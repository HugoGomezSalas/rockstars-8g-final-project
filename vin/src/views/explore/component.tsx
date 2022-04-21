import { Box, Typography } from "@mui/material";
import AlbumCard from "../../components/cards/album/component";
import SingerCard from "../../components/cards/singer/component";
import { Styles } from "../../theme/types";
import { getSingers } from "../../services/singer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

const Explore = () => {
  const dispatch = useDispatch();

  const singers = useAppSelector((state) => state.singers.singers);

  useEffect(() => {
    dispatch(getSingers());
  }, [dispatch]);

  console.log(singers);

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
          <AlbumCard
            image="https://www.criticaspolares.com/wp-content/uploads/2021/10/critica-music-of-the-spheres-coldplay-2021.fin_.jpg"
            songs={20}
            stock={100}
            title="Music of the Spheres"
          />
          <AlbumCard
            image="https://www.criticaspolares.com/wp-content/uploads/2021/10/critica-music-of-the-spheres-coldplay-2021.fin_.jpg"
            songs={20}
            stock={100}
            title="Music of the Spheres"
          />
          <AlbumCard
            image="https://www.criticaspolares.com/wp-content/uploads/2021/10/critica-music-of-the-spheres-coldplay-2021.fin_.jpg"
            songs={20}
            stock={100}
            title="Music of the Spheres"
          />
        </Box>
        <Box sx={styles.singersContainer}>
          <Typography variant="h6" sx={styles.subtitle}>
            Los artistas más escuchados.
          </Typography>
          <Box sx={styles.singerList}>
            {singers.map((singer) => (
              <SingerCard
                image="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/d/0/f/6/d0f69962abab3790a9bbf048c57bdf10.jpg"
                title={singer.name}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Explore;
