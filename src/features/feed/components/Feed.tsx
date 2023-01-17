import { Box } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { SharePost } from "shared/components";

function Feed() {
  const {
    themeColor: { color, navButtons, backgroundColor },
  } = useTheme();
  return (
    <>
      <Box sx={{ width: '700px' }}>
        <SharePost
          profilePic=""
          theme={{ color, navButtons, backgroundColor }}
        />
      </Box>
    </>
  );
}

export default Feed;
