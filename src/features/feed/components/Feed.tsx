import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { SharePost } from "shared/components";
import { BaseFeedType } from "shared/types";
import Post from "shared/components/post/Post";
import axios from "shared/utils/axios";

type FeedProps = {
  id?: string;
};

function Feed({ id }: FeedProps) {
  const [feed, setFeed] = useState<BaseFeedType[]>([]);

  useEffect(() => {
    async function fetchFeed() {
      const res = await axios.get(`http://localhost:5000/feed/${id}`, {
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

  async function deleteFeed(id: number) {
    const updatedFeed = feed.filter((post) => post.id !== id);
    setFeed(updatedFeed);
  }

  const handleLikeDislike = (id: number, userId: number, isLiked: boolean) => {
    let postLikes = [...feed[feed.findIndex((p) => p.id === id)].likes];
    isLiked
      ? postLikes.push({ id: userId })
      : (postLikes = postLikes.filter((like) => like.id !== userId));
    setFeed(feed.map((p) => (p.id === id ? { ...p, likes: postLikes } : p)));
  };

  return (
    <>
      <Box sx={{ maxWidth: "700px", m: "auto" }}>
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
                onDelete={deleteFeed}
                onEdit={updateFeed}
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
