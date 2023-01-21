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
const ConnectionList = ({
  theme,
  theme,
  connectionList,
}: ConnectionListProps) => {
  return (
    <Box maxWidth="200px">
      <Typography variant="h6" fontWeight="600" sx={{ textAlign: "center" }}>
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
