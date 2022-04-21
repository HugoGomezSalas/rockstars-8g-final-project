import "./App.css";
import Menu from "./components/menu/menu";
import { Routes, Route } from "react-router-dom";
import Explore from "./views/explore/component";
import Albums from "./views/albums/component";
import Songs from "./views/songs/component";
import { Styles } from "./theme/types";
import { Box } from "@mui/system";
import AdminSong from "./views/admin/song/component";
import AdminAlbum from "./views/admin/album/component";
import AdminSinger from "./views/admin/singer/component";
import AdminGenre from "./views/admin/genre/component";

const App = () => {
  const styles: Styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "40px",
      overflow: "hidden",
    },
  };

  return (
    <>
      <Menu />
      <Box sx={styles.container}>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/admin/albums" element={<AdminAlbum />} />
          <Route path="/admin/songs" element={<AdminSong />} />
          <Route path="/admin/singers" element={<AdminSinger />} />
          <Route path="/admin/genres" element={<AdminGenre />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
