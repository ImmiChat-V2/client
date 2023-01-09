import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../shared/components/footer/Footer";

const Home = () => {

  return (
    <Box>
      <Link to={"/login"}>dasd</Link>
      <Link to={"/profile"}>Profile</Link>
    </Box>
  );
};

export default Home;
