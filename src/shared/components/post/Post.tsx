import { useState } from "react";
import { Box, Button, Modal, Typography, Divider } from "@mui/material";
import PostTop from "./PostTop";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import useTheme from "features/theme/useTheme";
import { BasePostType } from "shared/types";
import ShareComment from "../ShareComment/ShareComment";
import axios from "axios";

type PostProps = {
  basePostProps: BasePostType;
  onDelete?: (value: any) => void;
};

function Post({ basePostProps, onDelete }: PostProps) {
  const {
    id,
    userId,
    profilePic,
    firstName,
    lastName,
    timestamp,
    content,
    media,
    likes,
    comments,
  } = basePostProps;

  const {
    themeColor: { backgroundColor },
  } = useTheme();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const postTopProps = {
    userId,
    profilePic,
    firstName,
    lastName,
    timestamp,
    content,
    media
  };

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
  };

  const deletePostHandler = async (id: number) => {
    const endpoint = process.env.REACT_APP_BASE_URL + `/posts/${id}`;
    const response = await axios.delete(endpoint, {
      withCredentials: true,
    });

    onDelete?.(id);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const confirmDeletePost = () => {
    setDeleteModalOpen(false);
    deletePostHandler(id);
  };

  return (
    <>
      <Modal
        open={deleteModalOpen}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "white",
            width: "20%",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ padding: "10px", wordBreak: "break-word" }}
          >
            Delete Post?
          </Typography>
          <Divider variant="middle" sx={{ width: "100%" }} />
          <Typography
            sx={{ fontSize: "16px", padding: "10px", wordBreak: "break-word" }}
          >
            Are you sure you want to delete this post?
          </Typography>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Button onClick={confirmDeletePost}>Yes</Button>
            <Button onClick={closeDeleteModal}>No</Button>
          </Box>
        </Box>
      </Modal>
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
          <PostTop basePostTopProps={postTopProps} onDelete={openDeleteModal} />
          <PostBody content={content} media={media} />
          <Divider sx={{ mt: "20px" }} />
          <PostFooter
            id={id}
            userId={userId}
            likes={likes}
            comments={comments}
          />
          <ShareComment onSubmit={createCommentHandler} />
        </Box>
      </Box>
    </>
  );
}

export default Post;
