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

  const handleLikeDislike = (id: any, userId: any, flag: any) => {
    var postLikes = [...feed[feed.findIndex((p) => p.id === id)].likes];
    flag > 0
      ? postLikes.push({ id: userId })
      : (postLikes = postLikes.filter((like) => like.id !== userId));
    setFeed(feed.map((p) => (p.id === id ? { ...p, likes: postLikes } : p)));
  };

  return (
    <>
      <Box sx={{ maxWidth: "800px", m: 'auto' }}>
        <SharePost
          profilePic=""
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
                onLike={handleLikeDislike}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Feed;
