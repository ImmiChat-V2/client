import { Box } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { ProfileCard } from "features/userprofile/components/ProfileCard";
import { NavSidebar } from "shared/components/NavSidebar";

import { mockUserData } from "shared/utils";

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
      <Box sx={{ width: "250px" }}>
        <NavSidebar theme={themeColor} />
      </Box>
      <ProfileCard
        user={mockUserData}
        theme={themeColor}
        isCurrentUser={true}
      />
    </Box>
  );
};

export default ProfilePage;
