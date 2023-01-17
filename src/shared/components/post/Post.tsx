import { Box } from "@mui/material";
import PostTop from "./PostTop";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import useTheme from "features/theme/useTheme";
import { BasePostType } from "shared/types";
import ShareComment from "../ShareComment/ShareComment";
import axios from "axios";

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

  // The idea is that the Post component will handle the state of its comments
  // When the CommentUI is built out,
  // Update this handler to push the new comment to the commentstate
  const createCommentHandler = async (value: {
    content: string;
    media: string | null;
  }) => {
    const endpoint = process.env.REACT_APP_BASE_URL + `/posts/${id}/comments`;
    const response = await axios.post(endpoint, value, {
      withCredentials: true,
    });
    console.log(response);
  };

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        backgroundColor,
        borderRadius: "10px",
        m: "5px 0 5px 0",
        p: "15px 0 15px 0",
        boxSizing: "border-box",
      }}
    >
      <Box
        component="div"
        sx={{
          mx: "20px",
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
        <ShareComment onSubmit={createCommentHandler} />
      </Box>
    </Box>
  );
}

export default Post;
