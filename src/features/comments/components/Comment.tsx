import { Card, Typography } from "@mui/material";

const BaseComment = ({ isPost, data }: any) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        alignText: "left",
        mx: "1%",
        p: "5% 5% 10% 5%",
      }}
    >
      <Typography fontSize={8}>The Theory the the thumb was a thigh</Typography>
    </Card>
  );
};

export default BaseComment;
