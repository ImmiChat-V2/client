import { Box, Typography } from "@mui/material";
import useTheme from "../../../features/theme/useTheme";

type PostBody = {
  id: number;
  userId: number;
  content: string;
  media?: string;
};

function PostBody({ content, media }: PostBody) {
  const {
    themeColor: { color },
  } = useTheme();
  return (
    <>
      <Box component="section" sx={{ mt: "15px" }}>
        <Typography sx={{fontSize: "16px", color}}>
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
