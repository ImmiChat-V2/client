import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { FavoriteBorder, MoreHoriz, Favorite } from "@mui/icons-material/";
import useTheme from "features/theme/useTheme";
import { BasePostFooterType } from "shared/types";

function PostFooter({ id, userId, likes, comments }: BasePostFooterType) {
  const {
    themeColor: { color, navButtons },
  } = useTheme();
  const [showComment, setShowComment] = useState(false);
  const [displayLikeCount, setDisplayLikeCount] = useState(likes.length)
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    isLiked ? setDisplayLikeCount(displayLikeCount - 1) : setDisplayLikeCount(displayLikeCount + 1);
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
          {/* {displayLikeCount === 1 ? (
            <Typography sx={{color}}>{displayLikeCount} Like</Typography>
          ) : (
            <Typography sx={{color}}>{displayLikeCount} Likes</Typography>
          )} */}
          <Typography sx={{color}}>{displayLikeCount} {(displayLikeCount === 1) ? "Like" : "Likes"}</Typography>
        </Box>
        <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
          {/* {comments.length === 1 ? (
            <Typography sx={{color}}>{commentCount} Comment</Typography>
          ) : (
            <Typography sx={{color}}>{commentCount} Comments</Typography>
          )} */}
          <Typography sx={{color}}>{comments.length} {(comments.length === 1) ? "Comment" : "Comments"}</Typography>
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
