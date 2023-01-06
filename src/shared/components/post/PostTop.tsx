import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { PersonAdd, PersonRemoveAlt1 } from "@mui/icons-material/";
import useTheme from "../../../features/theme/useTheme";

type PostTop = {
  id: number;
  userId: number;
  profilePic: string;
  firstName: string;
  lastName: string;
  timePosted: string;
};

function PostTop({
  id,
  userId,
  profilePic,
  firstName,
  lastName,
  timePosted,
}: PostTop) {
  const {
    themeColor: { color },
  } = useTheme();
  const [isFriend, setIsFriend] = useState(false);
  const handleFriendClick = () => {
    setIsFriend(!isFriend);
  };
  return (
    <>
      <Box
        component="div"
        sx={{
          pt: "25px",
          display: "flex",
        }}
        className="post-top"
      >
        <Box component="div" sx={{ mr: "10px" }}>
          <Box
            component="img"
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50px",
              cursor: "pointer",
            }}
            src={profilePic}
          ></Box>
        </Box>
        <Box
          component="div"
          className="post-user-info-and-utilities"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box component="span" sx={{ cursor: "pointer" }}>
            <Typography sx={{color}}>
              {firstName} {lastName}
            </Typography>
            <Typography color="#858585" sx={{ fontSize: "12px" }}>
              {timePosted}
            </Typography>
          </Box>
          <Box component="span" sx={{ display: "flex", cursor: "pointer" }}>
            <IconButton
              onClick={handleFriendClick}
              aria-label="add-user"
              sx={{
                backgroundColor: isFriend ? "#ffabab" : "#c1ffc1",
                "&:hover": {
                  backgroundColor: isFriend ? "#ffabab" : "#c1ffc1",
                },
                borderRadius: "50px",
                height: "40px",
                width: "40px",
                pt: "5px",
              }}
            >
              {isFriend ? (
                <PersonRemoveAlt1 sx={{ color: "#D22B2B", ml: "2px" }} />
              ) : (
                <PersonAdd sx={{ color: "#228B22", mr: "2px" }} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PostTop;
