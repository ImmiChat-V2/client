import { Box } from "@mui/material";
import { Navbar } from "shared/components/navbar";
import { Footer } from "shared/components/footer";
import HomePageBody from "./HomePageBody";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Box className="home-body" sx={{bgcolor: 'red'}}> */}
      <HomePageBody />

      {/* </Box> */}
      <Box sx={{ position: "absolute", bottom: "0", width: "100%" }}>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
