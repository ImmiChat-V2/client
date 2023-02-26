import { Box, Typography } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { BasePostBodyType } from "shared/types";
import { getSecureUrl } from "shared/utils/cloudinaryUtil";

function PostBody({ content, media, categoryName }: BasePostBodyType) {
  const {
    themeColor: { color },
  } = useTheme();
  return (
    <>
      <Box component="section" sx={{ mt: "15px" }}>
        <Typography sx={{ fontSize: "16px", color }}>{content}</Typography>
        <Typography sx={{ fontSize: "16px", color, mt: '10px', fontWeight: '600' }}>{"#" + categoryName.toUpperCase()}</Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "flex", mt: "20px", justifyContent: "center" }}
      >
        {media && (
          <Box
            component="img"
            sx={{
              borderRadius: "10px",
              width: "100%",
              height: "100%",
              display: "block",
            }}
            src={getSecureUrl(media)}
          />
        )}
      </Box>
    </>
  );
}

export default PostBody;
