import React from "react";
import { Box } from "@mui/material";
import ChatMessage from "./ChatMessage";

const messageOne = {
  isAuthUser: false,
  content:
    "Test 1uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
  profilePic:
    "https://i.kym-cdn.com/photos/images/newsfeed/000/897/576/ce1.jpg",
};

const messageTwo = {
  isAuthUser: true,
  content: "Test 2",
  profilePic:
    "https://i.pinimg.com/736x/42/2d/5e/422d5e2c44b71257ebd075eed07b75fa.jpg",
};

function ChatContainer() {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "80%",
        p: 2,
      }}
    >
      <Box
        component="div"
        sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        dwqhioqw
      </Box>
      <ChatMessage {...messageOne} />
      <ChatMessage {...messageTwo} />
    </Box>
  );
}

export default ChatContainer;
