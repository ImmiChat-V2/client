import { Box } from "@mui/material";
import PostTop from "./PostTop";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import useTheme from "../../../features/theme/useTheme";

type BasePost = {
  readonly id: number;
  readonly userId: number;
  readonly profilePic?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly timestamp?: Date,
  readonly content: string;
  readonly media?: string;
};

function Post({
  id,
  userId,
  profilePic,
  firstName,
  lastName,
  timestamp,
  content,
  media,
}: BasePost) {
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
          timeStamp={timestamp}
        />
        <PostBody id={id} userId={userId} content={content} media={media} />
        <hr style={{ marginTop: "20px" }}></hr>
        <PostFooter id={id} userId={userId} />
      </Box>
    </Box>
  );
}

export default Post;
