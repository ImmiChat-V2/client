import { Box, Grid } from "@mui/material";
import { Feed } from "features/feed/components";
import useTheme from "features/theme/useTheme";
import { useState } from "react";
import ConfirmationModal from "shared/components/ConfirmationModal";
import ConnectionList from "shared/components/ConnectionList";
import { NavSidebar } from "shared/components/NavSidebar";
import { useSelector, useDispatch } from "react-redux";
import {
  getActiveConnections,
  handleGetConnections,
} from "features/connections/connectionsSlice";
import { useGetConnectionsQuery } from "features/connections/services/connectionsApiSlice";
import { getCurrentUser } from "../../features/auth/authSlice";
import { useEffect } from "react";

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
    <Box sx={{ bgcolor: isDarkMode ? "#18191a" : "white" }}>
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
