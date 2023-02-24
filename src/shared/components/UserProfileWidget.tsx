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
      <Box
        component="div"
        sx={{ bgcolor: "#2E67A0", height: "50px", width: "50px", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}
      >
        <Typography fontSize="20px" color="black">
          {firstName[0].toUpperCase()}.{lastName[0].toUpperCase()}
        </Typography>
      </Box>
      <Box paddingLeft="11px">
        <Typography fontSize="15px" fontWeight="bold" color={color}>
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
