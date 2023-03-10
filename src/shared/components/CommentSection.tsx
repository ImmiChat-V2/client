import { useEffect, useState } from "react";
import { Box, List, Typography } from "@mui/material";
import useTheme from "features/theme/useTheme";
import axios from "shared/utils/axios";
import BaseComment from "features/comments/components/Comment";
import { BaseCommentModel } from "features/comments/models/Comments.model";

type CommentSectionProps = {
  id: number;
};

function CommentSection({ id }: CommentSectionProps) {
  const {
    themeColor: { color, navButtons },
  } = useTheme();
  const [commentData, setCommentData] = useState<BaseCommentModel[]>([]);

  useEffect(() => {
    async function fetchComments() {
      const res = await axios.get(
        `http://localhost:5000/posts/${id}/comments`,
        {
          withCredentials: true,
        }
      );
      setCommentData(res.data.data);
    }
    fetchComments();
  }, []);

  return (
    <>
      {commentData.length > 0 ? (
        <Box sx={{ bgcolor: navButtons, height: "200px", overflow: "auto" }}>
          <List sx={{ width: "100%", mt: "-9px", px: "2px" }}>
            {commentData.map((comment: BaseCommentModel) => (
              <Box sx={{ width: "100%" }}>
                <BaseComment
                  key={comment.id}
                  commentData={{
                    ...comment,
                    likes: [],
                    user: { firstName: "Test", lastName: "User" },
                    updatedAt: new Date(comment.updatedAt),
                  }}
                />
              </Box>
            ))}
          </List>
        </Box>
      ) : (
        <Typography
          sx={{ color, fontSize: "15px", textAlign: "center", pb: "10px" }}
        >
          Be the first to comment!
        </Typography>
      )}
    </>
  );
}

export default CommentSection;
