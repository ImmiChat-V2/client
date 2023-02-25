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
import UserProfileHoverCard from "../UserProfileHoverCard/UserProfileHoverCard";
import UserProfileWidget from "../UserProfileWidget";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import useTheme from "features/theme/useTheme";

type menuItem = {
  name: string;
  icon: SvgIconProps;
};

const NavSidebar = () => {
  const {
    themeColor: { navButtons, backgroundColor, color },
  } = useTheme();
  const user = useSelector(getCurrentUser);
  
  const menuItems: menuItem[] = [
    {
      name: "Feed",
      icon: (
        <RssFeedRounded
          sx={{ color, fontSize: "18px", m: "0 7px 1px 0" }}
        />
      ),
    },
    {
      name: "Chat",
      icon: (
        <MailRounded
          sx={{ color, fontSize: "18px", m: "0 7px 1px 0" }}
        />
      ),
    },
    {
      name: "Bookmarks",
      icon: (
        <BookmarkRounded
          sx={{ color, fontSize: "16px", m: "0 9px 1px 0" }}
        />
      ),
    },
    {
      name: "Questions",
      icon: (
        <LiveHelpRounded
          sx={{ color, fontSize: "14px", m: "0 11px 1px 0" }}
        />
      ),
    },
  ];

  return (
    <Box
      component="div"
      sx={{ display: "flex", bgcolor: backgroundColor, width: "100%" }}
    >
      <Card
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: navButtons,
          width: "100%",
          height: "260px",
          justifyContent: "flex-start",
          display: "flex",
          alignItems: "start",
          borderRadius: "0px",
          pt: "20px",
        }}
      >
        <Box component="div" sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <UserProfileHoverCard>
            <UserProfileWidget
              firstName={user.firstName}
              lastName={user.lastName}
              profilePicture={user.profilePic}
              boxProps={{ cursor: "pointer", ml: "20px" }}
            />
          </UserProfileHoverCard>
          <MenuList
            sx={{
              mt: "10px",
            }}
          >
            {menuItems.map(({ icon, name }, index) => {
              return (
                <MenuItem
                  key={index}
                  sx={{
                    bgcolor: navButtons,
                    width: "100%",
                    minHeight: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      pl: { xs: "0", md: "5px", xl: '50px' },
                    }}
                  >
                    <>{icon}</>
                    <Typography
                      sx={{ color, display: "flex", fontSize: "18px" }}
                    >
                      {name}
                    </Typography>
                  </Box>
                </MenuItem>
              );
            })}
          </MenuList>
        </Box>
      </Card>
    </Box>
  );
};

export default NavSidebar;
