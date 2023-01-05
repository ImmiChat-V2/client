import { Box, Typography } from "@mui/material";

type PostBody = {
  id: number;
  userId: number;
  content: string;
  media?: string;
};

function PostBody({ content, media }: PostBody) {
  return (
    <>
      <Box component="section" sx={{ mt: "15px" }}>
        <Typography color="#4d4d4d" sx={{fontSize: "16px"}}>
          {content}
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", mt: "20px", justifyContent: "center" }}
      >
        <Box
          component="img"
          sx={{ borderRadius: "10px" }}
          src={media}
        ></Box>
      </Box>
    </>
  );
}

export default PostBody;
