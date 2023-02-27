import {
  MenuList,
  MenuItem,
  Card,
  Typography,
  SvgIconProps,
  Box,
} from "@mui/material";
import { Feed, Work, MapsHomeWork, Medication } from "@mui/icons-material";
import UserProfileHoverCard from "../UserProfileHoverCard/UserProfileHoverCard";
import UserProfileWidget from "../UserProfileWidget";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import useTheme from "features/theme/useTheme";
import { useNavigate } from "react-router-dom";

type menuItem = {
  name: string;
  icon: SvgIconProps;
  categoryName?: string;
};

const NavSidebar = () => {
  const {
    isDarkMode,
    themeColor: { color },
  } = useTheme();
  const user = useSelector(getCurrentUser);

  const navigate = useNavigate();

  const menuItems: menuItem[] = [
    {
      name: "Feed",
      icon: <Feed sx={{ color, fontSize: "30px", m: "0 7px 1px 0" }} />,
    },
    {
      name: "Jobs",
      icon: <Work sx={{ color, fontSize: "28px", m: "0 7px 1px 0" }} />,
      categoryName: "jobs",
    },
    {
      name: "Housing",
      icon: <MapsHomeWork sx={{ color, fontSize: "27px", m: "0 8px 1px 0" }} />,
      categoryName: "housing",
    },
    {
      name: "Health",
      icon: (
        <Medication sx={{ color, fontSize: "35px", m: "0 4px 1px -3px" }} />
      ),
      categoryName: "health",
    },
  ];

  return (
    <Box component="div" sx={{ display: "flex", width: "100%" }}>
      <Card
        sx={{
          position: "sticky",
          top: 72,
          bgcolor: isDarkMode ? "#18191a" : "white",
          width: "100%",
          height: "260px",
          justifyContent: "flex-start",
          display: "flex",
          alignItems: "start",
          borderRadius: "0px",
          pt: "20px",
          boxShadow: "none",
        }}
      >
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <UserProfileHoverCard
            firstName={user.firstName}
            lastName={user.lastName}
            profilePicture={user.profilePic}
          >
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
            {menuItems.map(({ icon, name, categoryName }, index) => {
              return (
                <MenuItem
                  key={index}
                  sx={{
                    bgcolor: isDarkMode ? "#18191a" : "white",
                    width: "100%",
                    minHeight: "30px",
                  }}
                  onClick={() => {
                    const queryParam = categoryName
                      ? `?categoryName=${categoryName}`
                      : "";
                    navigate(`/${queryParam}`);
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      pl: "5px",
                    }}
                  >
                    <>{icon}</>
                    <Typography
                      sx={{ color, display: "flex", fontSize: "16px" }}
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
