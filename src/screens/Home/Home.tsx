import { Box } from "@mui/material";
import { Navbar } from "shared/components/navbar";
import { Comment } from "features/comments/components";
import Post from "shared/components/post/Post";
import { Footer } from "shared/components/footer";
import HomePageBody from "./HomePageBody";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomePageBody />
      <Box sx={{ position: "absolute", bottom: "0", width: "100%" }}>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
