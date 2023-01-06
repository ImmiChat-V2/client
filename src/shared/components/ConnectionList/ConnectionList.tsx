import { Box, Typography } from "@mui/material";
import UserProfileWidget from "../UserProfileWidget";

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
  return (
    <Box maxWidth="200px">
      <Typography variant="h6" fontWeight="600" sx={{ textAlign: "center" }}>
        Connections
      </Typography>
      {connectionList.map((connection) => (
        <UserProfileWidget
          {...connection}
          key={connection.id}
          boxProps={{ my: "10px" }}
        />
      ))}
    </Box>
  );
};

export default ConnectionList;
