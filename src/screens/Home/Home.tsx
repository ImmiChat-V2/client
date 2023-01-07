import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  // const { theme } = useTheme()
  return (
    <Box>
      <Link to={"/login"}>dasd</Link>
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
