import { Instagram, Facebook } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import useTheme from "../../../features/theme/useTheme";

function Footer() {
  const {
    themeColor: { color, backgroundColor },
  } = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        p: "20px 0px 0 70px",
        height: "170px",
        width: "auto",
        backgroundColor,
        color,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item columns={2}>
          <Typography
            sx={{
              display: "flex",
              flexGrow: "1",
              color,
              fontSize: "30px",
            }}
          >
            Immichat
          </Typography>
        </Grid>
        <Grid
          container
          columns={10}
          spacing={2}
          sx={{
            width: "500px",
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        >
          <Grid item sm={2}>
            <Typography sx={{ mb: "2px", fontSize: "17px" }}>About</Typography>
            <Typography sx={{ fontSize: "15px" }}>Company</Typography>
            <Typography sx={{ fontSize: "15px" }}>Contact</Typography>
            <Typography sx={{ fontSize: "15px" }}>FAQ</Typography>
          </Grid>
          <Grid item sm={2} sx={{ mr: "20px" }}>
            <Typography sx={{ mb: "2px", fontSize: "17px" }}>
              Community
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>News</Typography>
            <Typography sx={{ fontSize: "15px" }}>Career</Typography>
            <Typography sx={{ fontSize: "15px" }}>FAQ</Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography sx={{ mb: "2px", fontSize: "17px" }}>
              Support
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>Policies</Typography>
            <Typography sx={{ fontSize: "15px" }}>Terms</Typography>
            <Typography sx={{ fontSize: "15px" }}>Privacy</Typography>
          </Grid>
          <Grid item sm={3}>
            <Box className="footer-socials">
              <Typography className="column-headings" sx={{ fontSize: "17px" }}>
                Follow Us
              </Typography>
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
                <Box className="tiktok-icon">
                  <Instagram />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          className="copyright-text"
          sx={{
            fontSize: "15px",
            color,
            textAlign: { xs: "center", sm: "center", md: "start" },
            mt: { xs: "60px", sm: "60px", md: "10px" },
          }}
        >
          ??2022 Immichat, Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
