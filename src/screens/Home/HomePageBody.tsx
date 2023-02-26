import { Box, Grid } from "@mui/material";
import { Feed } from "features/feed/components";
import useTheme from "features/theme/useTheme";
import { useState } from "react";
import ConfirmationModal from "shared/components/ConfirmationModal";
import ConnectionList from "shared/components/ConnectionList";
import { NavSidebar } from "shared/components/NavSidebar";
import useAnchor from "shared/hooks/useAnchor";

export const mockFriendList = [
  {
    id: 1,
    email: "fdsjsdf@mfds.com",
    firstName: "Khenen",
    lastName: "Jacqso",
    profilePic: "",
  },
  {
    id: 2,
    email: "fd113df@mfds.com",
    firstName: "Rob",
    lastName: "Bob",
    profilePic: "",
  },
  {
    id: 3,
    email: "zaswaejsdf@mfd6s.com",
    firstName: "Al",
    lastName: "Ringer",
    profilePic: "",
  },
];

function HomePageBody() {
  const { isDarkMode } = useTheme();

  return (
    <Box sx={{ bgcolor: isDarkMode ? "#18191a" : "white"}}>
      <Box sx={{mr: '20px', ml: '20px'}}>
      <Grid container columns={24}>
        <Grid
          item
          sm={5}
          md={4}
          lg={4}
          xl={4}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <NavSidebar />
        </Grid>
        <Grid
          item
          xs={24}
          sm={19}
          md={16}
          lg={16}
          xl={16}
          sx={{ mt: "25px", pr: "20px", pl: "20px" }}
        >
          <Feed />
        </Grid>
        <Grid
          item
          md={4}
          lg={4}
          xl={4}
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        >
          <ConnectionList connectionList={mockFriendList} />
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
}

export default HomePageBody;
