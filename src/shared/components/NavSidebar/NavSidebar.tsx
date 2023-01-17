import {
  MenuList,
  MenuItem,
  Card,
  Typography,
  SvgIconProps,
  Box,
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
          sx={{ color: theme.color, fontSize: "18px", m: "0 7px 1px 0" }}
        />
      ),
    },
    {
      name: "Chats",
      icon: (
        <MailRounded
          sx={{ color: theme.color, fontSize: "18px", m: "0 7px 1px 0" }}
        />
      ),
    },
    {
      name: "Bookmarks",
      icon: (
        <BookmarkRounded
          sx={{ color: theme.color, fontSize: "16px", m: "0 9px 1px 0" }}
        />
      ),
    },
    {
      name: "Questions",
      icon: (
        <LiveHelpRounded
          sx={{ color: theme.color, fontSize: "14px", m: "0 11px 1px 0" }}
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
        borderRadius: "0px",
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
                pl: "20%",
                minHeight: "30px",
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <>{icon}</>
                <Typography sx={{ color: theme.color, display: "flex" }}>
                  {name}
                </Typography>
              </Box>
            </MenuItem>
          );
        })}
      </MenuList>
    </Card>
  );
};

export default NavSidebar;
