import { Box, Typography } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { BasePostBodyType } from "shared/types";
import { getSecureUrl } from "shared/utils/cloudinaryUtil";

function PostBody({ content, media }: BasePostBodyType) {
  const {
    themeColor: { color },
  } = useTheme();
  return (
    <>
      <Box component="section" sx={{ mt: "15px" }}>
        <Typography sx={{ fontSize: "16px", color }}>{content}</Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", mt: "20px", justifyContent: "center" }}
      >
        <Box
          component="img"
          sx={{
            borderRadius: "10px",
            minWidth: "200px",
            maxWidth: "200px",
            display: "block",
          }}
          src={getSecureUrl(media!)}
        ></Box>
      </Box>
    </>
  );
}

export default PostBody;
