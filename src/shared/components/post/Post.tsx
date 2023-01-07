import { Box } from "@mui/material";
import PostTop from "./PostTop";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import useTheme from "../../../features/theme/useTheme";
import "./post.css";

type BasePost = {
  readonly id: number;
  readonly userId: number;
  readonly profilePic: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly timePosted?: Date,
  readonly content: string;
  readonly media?: string;
};

function Post({
  id,
  userId,
  profilePic,
  firstName,
  lastName,
  timePosted,
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
        maxHeight: "630px",
        maxWidth: "500px",
        backgroundColor,
        borderRadius: "10px",
        mb: "100px",
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
          // timePosted={timePosted}
        />
        <PostBody id={id} userId={userId} content={content} media={media} />
        <hr style={{ marginTop: "20px" }}></hr>
        <PostFooter id={id} userId={userId} />
      </Box>
    </Box>
  );
}

export default Post;
