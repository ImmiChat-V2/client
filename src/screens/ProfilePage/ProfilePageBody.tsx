import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { ProfileCard } from "features/userprofile/components/ProfileCard";
import { NavSidebar } from "shared/components/NavSidebar";
import ConnectionList from "shared/components/ConnectionList";
import { getCurrentUser } from "features/auth/authSlice";
import { Feed } from "features/feed/components";
import { useParams } from "react-router-dom";

const ProfilePageBody = () => {
  const { themeColor } = useTheme();
  const user = useSelector(getCurrentUser);
  const { id } = useParams();

  return (
    <Box sx={{ bgcolor: themeColor.pageColor }}>
      <Box sx={{ mx: "20px" }}>
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
            <Box sx={{ maxWidth: "1200px", m: "auto" }}>
              <ProfileCard
                user={user}
                theme={themeColor}
                isCurrentUser={true}
              />
              <Feed id={id} />
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            lg={4}
            xl={4}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <ConnectionList />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfilePageBody;
