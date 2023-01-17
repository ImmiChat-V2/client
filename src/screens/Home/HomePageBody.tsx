import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Feed } from "features/feed/components";
import useTheme from "features/theme/useTheme";
import Post from "shared/components/post/Post";
import axios from "axios";
import "./homePageBody.css";
import { BaseFeedType } from "shared/types";

function HomePageBody() {
  const [feed, setFeed] = useState<BaseFeedType[]>([]);

  useEffect(() => {
    async function fetchFeed() {
      const res = await axios.get("http://localhost:5000/feed", {
        withCredentials: true,
      });
      setFeed(res.data.data);
    }
    fetchFeed();
  }, []);

  const {
    isDarkMode,
    themeColor: { color, backgroundColor },
  } = useTheme();
  return (
    <Box sx={{ bgcolor: isDarkMode ? "black" : "white" }}>
      <Box
        className="home-container"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          pt: "30px",
          px: "30px",
          maxWidth: "1650px",
          m: "auto",
        }}
      >
        <Box className="left-sidebar" sx={{ maxWidth: "400px" }}>
          <Box
            sx={{
              bgcolor: backgroundColor,
              height: "350px",
              borderRadius: "10px",
              p: "20px",
              color,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis nulla facere ipsam praesentium illo incidunt fugiat.
            Sit sunt rerum laudantium laboriosam perspiciatis consequuntur?
            Molestiae quam quas provident inventore est!
          </Box>
        </Box>
        <Box className="middle-feed" sx={{ ml: "15px", mr: "15px" }}>
          <Feed />
          <Box className="feed-posts" sx={{ mb: "100px", width: "700px" }}>
            {feed.map((post) => (
              <Box sx={{ pt: "30px" }}>
                <Post
                  key={post.id}
                  id={post.id}
                  userId={post.userId}
                  firstName={post.user.firstName}
                  lastName={post.user.lastName}
                  media={post.media}
                  content={post.content}
                  likes={post.likes}
                  comments={post.comments}
                  timestamp={new Date(post.updatedAt)}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="right-sidebar" sx={{ maxWidth: "400px" }}>
          <Box
            sx={{
              bgcolor: backgroundColor,
              height: "500px",
              borderRadius: "10px",
              p: "20px",
              color,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis nulla facere ipsam praesentium illo incidunt fugiat.
            Sit sunt rerum laudantium laboriosam perspiciatis consequuntur?
            Molestiae quam quas provident inventore est!
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePageBody;
