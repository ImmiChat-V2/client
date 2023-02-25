import { Box, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import UserProfileWidget from "../UserProfileWidget";
import useTheme from "features/theme/useTheme";

type ConnectionProps = {
  firstName: string;
  lastName: string;
  profilePic: string;
  id: number;
};

type ConnectionListProps = {
  connectionList: ConnectionProps[];
};

const ConnectionList = ({ connectionList }: ConnectionListProps) => {
  const {
    isDarkMode,
    themeColor: { color, backgroundColor, navButtons },
  } = useTheme();
  return (
    <Box
      sx={{
        bgcolor: isDarkMode ? "#18191a" : "white",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 72,
          width: "100%",
          height: "250px",
          color,
          bgcolor: isDarkMode ? "#18191a" : "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="600"
          fontSize="18px"
          sx={{
            textAlign: "center",
            color,
            mt: "20px",
            width: "100%",
          }}
        >
          Connections
        </Typography>
        <Box component="div" sx={{ overflow: "auto", mt: "5px" }}>
          {connectionList.map((connection) => (
            <Box
              display="flex"
              justifyContent="space-between"
              top="0"
              sx={{ mx: 3 }}
            >
              <UserProfileWidget
                {...connection}
                key={connection.id}
                boxProps={{ my: "10px" }}
              />
              <Box alignSelf="center" sx={{ mx: 2 }}>
                <ChatIcon />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectionList;
