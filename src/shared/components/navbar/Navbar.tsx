import { useNavigate } from "react-router-dom";
import {
  Chat,
  Help,
  Notifications,
  Search,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { IconButton, InputBase, Typography, Box, Grid } from "@mui/material";
import FadeDropdown from "../FadeDropdown";
import useTheme from "features/theme/useTheme";
import { getCurrentUser } from "features/auth/authSlice";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const user = useSelector(getCurrentUser);
  const { isDarkMode, themeColor, toggleDarkMode } = useTheme();
  const { backgroundColor, color, navButtons } = themeColor;

  const navMenuOptions = [
    { title: "Profile", onClick: () => navigate(`/`) },
    { title: "Logout", onClick: () => navigate(`/`) },
  ];

  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        pr: "70px",
        pl: "70px",
        pt: "11px",
        pb: "11px",
        backgroundColor,
        zIndex: 1,
      }}
    >
      <Box className="left-side-nav">
        <Box
          className="left-side-nav-container"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "415px",
            pr: "20px",
          }}
        >
          <Typography
            component="h5"
            sx={{
              fontSize: "33px",
              cursor: "pointer",
              mr: "20px",
              fontWeight: "500",
              color,
            }}
            onClick={() => navigate("/")}
          >
            Immichat
          </Typography>
          <Box
            component="span"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: navButtons,
              pl: "11px",
              borderRadius: "10px",
              maxWidth: "150px",
            }}
          >
            <InputBase
              sx={{ color }}
              className="nav-search-input"
              placeholder="Search..."
            />
            <IconButton>
              <Search sx={{ color }} className="nav-search-icon" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Grid
          container
          spacing={3}
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            alignItems: "center",
          }}
        >
          <Grid item>
            {isDarkMode ? (
              <Brightness7
                onClick={toggleDarkMode}
                sx={{
                  color,
                  cursor: "pointer",
                }}
              />
            ) : (
              <Brightness4
                onClick={toggleDarkMode}
                sx={{
                  color,
                  cursor: "pointer",
                }}
              />
            )}
          </Grid>
          <Grid item>
            <Chat
              sx={{
                color,
                cursor: "pointer",
              }}
            />
          </Grid>
          <Grid item>
            <Notifications
              sx={{
                color,
                cursor: "pointer",
              }}
            />
          </Grid>
          <Grid item sx={{ mr: "20px" }}>
            <Help
              sx={{
                color,
                cursor: "pointer",
              }}
            />
          </Grid>
        </Grid>
        <Box>
          {isDarkMode ? (
            <FadeDropdown
              buttonName={user.firstName}
              menuItems={navMenuOptions}
              darkMode={true}
            />
          ) : (
            <FadeDropdown
              buttonName={user.firstName}
              menuItems={navMenuOptions}
              darkMode={false}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
