import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { FavoriteBorder, MoreHoriz, Favorite } from "@mui/icons-material/";
import useTheme from "features/theme/useTheme";
import { BasePostFooterType } from "shared/types";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import axios from "axios";

axios.defaults.withCredentials = true;

type PostFooterProps = {
  basePostFooterProps: BasePostFooterType;
  onLike?: (id: any, userId: any, flag: any) => void;
};

function PostFooter({ basePostFooterProps, onLike }: PostFooterProps) {
  const { id, likes, comments } = basePostFooterProps;
  const user = useSelector(getCurrentUser);
  const {
    themeColor: { color, navButtons },
  } = useTheme();
  const user = useSelector(getCurrentUser);
  const [showComment, setShowComment] = useState(false);
  const displayLikeCount = likes.length;
  const isLiked = likes.find((like) => like.id === user.id);

  const handleLike = async () => {
    const endpoint = process.env.REACT_APP_BASE_URL + `/posts/${id}/likes`;
    await axios.post(endpoint);
    onLike?.(id, user.id, 1);
  };

  const handleDislike = async () => {
    const endpoint = process.env.REACT_APP_BASE_URL + `/posts/${id}/likes`;
    await axios.delete(endpoint);
    onLike?.(id, user.id, -1);
  };

  const handleLikeClick = () => {
    isLiked ? handleDislike() : handleLike();
  };

  const handleCommentClick = () => {
    setShowComment(!showComment);
  };

  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "10px",
          pb: "10px",
          alignItems: "center",
        }}
      >
        <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            aria-label="like-post"
            sx={{
              backgroundColor: navButtons,
              "&:hover": {
                backgroundColor: "#ffabab",
              },
              borderRadius: "50px",
              height: "35px",
              width: "35px",
              pt: "9px",
              mr: "5px",
            }}
          >
            {isLiked ? (
              <Favorite
                onClick={handleLikeClick}
                sx={{
                  cursor: "pointer",
                  width: "30px",
                  color: "#D70040",
                }}
              />
            ) : (
              <FavoriteBorder
                onClick={handleLikeClick}
                sx={{
                  cursor: "pointer",
                  width: "30px",
                  color: "#D70040",
                }}
              />
            )}
          </IconButton>
          <Typography sx={{ color }}>
            {displayLikeCount} {displayLikeCount === 1 ? "Like" : "Likes"}
          </Typography>
        </Box>
        <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color }}>
            {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
          </Typography>
          <IconButton
            aria-label="comment-post"
            sx={{
              backgroundColor: navButtons,
              borderRadius: "50px",
              height: "35px",
              width: "35px",
              pt: "5px",
              ml: "7px",
            }}
          >
            <MoreHoriz
              className="post-comment-icon"
              sx={{
                cursor: "pointer",
                color,
                mt: "3px",
                width: "40px",
              }}
              onClick={() => setShowComment(!showComment)}
            />
          </IconButton>
        </Box>
      </Box>
      {showComment && <CommentSection id={id} />}
    </>
  );
}

export default PostFooter;
