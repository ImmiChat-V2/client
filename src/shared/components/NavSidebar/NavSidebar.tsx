import { MenuList, MenuItem, Card, Typography } from "@mui/material";
import { Mail, RssFeed, Bookmark, LiveHelp } from "@mui/icons-material";

type menuItem = {
  name: string;
  icon: any;
};

type NavSidebarProps = {
  theme: any;
};

const NavSidebar = ({ theme }: NavSidebarProps) => {
  const menuItems: menuItem[] = [
    { name: "Feed", icon: <RssFeed sx={{ color: theme.color }} /> },
    { name: "Chats", icon: <Mail sx={{ color: theme.color }} /> },
    { name: "Bookmarks", icon: <Bookmark sx={{ color: theme.color }} /> },
    { name: "Questions", icon: <LiveHelp sx={{ color: theme.color }} /> },
  ];
  return (
    <Card
      sx={{
        bgcolor: theme.backgroundColor,
        width: "98%",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <MenuList
        sx={{
          width: "100%",
          flexDirection: "column",
        }}
      >
        {menuItems.map(({ icon, name }, index) => {
          return (
            <MenuItem
              key={index}
              sx={{
                width: "100%",
                justifyContent: "center",
                py: 1,
                minHeight: "30px",
              }}
            >
              {icon}
              <Typography sx={{ ml: "10px", color: theme.color }}>
                {name}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Card>
  );
};

export default NavSidebar;
