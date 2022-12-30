import ChatIcon from "@mui/icons-material/Chat";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HelpIcon from "@mui/icons-material/Help";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase } from "@mui/material";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  function FadeMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          className="nav-dropdown-btn"
        >
          Fake User
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={() => navigate("/")}>Profile</MenuItem>
          <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }

  return (
    <div id={theme}>
    <div className="navbar" >
      <div className="navbar-container">
        <div className="left-side-nav">
          <div className="left-side-nav-container">
            <div className="navbar-logo" onClick={() => navigate("/")}>
              Immichat
            </div>
            <div className="navbar-search">
              <InputBase className="nav-search-input" placeholder="Search..." />
              <IconButton>
                <SearchIcon className="nav-search-icon" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="right-side-nav">
          <div className="right-side-nav-container">
            <div className="nav-buttons">
              <DarkModeIcon onClick={() => {
                {theme === 'light' ? setTheme('dark') : setTheme('light')}
              }} className="nav-icon" />
              <ChatIcon className="nav-icon" />
              <NotificationsIcon className="nav-icon" />
              <HelpIcon className="nav-icon" />
            </div>
            <div className="nav-drop-down">
              <FadeMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
