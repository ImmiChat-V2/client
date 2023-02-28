import { Instagram, Facebook } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import useTheme from "features/theme/useTheme";

function Footer() {
  const {
    themeColor: { color, backgroundColor },
  } = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        p: "20px 0px 0 70px",
        minHeight: "20vh",
        height: "170px",
        width: "100%",
        backgroundColor,
        color,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            display: "flex",
            flexGrow: "1",
            color,
            fontSize: "30px",
            mr: "20px",
          }}
        >
          Immichat
        </Typography>
        <Box sx={{ mt: "10px", mr: "30px" }}>
          <Grid container columns={10} spacing={3}>
            <Grid
              item
              sm={2}
              sx={{
                mr: "20px",
                display: { xs: "none", sm: "flex" },
                flexDirection: { sm: "column" },
              }}
            >
              <Typography sx={{ mb: "2px", fontSize: "17px" }}>
                About
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>Company</Typography>
              <Typography sx={{ fontSize: "15px" }}>Contact</Typography>
              <Typography sx={{ fontSize: "15px" }}>FAQ</Typography>
            </Grid>
            <Grid
              item
              sm={2}
              sx={{
                mr: "40px",
                display: { xs: "none", sm: "flex" },
                flexDirection: { sm: "column" },
              }}
            >
              <Typography sx={{ mb: "2px", fontSize: "17px" }}>
                Community
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>News</Typography>
              <Typography sx={{ fontSize: "15px" }}>Career</Typography>
              <Typography sx={{ fontSize: "15px" }}>FAQ</Typography>
            </Grid>
            <Grid
              item
              sm={2}
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: { sm: "column" },
              }}
            >
              <Typography sx={{ mb: "2px", fontSize: "17px" }}>
                Support
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>Policies</Typography>
              <Typography sx={{ fontSize: "15px" }}>Terms</Typography>
              <Typography sx={{ fontSize: "15px" }}>Privacy</Typography>
            </Grid>
            <Grid item sm={2}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  className="column-headings"
                  sx={{ fontSize: "17px", mr: "2px" }}
                >
                  Follow
                </Typography>
                <Typography
                  className="column-headings"
                  sx={{ fontSize: "17px" }}
                >
                  Us
                </Typography>
              </Box>
              <Box
                className="socials-container"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Box className="facebook-icon">
                  <Facebook />
                </Box>
                <Box className="instagram-icon">
                  <Instagram />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "start" },
          mt: { xs: "60px", sm: "20px", md: "20px" },
        }}
      >
        <Typography>©2022 Immichat, Inc. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
