import { CssBaseline, Box, Grid, Button, TextField } from "@mui/material";
import { useState } from "react";
import { ProfileCard } from "shared/components/ProfileCard";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import { UserProfileType } from "shared/types";
import { mockUserData } from "shared/utils";
import useTheme from "features/theme/useTheme";

const ProfilePage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ width: "20%", bgcolor: "blue" }}>Text</Box>
      {/* fix */}
      <ProfileCard user={mockUserData} isCurrentUser={true} />
      <Box sx={{ width: "20%", bgcolor: "blue" }}>Text</Box>
    </Box>
  );
};

export default ProfilePage;
