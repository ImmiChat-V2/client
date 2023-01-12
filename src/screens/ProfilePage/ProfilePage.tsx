import { Box } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { NavSidebar } from "shared/components/NavSidebar";
import { ProfileCard } from "shared/components/ProfileCard";
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
