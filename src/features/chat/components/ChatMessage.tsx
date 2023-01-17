import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyIcon from "@mui/icons-material/Reply";
import { Box, Typography, Avatar } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { useState } from "react";

type ChatMessageProps = {
  isAuthUser: boolean;
  content: string;
  profilePic: string;
  media?: string;
};
const ChatMessage = ({
  isAuthUser,
  content,
  profilePic,
  media,
}: ChatMessageProps) => {
  const [hover, setHover] = useState(false);
  const justifyContent = isAuthUser ? "flex-end" : "flex-start";
  const handleHover = (): void => {
    setHover(!hover);
  };
  const { messageStyleObj } = useTheme();
  const { backgroundColor, color } = isAuthUser
    ? messageStyleObj["sender"]
    : messageStyleObj["receiver"];
  const avatarComponent = (
    <Avatar
      src={profilePic}
      alt="user avatar"
      sx={{ margin: "3px", alignSelf: "end" }}
    />
  );
  const hoverOptionsComponent = (
    <Box
      component="div"
      sx={{
        alignSelf: "center",
        display: "flex",
        flexDirection: isAuthUser ? "row-reverse" : "row",
        justifyContent: "space-between",
        margin: "0px 20px",
      }}
    >
      <InsertEmoticonIcon />
      <ReplyIcon />
      <MoreVertIcon />
    </Box>
  );

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent,
      }}
    >
      <Box
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        {hover && isAuthUser && hoverOptionsComponent}
        {!isAuthUser && avatarComponent}
        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Box
            component="div"
            sx={{
              maxWidth: "40%",
              borderRadius: "10px",
              display: "flex",
              backgroundColor,
              margin: 0,
              padding: 0,
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                color,
                padding: "10px",
                wordBreak: "break-word",
              }}
            >
              {content}
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              borderRadius: "10px",
              width: "100%",
              height: "100%",
              display: "block",
              margin: "10px 0px",
            }}
            src={media}
          />
        </Box>
        {hover && !isAuthUser && hoverOptionsComponent}
        {isAuthUser && avatarComponent}
      </Box>
    </Box>
  );
};

export default ChatMessage;
