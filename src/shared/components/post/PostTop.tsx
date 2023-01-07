import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { PersonAdd, PersonRemoveAlt1 } from "@mui/icons-material/";
import { UserProfileWidget } from "shared/components";

type PostTop = {
  readonly id: number;
  readonly userId: number;
  readonly profilePic?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly timeStamp?: Date;
};

function PostTop({
  id,
  userId,
  profilePic,
  firstName,
  lastName,
  timeStamp,
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
          <UserProfileWidget
            firstName="Fake"
            lastName="User"
            boxProps={{ cursor: "pointer" }}
          />
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
