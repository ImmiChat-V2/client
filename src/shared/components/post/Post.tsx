import { useState } from "react";
import { Box, Divider } from "@mui/material";
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
  onEdit: (value: any) => void;
};

function Post({ basePostProps, onDelete, onEdit }: PostProps) {
  const { id, userId, content, media, likes, comments } = basePostProps;

  const {
    themeColor: { backgroundColor },
  } = useTheme();

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const createCommentHandler = async (value: {
    content: string;
    media: string | null;
  }) => {
    const endpoint = process.env.REACT_APP_BASE_URL + `/posts/${id}/comments`;
    await axios.post(endpoint, value, {
      withCredentials: true,
    });
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  return (
    <>
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
            basePostTopProps={basePostProps}
            onDelete={openDeleteModal}
            onEdit={onEdit}
          />
          <PostBody content={content} media={media} />
          <Divider sx={{ mt: "20px" }} />
          <PostFooter
            id={id}
            userId={userId}
            likes={likes}
            comments={comments}
          />
          <ShareComment onSubmit={createCommentHandler} id={id} />
        </Box>
      </Box>
    </>
  );
}

export default Post;
