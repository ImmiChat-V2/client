import { useNavigate } from "react-router-dom";
import {
  Chat,
  DarkMode,
  Help,
  Notifications,
  Search,
} from "@mui/icons-material";
import { IconButton, InputBase, Typography } from "@mui/material";
import FadeDropdown from "../FadeDropdown";
import "./navbar.css";
import { Box } from "@mui/system";

function Navbar() {
  const navigate = useNavigate();

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
        maxWidth: "1500px",
        margin: "auto",
        paddingRight: "25px",
        paddingLeft: "25px",
        pt: "11px",
        pb: "11px",
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
            }}
            onClick={() => navigate("/")}
          >
            Immichat
          </Typography>
          <Box component="span"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#ededed',
            pl: '11px',
            borderRadius: '10px',
            maxWidth: '300px'
          }}
          >
            <InputBase
              sx={{ color: "black" }}
              className="nav-search-input"
              placeholder="Search..."
            />
            <IconButton>
              <Search sx={{ color: "#2d2d2d" }} className="nav-search-icon" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box 
      sx={{display: 'flex', alignItems: 'center'}}
      >
        <Box 
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
        >
          <Box className="nav-buttons"
          >
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
          </Box>
          <Box className="nav-drop-down">
            <FadeDropdown buttonName="Fake User" menuItems={navMenuOptions} />
          </Box>
        </Box>
      </Box>
    </Box>
    // <nav>
    //   <div className="navbar-container">
    //     <div className="left-side-nav">
    //       <div className="left-side-nav-container">
    //         <h1 className="navbar-logo" onClick={() => navigate("/")}>
    //           Immichat
    //         </h1>
    //         <div className="navbar-search">
    //           <InputBase
    //             sx={{ color: "black" }}
    //             className="nav-search-input"
    //             placeholder="Search..."
    //           />
    //           <IconButton>
    //             <Search
    //               sx={{ color: "#2d2d2d" }}
    //               className="nav-search-icon"
    //             />
    //           </IconButton>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="right-side-nav">
    //       <div className="right-side-nav-container">
    //         <div className="nav-buttons">
    //           <DarkMode
    //             sx={{
    //               color: "#2d2d2d",
    //               marginRight: "24px",
    //               cursor: "pointer",
    //             }}
    //           />
    //           <Chat
    //             sx={{
    //               color: "#2d2d2d",
    //               marginRight: "24px",
    //               cursor: "pointer",
    //             }}
    //           />
    //           <Notifications
    //             sx={{
    //               color: "#2d2d2d",
    //               marginRight: "24px",
    //               cursor: "pointer",
    //             }}
    //           />
    //           <Help
    //             sx={{
    //               color: "#2d2d2d",
    //               marginRight: "24px",
    //               cursor: "pointer",
    //             }}
    //           />
    //         </div>
    //         <div className="nav-drop-down">
    //           <FadeDropdown buttonName="Fake User" menuItems={navMenuOptions} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
