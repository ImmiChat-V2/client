import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./home.css";
import { Navbar } from "shared/components/navbar";
import { NavSidebar } from "shared/components/NavSidebar";
import useTheme from "features/theme/useTheme";

const Home = () => {
  const { themeColor } = useTheme();
  return (
    <Box>
      <Navbar />
      <Link to={"/login"}>dasd</Link>
      <Link to={"/profile"}>Profile</Link>
    </Box>
  );
};

export default Home;
