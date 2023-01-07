import {
  Avatar,
  Box,
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  AvatarGroup,
} from "@mui/material";
import { CameraAlt, Settings } from "@mui/icons-material";
import { UserProfileType } from "shared/types/SharedUserTypes";
import { getAvatarProps } from "shared/utils";

type PropType = {
  user: UserProfileType;
  isCurrentUser: boolean;
};

const ProfileCard = ({ user, isCurrentUser }: PropType) => {
  const { id, firstName, lastName, profilePic, coverPic, friends } = user;
  const userName = firstName + " " + lastName;
  const friendCount = friends.length;

  const SharedWrapperProps = {
    justifyContent: "center",
    display: "flex",
    width: "100%",
  };

  const SharedFlexAbsoluteProps = {
    display: "flex",
    position: "absolute",
  };

  const FlexAndCenterProps = {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <Box
      sx={{
        ...SharedWrapperProps,
        height: "350px",
        "@media (max-width:650px)": {
          minHeight: "500px",
        },
      }}
    >
      <Card
        sx={{
          ...SharedWrapperProps,
          flexDirection: "column",
          position: "relative",
        }}
      >
        <CardMedia
          src={coverPic}
          sx={{
            ...SharedFlexAbsoluteProps,
            height: "200px",
            width: "100%",
            background: "linear-gradient(0deg,#4a4949 0%, white 30%)",
            top: 0,
            borderRadius: "0 0 5px 5px",
            zIndex: 2,
            "@media (max-width:650px)": {
              ...FlexAndCenterProps,
            },
          }}
        >
          {isCurrentUser && (
            <Button
              sx={{
                ...SharedFlexAbsoluteProps,
                fontSize: "10px",
                p: "5px",
                maxWidth: "180px",
                maxHeight: "25px",
                right: 20,
                bottom: 10,
                zIndex: 2,
                "@media (max-width:650px)": {
                  right: 5,
                  bottom: "unset",
                  top: 5,
                },
              }}
              variant="contained"
              color="success"
            >
              <CameraAlt sx={{ fontSize: "18px", mr: 1 }} />
              <Typography sx={{ fontSize: "10px" }}>Add cover photo</Typography>
            </Button>
          )}
        </CardMedia>
        <CardContent
          sx={{
            ...SharedFlexAbsoluteProps,
            width: "100%",
            top: "45%",
            "@media (max-width:650px)": {
              ...FlexAndCenterProps,
              flexDirection: "column",
              pt: "50px 0 unset",
              top: "30%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              "@media (max-width:650px)": {
                justifyContent: "center",
              },
            }}
          >
            <Avatar
              src={profilePic}
              sx={{
                position: "relative",
                zIndex: 3,
                width: "120px",
                height: "120px",
                border: "2px white solid",
              }}
            />
            <Button
              sx={{
                ...SharedFlexAbsoluteProps,
                color: "#1f1e1e",
                minWidth: "30px",
                maxWidth: "30px",
                height: "30px",
                borderRadius: "50%",
                right: 0,
                zIndex: 4,
                bottom: 10,
                "&:hover": {
                  bgcolor: "#75757580",
                },
              }}
            >
              <CameraAlt />
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              pr: 2,
              minHeight: "130px",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              "@media (max-width:650px)": {
                pr: "unset",
                minHeight: "unset",
                ...FlexAndCenterProps,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                width: "50%",
                mx: 2,
                py: 5,
                justifyContent: "flex-start",
                "@media (max-width:650px)": {
                  ...FlexAndCenterProps,
                  pt: 2,
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: "100%",
                  textAlign: "left",
                  mt: 0,
                  "@media (max-width:650px)": {
                    ...FlexAndCenterProps,
                  },
                }}
              >
                {/* {userName} */}
                Dingaringaringaringa Ringadingadingadinga
              </Typography>
              <Typography variant="body2">{friendCount} Friends</Typography>
              <AvatarGroup
                sx={{
                  position: "absolute",
                  bottom: 0,
                  "& * ": {
                    width: "20px",
                    height: "20px",
                  },
                }}
                max={5}
                spacing={4}
              >
                {friends.map(({ firstName, lastName, id, profilePic }) => {
                  const friendName = firstName + " " + lastName;
                  const friendSxProps = getAvatarProps(friendName);
                  return (
                    <Avatar key={id} {...friendSxProps} src={profilePic} />
                  );
                })}
              </AvatarGroup>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              {isCurrentUser && (
                <Button
                  sx={{
                    display: "flex",
                    fontSize: "9px",
                    py: "2px",
                    px: "10px",
                    mt: "10px",
                  }}
                  variant="contained"
                  color="primary"
                >
                  <Settings sx={{ fontSize: "18px", mr: 1 }} />
                  <Typography sx={{ fontSize: "10px" }}>
                    Edit Profile
                  </Typography>
                </Button>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileCard;
