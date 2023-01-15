import { useEffect, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField, Box, Avatar, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { LoginUserModel } from "../models/User.model";
import { useForm } from "shared/hooks";
import { useLoginMutation } from "../services/authApiSlice";
import { loginUser } from "../authSlice";
import { useCreatePostMutation } from "features/posts/services/postApiSlice";
import { CreatePostRequestModel } from "features/posts/models/Posts.model";

const mockPost: CreatePostRequestModel = {
  media: "",
  userId: 2,
  content: "strang",
  categoryName: "Homes",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const LoginForm = () => {
  const {
    form: { email, password },
    handleChange,
  } = useForm<LoginUserModel>({ email: "", password: "" });

  const [createPost] = useCreatePostMutation();
  console.log(createPost(mockPost));
  const [login, { data, isSuccess }] = useLoginMutation();
  const dispatch = useDispatch();
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (email && password) {
      await login({ email, password });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(loginUser(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  return (
    <Box
      sx={{
        mt: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
        <Button type="submit" fullWidth variant="contained">
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
