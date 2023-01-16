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
    p: "10px 10px 0px 30px",
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
          <CardContent
            sx={{
              p: 0,
              "&:last-child": {
                pb: "5px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
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
                  display: "flex",
                  flexDirection: "row",
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
                  {createdAt}
                </Typography>
              </Box>
              <Typography fontSize={10}>
                {content}The Theory the the thumb was a thighThe Theory the the
                thumb was a thighThe Theory the the thumb was a thighThe Theory
                the the thumb was a thighThe Theory the the thumb was a thighThe
                Theory the the thumb was a thighThe Theory the the thumb was a
                thighThe Theory the the thumb was a thighThe Theory the the
                thumb was a thighThe Theory the the thumb was a thighThe Theory
                the the thumb was a thighThe Theory the the thumb was a thighThe
                Theory the the thumb was a thighThe Theory the the thumb was a
                thighThe Theory the the thumb was a thighThe Theory the the
                thumb was a thighThe Theory the the thumb was a thigh
              </Typography>
              <Box
                sx={{
                  py: "5px",
                  color: themeColor.color,
                  mx: "10px",
                  "&:hover": { bgcolor: "transparent" },
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  maxWidth: "30%",
                  mt: "10px",
                }}
              >
                <AddComment
                <Box
                  sx={{
                    fontSize: "13px",
                    mt: "2px",
                    mr: "5px",
                    color: themeColor.color,
                    display: "flex",
                    flexDirection: "row",
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
                    <Typography
                      sx={{ fontSize: "10px", textTransform: "none" }}
                    >
                      Reply
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Card>
      ) : (
        <Card variant="outlined" sx={isNotUserStylingProps}>
          <Typography>
            {firstName} {lastName}
          </Typography>
          <Typography fontSize={8}>
            The Theory the the thumb was a thigh
          </Typography>
        </Card>
      )}
    </>
  );
};

export default BaseComment;
