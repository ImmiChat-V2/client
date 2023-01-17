import { Box } from "@mui/material";
import useTheme from "features/theme/useTheme";

function HomePageBody() {
  const {
    isDarkMode,
    themeColor: { color, navButtons },
  } = useTheme();
  return (
    <Box
      className="home-container"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        pr: "70px",
        pl: "70px",
        pt: "30px",
        bgcolor: isDarkMode ? "black" : "white",
      }}
    >
      <Box className="left-sidebar" sx={{ maxWidth: "300px" }}>
        <Box
          sx={{
            bgcolor: navButtons,
            height: "350px",
            borderRadius: "10px",
            p: "20px",
            color,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          perspiciatis nulla facere ipsam praesentium illo incidunt fugiat. Sit
          sunt rerum laudantium laboriosam perspiciatis consequuntur? Molestiae
          quam quas provident inventore est!
        </Box>
      </Box>
      <Box className="middle-feed" sx={{ mr: "30px", ml: "30px" }}>
        <Box
          sx={{
            bgcolor: navButtons,
            height: "500px",
            borderRadius: "10px",
            p: "20px",
            color,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          perspiciatis nulla facere ipsam praesentium illo incidunt fugiat. Sit
          sunt rerum laudantium laboriosam perspiciatis consequuntur? Molestiae
          quam quas provident inventore est!
        </Box>
      </Box>
      <Box className="right-sidebar" sx={{ maxWidth: "300px" }}>
        <Box
          sx={{
            bgcolor: navButtons,
            height: "500px",
            borderRadius: "10px",
            p: "20px",
            color,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          perspiciatis nulla facere ipsam praesentium illo incidunt fugiat. Sit
          sunt rerum laudantium laboriosam perspiciatis consequuntur? Molestiae
          quam quas provident inventore est!
        </Box>
      </Box>
    </Box>
  );
}

export default HomePageBody;
