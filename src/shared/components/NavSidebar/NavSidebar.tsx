import {
  Box,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  MenuList,
  MenuItem,
  Card,
  Typography,
} from "@mui/material";
import { Mail, RssFeed, Bookmark, LiveHelp } from "@mui/icons-material";

type menuItem = {
  name: string;
  icon: any;
};

const NavSidebar = () => {
  const menuItems: menuItem[] = [
    { name: "Feed", icon: <RssFeed /> },
    { name: "Chats", icon: <Mail /> },
    { name: "Bookmarks", icon: <Bookmark /> },
    { name: "Questions", icon: <LiveHelp /> },
  ];
  return (
    <Card
      sx={{
        width: "98%",
        height: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <MenuList
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "red",
        }}
      >
        {menuItems.map(({ icon, name }, index) => {
          return (
            <MenuItem
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                my: 1,
              }}
            >
              {icon}
              <Typography sx={{ ml: "10px" }}>{name}</Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Card>
  );
};

export default NavSidebar;
