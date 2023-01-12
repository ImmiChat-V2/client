import { Box, Typography } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { BasePostBodyType } from "shared/types";

function PostBody({ content, media }: BasePostBodyType) {
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
          sx={{ borderRadius: "10px", width: '100%', height: '100%', display: 'block' }}
          src={media}
        ></Box>
      </Box>
    </>
  );
}

export default PostBody;