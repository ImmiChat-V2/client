import { Box } from "@mui/material";
import { ProfileCard } from "shared/components/ProfileCard";
import { mockUserData } from "shared/utils";
import useTheme from "features/theme/useTheme";

const ProfilePage = () => {
  const { themeColor } = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <ProfileCard
        user={mockUserData}
        theme={themeColor}
        isCurrentUser={true}
      />
    </Box>
  );
};

export default ProfilePage;
