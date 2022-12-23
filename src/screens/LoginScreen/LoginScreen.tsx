import {
  CssBaseline,
  Paper,
  Grid,
} from "@mui/material";
import LoginForm from "../../features/auth/components/LoginForm";

const LoginScreen = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://www1.nyc.gov/assets/immigrants/images/content/pages/Immigrant_New_York_White_600.gif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default LoginScreen;
