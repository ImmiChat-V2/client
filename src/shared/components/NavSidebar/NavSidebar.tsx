import {
  MenuList,
  MenuItem,
  Card,
  Typography,
  SvgIconProps,
} from "@mui/material";
import {
  RssFeedRounded,
  MailRounded,
  LiveHelpRounded,
  BookmarkRounded,
} from "@mui/icons-material";

type menuItem = {
  name: string;
  icon: SvgIconProps;
};

type NavSidebarProps = {
  theme: any;
};

const NavSidebar = ({ theme }: NavSidebarProps) => {
  const menuItems: menuItem[] = [
    {
      name: "Feed",
      icon: (
        <RssFeedRounded
          sx={{ color: theme.color, fontSize: "18px", mb: "1px" }}
        />
      ),
    },
    {
      name: "Chats",
      icon: (
        <MailRounded sx={{ color: theme.color, fontSize: "18px", mb: "0px" }} />
      ),
    },
    {
      name: "Bookmarks",
      icon: (
        <BookmarkRounded
          sx={{ color: theme.color, fontSize: "16px", mb: "1px" }}
        />
      ),
    },
    {
      name: "Questions",
      icon: (
        <LiveHelpRounded
          sx={{ color: theme.color, fontSize: "14px", mb: "1px" }}
        />
      ),
    },
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
              <>{icon}</>
              <Typography
                sx={{ ml: "10px", color: theme.color, display: "flex" }}
              >
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
