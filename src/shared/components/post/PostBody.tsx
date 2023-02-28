import { Box, Typography } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { useState } from "react";
import { BasePostBodyType } from "shared/types";
import { getSecureUrl } from "shared/utils/cloudinaryUtil";

function PostBody({ content, media }: BasePostBodyType) {
  const {
    themeColor: { color },
  } = useTheme();

  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <Box component="section" sx={{ mt: "15px" }}>
        {content.length > 255 && !readMore ? (
          <Box sx={{ cursor: "pointer" }} onClick={() => setReadMore(true)}>
            <Typography sx={{ color }}>
              {content.substring(0, 255)}...
            </Typography>
            <Typography
              sx={{
                color: "#2655a4",
              }}
            >
              read more
            </Typography>
          </Box>
        ) : (
          <>{readMore && <Typography sx={{ color }}>{content}</Typography>}</>
        )}
      </Box>
      {media && (
        <Box
          component="div"
          sx={{
            display: "flex",
            mt: "20px",
            justifyContent: "center",
          }}
        >
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
        </Box>
      )}
    </>
  );
}

export default PostBody;
