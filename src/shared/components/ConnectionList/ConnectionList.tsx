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
    themeColor: { color, backgroundColor, navButtons },
  } = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        color: color,
        bgcolor: backgroundColor,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
              boxProps={{ my: "10px"}}
            />
            <Box alignSelf="center" sx={{ mx: 2 }}>
              <ChatIcon />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ConnectionList;
