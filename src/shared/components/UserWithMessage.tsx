import { Box, Avatar, Typography } from "@mui/material";

type UserWithMessageProps = {
  readonly name?: string;
  readonly profilePic?: string;
  readonly message: string;
  readonly isCurrentUser: boolean;
};

const UserWithMessage = ({
  name,
  profilePic,
  message,
  isCurrentUser,
}: UserWithMessageProps) => {
  return (
    <Box
      display="flex"
      alignItems="end"
      flexDirection={isCurrentUser ? "row-reverse" : "row"}
    >
      <Avatar src={profilePic} sx={{ height: "32px", width: "32px" }} />
      <Box>
        <Typography
          sx={{
            m: "0px 0px 5px 20px",
            color: "rgb(101,103,107)",
            fontSize: "11px",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            backgroundColor: isCurrentUser
              ? "rgb(0,132,255)"
              : "rgb(228,230,235)",
            p: "5px 10px",
            borderRadius: "10px",
            ml: "10px",
            mr: "10px",
            color: isCurrentUser ? "white" : "black",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserWithMessage;
