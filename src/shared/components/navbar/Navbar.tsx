import ChatIcon from "@mui/icons-material/Chat";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HelpIcon from "@mui/icons-material/Help";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FadeDropdown from "../FadeDropdown";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const navMenuOptions = [
    { title: "Profile", onClick: () => navigate(`/`) },
    { title: "Login", onClick: () => navigate(`/`) },
  ];

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left-side-nav">
          <div className="left-side-nav-container">
            <div className="navbar-logo" onClick={() => navigate("/")}>
              Immichat
            </div>
            <div className="navbar-search">
              <InputBase
                sx={{ color: "black" }}
                className="nav-search-input"
                placeholder="Search..."
              />
              <IconButton>
                <SearchIcon
                  sx={{ color: "#2d2d2d" }}
                  className="nav-search-icon"
                />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="right-side-nav">
          <div className="right-side-nav-container">
            <div className="nav-buttons">
              <DarkModeIcon sx={{ color: "#2d2d2d" }} className="nav-icon" />
              <ChatIcon sx={{ color: "#2d2d2d" }} className="nav-icon" />
              <NotificationsIcon
                sx={{ color: "#2d2d2d" }}
                className="nav-icon"
              />
              <HelpIcon sx={{ color: "#2d2d2d" }} className="nav-icon" />
            </div>
            <div className="nav-drop-down">
              <FadeDropdown buttonName="Fake User" menuItems={navMenuOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
