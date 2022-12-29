import { Avatar, Box, Typography } from "@mui/material";
import { formatTime } from "../utils/timeUtils";

type UserProfileWithTimestampProps = {
  readonly profilePicture?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly timestamp: Date;
  readonly boxProps?: Record<string, string>;
};

const UserProfileWithTimestamp = ({
  profilePicture,
  firstName,
  lastName,
  timestamp,
  boxProps,
}: UserProfileWithTimestampProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ ...boxProps }}
    >
      <Avatar src={profilePicture} />
      <Typography variant="subtitle1" paddingRight="11px" fontWeight="bold">
        {firstName} {lastName}
      </Typography>
      <Typography variant="caption" color="#65676B">{formatTime(timestamp)}</Typography>
    </Box>
  );
};

export default UserProfileWithTimestamp;
