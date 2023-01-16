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
import { getSecureUrl } from "shared/utils/cloudinaryUtil";

const BaseComment = ({ data }: any) => {
  const { media, content, updatedAt, user } = data;
  const { firstName, lastName, profilePic } = user;
  // we have to use the comment userId and hit get profile endpoint to get profile pic
  // get single user from db
  const date = new Date(updatedAt);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const datetime = `${hour}:${minutes}:${seconds} ${month}/${day}/${year}`;
  const likes = 20;
  const { themeColor } = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: themeColor.backgroundColor,
        color: themeColor.color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        p: "10px 10px 0px 10px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <Avatar sx={{ width: "25px", height: "25px" }} src={profilePic} />
        </Box>
        <CardContent
          sx={{
            p: 0,
            "&:last-child": {
              p: "5px 0 5px 5px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                display: "flex",
                mb: "10px",
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                display: "flex",
              }}
            >
              {datetime}
            </Typography>
          </Box>
          {media && (
            <Box
              component="img"
              src={getSecureUrl(media)}
              sx={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          )}
          <Typography fontSize={10}>{content}</Typography>
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
