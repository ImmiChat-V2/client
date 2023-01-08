import { Box } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { NavSidebar } from "shared/components/NavSidebar";

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
    </Box>
  );
};

export default ProfilePage;
