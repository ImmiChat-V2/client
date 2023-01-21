import { Box, Typography } from "@mui/material";
import { Feed } from "features/feed/components";
import useTheme from "features/theme/useTheme";
import "./homePageBody.css";

function HomePageBody() {
  const {
    isDarkMode,
    themeColor: { color, backgroundColor },
  } = useTheme();

  return (
    <Box sx={{ bgcolor: isDarkMode ? "black" : "white" }}>
      <Box
        className="home-container"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: "30px 30px 0 30px",
          maxWidth: "1650px",
          m: "auto",
        }}
      >
        <Box className="left-sidebar" sx={{ maxWidth: "400px" }}>
          <Box
            sx={{
              bgcolor: backgroundColor,
              height: "350px",
              borderRadius: "10px",
              p: "20px",
              color,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis nulla facere ipsam praesentium illo incidunt fugiat.
            Sit sunt rerum laudantium laboriosam perspiciatis consequuntur?
            Molestiae quam quas provident inventore est!
          </Box>
        </Box>
        <Box className="middle-feed" sx={{ ml: "15px", mr: "15px" }}>
          <Feed />
        </Box>
        <Box className="right-sidebar" sx={{ maxWidth: "400px" }}>
          <Box
            sx={{
              bgcolor: backgroundColor,
              height: "500px",
              borderRadius: "10px",
              p: "20px",
              color,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis nulla facere ipsam praesentium illo incidunt fugiat.
            Sit sunt rerum laudantium laboriosam perspiciatis consequuntur?
            Molestiae quam quas provident inventore est!
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePageBody;
