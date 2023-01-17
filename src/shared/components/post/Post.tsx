import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PostTop from "./PostTop";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import useTheme from "features/theme/useTheme";
import { BasePostType } from "shared/types";
import ShareComment from "../ShareComment/ShareComment";
import axios from "axios";
import { BaseCommentModel } from "features/comments/models/Comments.model";
import { Comment } from "features/comments/components";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";

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

  const [commentList, setCommentList] = useState<BaseCommentModel[]>([]);
  const data = useSelector(getCurrentUser);

  const createCommentHandler = async (value: {
    content: string;
    media: string | null;
  }) => {
    const endpoint = process.env.REACT_APP_BASE_URL + `/posts/${id}/comments`;
    const response = await axios.post(endpoint, value, {
      withCredentials: true,
    });
    const newCommentWithUser = {
      ...response.data.data,
      user: {
        firstName: data.firstName,
        lastName: data.lastName,
        profilePic: data.profilePic,
      },
    };
    setCommentList([...commentList, newCommentWithUser]);
  };

  const getAllComments = async () => {
    const endpoint = process.env.REACT_APP_BASE_URL + `/posts/${id}/comments`;
    const response = await axios.get(endpoint, {
      withCredentials: true,
    });
    setCommentList(response.data.data);
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        backgroundColor,
        borderRadius: "10px",
        margin: 0,
        padding: 0,
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
        {commentList.map((value) => {
          return (
            <>
              <Comment commentData={value} />
            </>
          );
        })}
        <ShareComment onSubmit={createCommentHandler} />
      </Box>
    </Box>
  );
}

export default Post;
