import { CssBaseline, Paper, Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { LoginForm, RegistrationFormModal } from "features/auth/components";
import {
  getCurrentPostComments,
  getCommentView,
  postComment,
} from "features/comments/commentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCreateCommentMutation } from "features/comments/services/commentApiSlice";
import { BaseCommentModel } from "features/comments/models/Comments.model";

const testComment: any = {
  postId: 1,
  userId: 1,
  content: "Comment 3",
  media: "",
};

const LoginScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const [createComment, { data, isSuccess }] = useCreateCommentMutation();
  const handleComment = async () => await postComment(testComment);

  console.log(data);
  useEffect(() => {
    if (isSuccess) {
      dispatch(postComment(data));
    }
    createComment(testComment);
  }, []);
  // const commentList = useSelector(getCurrentPostComments);
  // const curcomment = useSelector(getCommentView);
  // console.log(commentList, curcomment);
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <RegistrationFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <CssBaseline />
      <Grid
        item
        md={7}
        sx={{
          background:
            "url(https://www1.nyc.gov/assets/immigrants/images/content/pages/Immigrant_New_York_White_600.gif) no-repeat center",
        }}
      />
      <Grid item sm={12} md={5} component={Paper} elevation={6} square>
        <LoginForm />
        <Button onClick={() => setIsOpen(true)}>Click me</Button>
      </Grid>
    </Grid>
  );
};

export default LoginScreen;
