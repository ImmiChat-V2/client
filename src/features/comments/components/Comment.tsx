import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { AddComment, Delete, Favorite } from "@mui/icons-material";
import useTheme from "features/theme/useTheme";
import { getSecureUrl } from "shared/utils/cloudinaryUtil";
import { BaseCommentModel } from "../models/Comments.model";
import UserProfileHoverCard from "shared/components/UserProfileHoverCard/UserProfileHoverCard";
import { UserProfileWidget } from "shared/components";

type CommentProps = {
  commentData: BaseCommentModel;
};

const BaseComment = (commentData: CommentProps) => {
  const { id, media, content, updatedAt, user } = commentData.commentData;
  const { firstName, lastName, profilePic } = user;
  const [likes, setLikes] = useState<any>([]);
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
        mt: "3px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CardContent
          sx={{
            p: 0,
            width: "100%",
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
            <UserProfileHoverCard>
              <UserProfileWidget
                firstName={firstName}
                lastName={lastName}
                profilePicture={profilePic}
                timestamp={updatedAt}
                boxProps={{ cursor: "pointer" }}
              />
            </UserProfileHoverCard>
            <Typography
              sx={{
                fontSize: "10px",
                display: "flex",
              }}
            ></Typography>
          </Box>
          {media && (
            <Box
              component="img"
              src={getSecureUrl(media)}
              sx={{
                my: "20px",
                maxWidth: "100px",
                maxHeight: "100px",
              }}
            />
          )}
          <Typography fontSize={10}>{content}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
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
                    fontSize: "12px",
                    alignItems: "center",
                  }}
                >
                  {likes.length}
                </Typography>

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
                    <Typography
                      sx={{ fontSize: "10px", textTransform: "none" }}
                    >
                      Reply
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box>
                <IconButton
                  disableRipple
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: themeColor.color,
                    p: "0 3px 0 0",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                >
                  <Delete />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BaseComment;
