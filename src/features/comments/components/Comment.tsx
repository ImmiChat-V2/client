import { Card, Typography } from "@mui/material";
import { BaseCommentPropType } from "../models/Comments.model";
import useTheme from "features/theme/useTheme";

const BaseComment = () => {
  // const { userId, postId, media, content, createdAt, updatedAt } = data;
  const userId = 1;
  const postId = 5;
  const media = "";
  const content = "strangalanga";
  const createdAt = new Date();
  const updatedAt = new Date();
  const isUser: boolean = true;
  const { themeColor } = useTheme();
  const isUserStylingProps = {
    display: "flex",
    justifyContent: "flex-start",
    border: "2px solid green",
    p: "10px 10px 10px",
  };

  const isNotUserStylingProps = {
    display: "flex",
    justifyContent: "flex-start",
    border: "1px solid black",
    py: "10px",
  };

  return (
    <>
      {isUser ? (
        <Card variant="outlined" sx={isUserStylingProps}>
          <Typography fontSize={8}>{content}</Typography>
        </Card>
      ) : (
        <Card variant="outlined" sx={isNotUserStylingProps}>
          <Typography fontSize={8}>
            The Theory the the thumb was a thigh
          </Typography>
        </Card>
      )}
    </>
  );
};

export default BaseComment;
