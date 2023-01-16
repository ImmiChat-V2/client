import { Box, Grid } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { ProfileCard } from "features/userprofile/components/ProfileCard";
import { NavSidebar } from "shared/components/NavSidebar";
import { mockUserData } from "shared/utils";
import { SharePost } from "shared/components";

const ProfilePage = () => {
  const { themeColor } = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <NavSidebar theme={themeColor} />
      </Grid>
      <Grid item xs={6}>
        <ProfileCard
          user={mockUserData}
          theme={themeColor}
          isCurrentUser={true}
        />
        <SharePost profilePic="" theme={themeColor} />
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
