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
    <nav>
      <div className="navbar-container">
        <div className="left-side-nav">
          <div className="left-side-nav-container">
            <h1 className="navbar-logo" onClick={() => navigate("/")}>
              Immichat
            </h1>
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
              <DarkModeIcon
                sx={{
                  color: "#2d2d2d",
                  marginRight: "24px",
                  cursor: "pointer",
                }}
              />
              <ChatIcon
                sx={{
                  color: "#2d2d2d",
                  marginRight: "24px",
                  cursor: "pointer",
                }}
              />
              <NotificationsIcon
                sx={{
                  color: "#2d2d2d",
                  marginRight: "24px",
                  cursor: "pointer",
                }}
              />
              <HelpIcon
                sx={{
                  color: "#2d2d2d",
                  marginRight: "24px",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="nav-drop-down">
              <FadeDropdown buttonName="Fake User" menuItems={navMenuOptions} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
