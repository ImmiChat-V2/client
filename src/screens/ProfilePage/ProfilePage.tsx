import { CssBaseline, Box, Grid, Button, TextField } from "@mui/material";
import { useState } from "react";
import { ProfileCard } from "shared/components/ProfileCard";
import { useSelector } from "react-redux";
import { getCurrentUser } from "features/auth/authSlice";
import { UserProfileType } from "shared/types";
import { mockUserData } from "shared/utils";
import useTheme from "features/theme/useTheme";

const ProfilePage = () => {
  const { theme, themeColor, toggleDarkMode } = useTheme();
  const { backgroundColor, color, navButtons } = themeColor;
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
