import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AlbumIcon from "@mui/icons-material/Album";
import { NavButton } from "./types";
import MenuIcon from "@mui/icons-material/AutoAwesomeMosaic";
import { useMemo } from "react";
import { Styles } from "../../theme/types";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const Buttons: NavButton[] = useMemo(
    () => [
      {
        text: "Explore",
        icon: <MenuIcon />,
        onClick: () => navigate("/"),
      },
      {
        text: "Songs",
        icon: <MusicNoteIcon />,
        onClick: () => navigate("/songs"),
      },
      {
        text: "Albums",
        icon: <AlbumIcon />,
        onClick: () => navigate("/albums"),
      },
    ],
    [navigate]
  );

  const styles: Styles = useMemo(
    () => ({
      drawerContainer: {
        width: "200px",
      },
      drawerItem: {
        width: "200px",
      },
    }),
    []
  );

  return (
    <Drawer anchor="left" variant="permanent" sx={styles.drawerContainer}>
      <List>
        {Buttons.map((button, index) => (
          <ListItem
            button
            key={`NavButton-${button.text}-${index}`}
            onClick={button.onClick}
            sx={styles.drawerItem}
          >
            <ListItemIcon>{button.icon}</ListItemIcon>
            <ListItemText primary={button.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
