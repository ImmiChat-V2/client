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
  onDelete: (value: any) => void;
  onEdit: (value: any) => void;
  onLike: (id: number, userId: number, isLiked: boolean) => void;
};

function Post({ basePostProps, onDelete, onEdit, onLike }: PostProps) {
  const { id, content, media, likes, comments } = basePostProps;

  const basePostFooterProps = {
    id,
    comments,
    likes,
  };
  const {
    themeColor: { backgroundColor },
  } = useTheme();

  const createCommentHandler = async (value: {
    content: string;
    media: string | null;
  }) => {
    const endpoint = process.env.REACT_APP_BASE_URL + `/posts/${id}/comments`;
    await axios.post(endpoint, value, {
      withCredentials: true,
    });
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
            onDelete={onDelete}
            onEdit={onEdit}
          />
          <PostBody content={content} media={media} />
          <Divider sx={{ mt: "20px" }} />
          <PostFooter
            basePostFooterProps={basePostFooterProps}
            onLike={onLike}
          />
          <ShareComment onSubmit={createCommentHandler} id={id} />
        </Box>
      </Box>
    </>
  );
}

export default Post;
