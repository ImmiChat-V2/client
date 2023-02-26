import { Avatar, Box, Typography } from "@mui/material";
import useTheme from "features/theme/useTheme";
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
  const {
    themeColor: { color },
  } = useTheme();
  return (
    <Box display="flex" alignItems="center" sx={{ ...boxProps }}>
      <Avatar src={profilePicture} sizes="40px" />
      <Box paddingLeft="11px">
        <Box component="div" sx={{ display: "flex" }}>
          <Typography
            fontSize="15px"
            fontWeight="bold"
            color={color}
            sx={{ mr: "5px" }}
          >
            {firstName}
          </Typography>
          <Typography
            fontSize="15px"
            fontWeight="bold"
            color={color}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            {lastName}
          </Typography>
        </Box>
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
