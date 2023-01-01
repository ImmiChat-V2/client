import { useNavigate } from "react-router-dom";
import { Chat, DarkMode, Help, Notifications, Search } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
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
                <Search
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
              <DarkMode
                sx={{
                  color: "#2d2d2d",
                  marginRight: "24px",
                  cursor: "pointer",
                }}
              />
              <Chat
                sx={{
                  color: "#2d2d2d",
                  marginRight: "24px",
                  cursor: "pointer",
                }}
              />
              <Notifications
                sx={{
                  color: "#2d2d2d",
                  marginRight: "24px",
                  cursor: "pointer",
                }}
              />
              <Help
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
