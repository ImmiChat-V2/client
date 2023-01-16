import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import { AddComment, Favorite } from "@mui/icons-material";
import { BaseCommentPropType } from "../models/Comments.model";
import useTheme from "features/theme/useTheme";

const BaseComment = ({ data }: any) => {
  // const { userId, postId, media, content, createdAt, updatedAt } = data;
  // we have to use the comment userId and hit get profile endpoint to get profile pic
  // get single user from db
  const userId = 1;
  const postId = 5;
  const media = "";
  const content = "strangalanga";
  const createdAt = new Date();
  const month = createdAt.getMonth() + 1;
  const year = createdAt.getFullYear();
  const day = createdAt.getDate();
  const hour = createdAt.getHours();
  const minutes = createdAt.getMinutes();
  const seconds = createdAt.getSeconds();
  const datetime = `${hour}:${minutes}:${seconds} ${month}/${day}/${year}`;
  const updatedAt = new Date();
  const firstName = "john";
  const lastName = "son";
  const likes = 20;
  const { themeColor } = useTheme();
import { Card, Typography } from "@mui/material";
import { BaseCommentPropType } from "../models/Comments.model";
import useTheme from "features/theme/useTheme";

const BaseComment = () => {
  // const { userId, postId, media, content, createdAt, updatedAt } = data;
  // we have to use the comment userId and hit get profile endpoint to get profile pic
  // get single user from db
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              maxWidth: "30%",
              mt: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <IconButton
                disableRipple
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: "0 3px 0 0",
                  "&:hover": {
                    bgcolor: themeColor.backgroundColor,
                  },
                }}
              >
                <Favorite
                  sx={{
                    fontSize: "14px",
                    color: themeColor.color,
                    "&:hover": { color: "#E0115F" },
                  }}
                />
              </IconButton>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "10px",
                  mt: "5px",
                }}
              >
                {likes}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  py: "5px",
                  color: themeColor.color,
                  mx: "10px",
                  "&:hover": { bgcolor: "transparent" },
                }}
              >
                <AddComment
                  sx={{
                    fontSize: "13px",
                    mt: "2px",
                    mr: "5px",
                    color: themeColor.color,
                  }}
                />
                <Typography sx={{ fontSize: "10px", textTransform: "none" }}>
                  Reply
                </Typography>
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BaseComment;
