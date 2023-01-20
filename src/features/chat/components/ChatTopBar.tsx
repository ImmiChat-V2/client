import { UserProfileWidget } from "shared/components";
import useTheme from "features/theme/useTheme";
import { Box, IconButton } from "@mui/material";
import { Phone, Videocam, Info } from "@mui/icons-material";

type ChatTopBarProps = {
  profilePic?: string;
  firstName: string;
  lastName: string;
};

function ChatTopBar({ profilePic, firstName, lastName }: ChatTopBarProps) {
  const {
    themeColor: { backgroundColor },
  } = useTheme();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor,
      }}
    >
      <Box component="div" sx={{ p: 1 }}>
        <UserProfileWidget
          profilePicture={profilePic}
          firstName={firstName}
          lastName={lastName}
        />
      </Box>

      <Box component="div" sx={{ p: 1 }}>
        <IconButton>
          <Phone style={{ color: "#1877f2" }} />
        </IconButton>
        <IconButton>
          <Videocam style={{ color: "#1877f2" }} />
        </IconButton>
        <IconButton>
          <Info style={{ color: "#1877f2" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ChatTopBar;
