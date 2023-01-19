import { Box, Grid } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { ProfileCard } from "features/userprofile/components/ProfileCard";
import { NavSidebar } from "shared/components/NavSidebar";
import { mockUserData } from "shared/utils";
import { SharePost } from "shared/components";
import { Navbar } from "shared/components/navbar";
import { Footer } from "shared/components/footer";
import ConnectionList from "shared/components/ConnectionList";

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

const ProfilePage = () => {
  const { themeColor } = useTheme();

  return (
    <Box>
      <Navbar />
      <Box>
        <Grid container spacing={2} columns={24}>
          <Grid item display={{ xs: "none", md: "flex" }} md={5} lg={4} xl={3}>
            <NavSidebar theme={themeColor} />
          </Grid>
          <Grid item xs={24} md={14} lg={16} xl={17}>
            <ProfileCard
              user={mockUserData}
              theme={themeColor}
              isCurrentUser={true}
            />
            <SharePost profilePic="" theme={themeColor} />
          </Grid>
          <Grid item display={{ xs: "none", md: "flex" }} md={5} lg={4} xl={4}>
            <ConnectionList
              theme={themeColor}
              connectionList={mockFriendList}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProfilePage;
