import { Box } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { SharePost } from "shared/components";

function Feed() {
  const {
    isDarkMode,
    themeColor: { color, navButtons },
  } = useTheme();
  return (
    <>
     <SharePost profilePic={""} isPost={true} onClick={() => console.log('here')} sx={{bgcolor: 'red'}}/>
    <Box
      sx={{
        bgcolor: navButtons,
        height: "500px",
        borderRadius: "10px",
        p: "20px",
        color,
      }}
    >
    </Box>
    </>
  );
}

export default Feed;
