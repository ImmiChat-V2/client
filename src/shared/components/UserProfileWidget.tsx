import { Avatar, Box, Typography } from "@mui/material";
import { formatTime } from "../utils/timeUtils";

type UserProfileWidgetProps = {
  readonly profilePicture?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly timestamp?: Date;
  readonly boxProps?: Record<string, string>;
};

const UserProfileWidget = ({
  profilePicture,
  firstName,
  lastName,
  timestamp,
  boxProps,
}: UserProfileWidgetProps) => {
  return (
    <Box display="flex" alignItems="center" sx={{ ...boxProps }}>
      <Avatar src={profilePicture} sizes="40px" />
      <Box paddingLeft="11px">
        <Typography fontSize="15px" fontWeight="bold">
          {firstName} {lastName}
        </Typography>
        {timestamp && (
          <Typography fontSize="12px" color="#65676B">
            {formatTime(timestamp)}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default UserProfileWidget;