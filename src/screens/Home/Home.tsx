import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./home.css";
import { Navbar } from "shared/components/navbar";
import Footer from "../../shared/components/footer/Footer";

const Home = () => {
  // const { theme } = useTheme()
  return (
    <Box>
      <Navbar />
      <Link to={"/login"}>dasd</Link>
      <Link to={"/profile"}>Profile</Link>
    </Box>
  );
};
/*
id
userId
top: 
  profilePic
  firstName 
  lastName
  timePosted

mid: 
  content(text)
  post image?

Bottom: 
  like count
  comment count
*/
export default Home;
