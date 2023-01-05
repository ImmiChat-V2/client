import { useNavigate } from "react-router-dom";
import {
  Chat,
  Help,
  Notifications,
  Search,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { IconButton, InputBase, Typography, Box } from "@mui/material";
import FadeDropdown from "../FadeDropdown";
import useTheme from "../../../features/theme/useTheme";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { theme, themeColor, toggleDarkMode } = useTheme();
  const { backgroundColor, color, navButtons } = themeColor;

  const navMenuOptions = [
    { title: "Profile", onClick: () => navigate(`/`) },
    { title: "Login", onClick: () => navigate(`/`) },
  ];

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        paddingRight: "25px",
        paddingLeft: "25px",
        pt: "11px",
        pb: "11px",
        backgroundColor,
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
              maxWidth: "300px",
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box className="nav-buttons">
            {theme ? (
              <Brightness7
                onClick={toggleDarkMode}
                sx={{
                  color,
                  marginRight: "24px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <Brightness4
                onClick={toggleDarkMode}
                sx={{
                  color,
                  marginRight: "24px",
                  cursor: "pointer",
                }}
              />
            )}
            <Chat
              sx={{
                color,
                marginRight: "24px",
                cursor: "pointer",
              }}
            />
            <Notifications
              sx={{
                color,
                marginRight: "24px",
                cursor: "pointer",
              }}
            />
            <Help
              sx={{
                color,
                marginRight: "24px",
                cursor: "pointer",
              }}
            />
          </Box>
          <Box className="nav-drop-down">
            {theme ? (
              <FadeDropdown
                buttonName="Fake User"
                menuItems={navMenuOptions}
                darkMode={true}
              />
            ) : (
              <FadeDropdown
                buttonName="Fake User"
                menuItems={navMenuOptions}
                darkMode={false}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
