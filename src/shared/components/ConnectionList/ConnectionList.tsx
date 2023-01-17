import { Box, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import UserProfileWidget from "../UserProfileWidget";

type ConnectionProps = {
  firstName: string;
  lastName: string;
  profilePic: string;
  id: number;
};

type ConnectionListProps = {
  theme: any;
  connectionList: ConnectionProps[];
};
const ConnectionList = ({ theme, connectionList }: ConnectionListProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        color: theme.color,
        bgcolor: theme.backgroundColor,
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
            color: theme.color,
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
              boxProps={{ my: "10px" }}
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
