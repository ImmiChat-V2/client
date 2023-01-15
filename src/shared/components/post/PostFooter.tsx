import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { FavoriteBorder, MoreHoriz, Favorite } from "@mui/icons-material/";
import useTheme from "features/theme/useTheme";
import { BasePostFooterPropType } from "features/posts/models/Posts.model";

function PostFooter({ id, userId }: BasePostFooterPropType) {
  const {
    themeColor: { color, navButtons },
  } = useTheme();
  const [likeCount, setLikeCount] = useState(1);
  const [showComment, setShowComment] = useState(false);
  const [commentCount, setCommentCount] = useState(2);
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    isLiked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
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
          {likeCount === 1 ? (
            <Typography sx={{ color }}>{likeCount} Like</Typography>
          ) : (
            <Typography sx={{ color }}>{likeCount} Likes</Typography>
          )}
        </Box>
        <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
          {commentCount === 1 ? (
            <Typography sx={{ color }}>{commentCount} Comment</Typography>
          ) : (
            <Typography sx={{ color }}>{commentCount} Comments</Typography>
          )}
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
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default PostFooter;
