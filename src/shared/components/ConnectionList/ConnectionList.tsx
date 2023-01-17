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
      }}
    >
      <Typography
        variant="h6"
        fontWeight="600"
        sx={{
          textAlign: "center",
          color: theme.color,
          bgcolor: theme.backgroundColor,
        }}
      >
        Connections
      </Typography>
      {connectionList.map((connection) => (
        <Box display="flex" justifyContent="space-between">
          <UserProfileWidget
            {...connection}
            key={connection.id}
            boxProps={{ my: "10px" }}
          />
          <Box alignSelf="center">
            <ChatIcon />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ConnectionList;
