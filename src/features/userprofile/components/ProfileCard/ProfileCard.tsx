import { useSelector } from "react-redux";
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
import { UserProfileInfoType } from "features/userprofile/models/UserProfileModel";
import { getAvatarProps } from "shared/utils";
import { getActiveConnections } from "features/connections/connectionsSlice";

type PropType = {
  user: UserProfileInfoType;
  isCurrentUser: boolean;
  theme: any;
};

type connectionListInfo = {
  firstName: string;
  lastName: string;
  id: number;
  profilePic?: string;
};

const ProfileCard = ({ user, theme, isCurrentUser }: PropType) => {
  const { firstName, lastName, profilePic, coverPic } = user;
  const userName = firstName + " " + lastName;
  const friendList = useSelector(getActiveConnections);

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
        mb: 3,
        height: "350px",
        "@media (max-width:650px)": {
          minHeight: "500px",
        },
      }}
    >
      <Card
        sx={{
          bgcolor: theme.backgroundColor,
          ...SharedWrapperProps,
          flexDirection: "column",
          position: "relative",
          borderRadius: "0px 0px 5px 5px",
        }}
      >
        <CardMedia
          src={coverPic}
          sx={{
            bgcolor: theme.backgroundColor,
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
            bgcolor: theme.backgroundColor,
            ...SharedFlexAbsoluteProps,
            width: "100%",
            top: "45%",
            "@media (max-width:650px)": {
              ...FlexAndCenterProps,
              flexDirection: "column",
              p: "50px 0 unset",
              top: "30%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
              maxWidth: "120px",
              maxHeight: "120px",
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

            {isCurrentUser && (
              <Button
                sx={{
                  ...SharedFlexAbsoluteProps,
                  color: "primary",
                  minWidth: "30px",
                  maxWidth: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  right: 0,
                  zIndex: 4,
                  bottom: 2,
                  "&:hover": {
                    bgcolor: "#75757580",
                  },
                }}
              >
                <CameraAlt />
              </Button>
            )}
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
                ...FlexAndCenterProps,
                pr: "unset",
                minHeight: "unset",
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
                  color: theme.color,
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
                {userName}
              </Typography>
              <Typography sx={{ color: theme.color, my: 1 }} variant="body2">
                {friendList.length !== 1
                  ? `${friendList.length} Connections`
                  : `${friendList.length} Connection`}
              </Typography>
              <AvatarGroup
                sx={{
                  position: "absolute",
                  justifyContent: "center",
                  pt: 5,
                  bottom: 0,
                  "& > div ": {
                    width: 25,
                    height: 25,
                    fontSize: "10px",
                  },
                }}
                max={5}
                spacing={4}
              >
                {friendList.map(
                  ({
                    firstName,
                    lastName,
                    id,
                    profilePic,
                  }: connectionListInfo) => {
                    const friendName = firstName + " " + lastName;
                    const friendSxProps = getAvatarProps(friendName);
                    return (
                      <Avatar key={id} {...friendSxProps} src={profilePic} />
                    );
                  }
                )}
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
                    p: "2px 10px",
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
