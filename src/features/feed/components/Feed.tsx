import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import useTheme from "features/theme/useTheme";
import { SharePost } from "shared/components";
import { BaseFeedType } from "shared/types";
import Post from "shared/components/post/Post";
import axios from "axios";

function Feed() {
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
    themeColor: { color, navButtons, backgroundColor },
  } = useTheme();
  return (
    <>
      <Box sx={{ width: "700px" }}>
        <SharePost
          profilePic=""
          theme={{ color, navButtons, backgroundColor }}
          onPost={(data: any) => setFeed([data, ...feed])}
        />
        <Box className="feed-posts" sx={{ mb: "100px" }}>
          {feed.map((post) => (
            <Box sx={{ pt: "30px" }}>
              <Post
                key={post.id}
                basePostProps={{
                  id: post.id,
                  userId: post.userId,
                  firstName: post.user.firstName,
                  lastName: post.user.lastName,
                  media: post.media,
                  content: post.content,
                  likes: post.likes,
                  comments: post.comments,
                  timestamp: new Date(post.updatedAt),
                }}
                onDelete={(id: any) => setFeed(feed.filter((p) => p.id !== id))}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Feed;
