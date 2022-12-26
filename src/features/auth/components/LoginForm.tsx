import { Button, TextField, Box, Avatar, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { LoginFormType } from "../../../shared/types/FormType";
import { useForm } from "../../../shared/hooks";

const LoginForm = () => {
  const {
    form: { email, password },
    handleChange,
  } = useForm<LoginFormType>({ email: "", password: "" });

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
      <Box
        component="form"
        noValidate
        // onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
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
