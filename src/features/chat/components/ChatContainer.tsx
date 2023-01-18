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

const messageThree = {
  isAuthUser: true,
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perspiciatis nulla facere ipsam praesentium illo incidunt fugiat. Sit sunt rerum laudantium laboriosam perspiciatis consequuntur? Molestiae quam quas provident inventore est!",
  profilePic:
    "https://i.pinimg.com/736x/42/2d/5e/422d5e2c44b71257ebd075eed07b75fa.jpg",
};

function ChatContainer() {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "100%",
        p: 2,
        overflow: "auto",
      }}
    >
      <ChatMessage {...messageOne} />
      <ChatMessage {...messageTwo} />
      <ChatMessage {...messageThree} />
      <ChatMessage {...messageOne} />
    </Box>
  );
}

export default ChatContainer;
