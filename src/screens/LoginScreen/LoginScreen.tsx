import { CssBaseline, Paper, Grid, Button } from "@mui/material";
import { useState } from "react";
import { LoginForm, RegistrationFormModal } from "features/auth/components";

const LoginScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
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
