import { Box, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import UserProfileWidget from "../UserProfileWidget";
import useTheme from "features/theme/useTheme";

type ConnectionProps = {
  firstName: string;
  lastName: string;
  profilePic?: string;
  id: number;
};

type ConnectionListProps = {
  connectionList: ConnectionProps[];
};

const ConnectionList = ({ connectionList }: ConnectionListProps) => {
  const {
    isDarkMode,
    themeColor: { color },
  } = useTheme();
  return (
    <Box
      sx={{
        bgcolor: isDarkMode ? "#18191a" : "white",
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 72,
          width: "100%",
          height: "250px",
          mt: '22px',
          color,
          bgcolor: isDarkMode ? "#18191a" : "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{
            textAlign: "center",
            color: color,
          }}
        >
          Connections
        </Typography>
        {connectionList.length > 0 ? (
          connectionList.map((connection) => (
            <Box
              key={connection.id}
              sx={{
                mx: 3,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mr: "10px",
                width: "100%",
              }}
            >
              <UserProfileWidget
                {...connection}
                key={connection.id}
                boxProps={{ my: "10px" }}
              />
              <Box
                alignSelf="center"
                sx={{ mx: 2, display: { md: "none", lg: "flex" } }}
              >
                <ChatIcon sx={{ mr: "10px" }} />
              </Box>
            </Box>
          ))
        ) : (
          <Typography
            sx={{
              pt: "5px",
              textAlign: "center",
              color: color,
            }}
          >
            Currently no connections
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ConnectionList;
