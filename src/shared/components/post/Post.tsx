import { Box } from "@mui/material";
import PostTop from "./PostTop";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import useTheme from "features/theme/useTheme";
import { BasePostType } from "shared/types";

function Post({
  id,
  userId,
  profilePic,
  firstName,
  lastName,
  timestamp,
  content,
  media,
}: BasePostType) {
  const {
    themeColor: { backgroundColor },
  } = useTheme();
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        backgroundColor,
        borderRadius: "10px",
        margin: 0, 
        padding: 0,
        boxSizing: 'border-box'
      }}
    >
      <Box
        component="div"
        sx={{
          mr: "20px",
          ml: "20px",
        }}
      >
        <PostTop
          id={id}
          userId={userId}
          profilePic={profilePic}
          firstName={firstName}
          lastName={lastName}
          timestamp={timestamp}
        />
        <PostBody id={id} userId={userId} content={content} media={media} />
        <hr style={{ marginTop: "20px" }}></hr>
        <PostFooter id={id} userId={userId} />
      </Box>
    </Box>
  );
}

export default Post;
