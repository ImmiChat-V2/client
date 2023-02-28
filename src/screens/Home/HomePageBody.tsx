import { Box, Grid } from "@mui/material";
import { Feed } from "features/feed/components";
import useTheme from "features/theme/useTheme";
import ConnectionList from "shared/components/ConnectionList";
import { NavSidebar } from "shared/components/NavSidebar";
<<<<<<< HEAD

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
=======
import { useSelector, useDispatch } from "react-redux";
import {
  getActiveConnections,
  handleGetConnections,
} from "features/connections/connectionsSlice";
import { useGetConnectionsQuery } from "features/connections/services/connectionsApiSlice";
import { getCurrentUser } from "../../features/auth/authSlice";
import { useEffect } from "react";
>>>>>>> 6510478b99e9563d98b428491a9872fc904f0bba

function HomePageBody() {
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const { data, isSuccess } = useGetConnectionsQuery(user.id);

  useEffect(() => {
    if (isSuccess) dispatch(handleGetConnections(data.data));
  }, [isSuccess]);

  const friendList = useSelector(getActiveConnections);

  return (
    <Box sx={{ bgcolor: isDarkMode ? "#18191a" : "white", minHeight: '75vh' }}>
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
            <Feed />
          </Grid>
          <Grid
            item
            md={4}
            lg={4}
            xl={4}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <ConnectionList connectionList={friendList} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePageBody;
