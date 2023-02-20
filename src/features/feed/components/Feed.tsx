import { useState, useEffect } from "react";
import { Box } from "@mui/material";
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

  async function updateFeed(updatedPost: BaseFeedType) {
    const updatedFeed = feed.filter((post) => post.id !== updatedPost.id);
    setFeed([updatedPost, ...updatedFeed]);
  }

  return (
    <>
      <Box sx={{ maxWidth: "800px", m: "auto" }}>
        <SharePost
          profilePic=""
          onPost={(data: any) => setFeed([data, ...feed])}
        />
        <Box className="feed-posts" sx={{ mb: "100px" }}>
          {feed.map((post) => (
            <Box key={post.id} sx={{ pt: "30px" }}>
              <Post
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
                onEdit={updateFeed}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Feed;
