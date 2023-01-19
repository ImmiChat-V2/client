import { Instagram, Facebook } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import useTheme from "../../../features/theme/useTheme";
import "./footer.css";

function Footer() {
  const {
    themeColor: { color, backgroundColor },
  } = useTheme();

  return (
      <Box
        component="footer"
        sx={{
          pl: "70px",
          pr: "40px",
          pt: "20px",
          height: "170px",
          width: "auto",
          backgroundColor,
          color,
        }}
      >
        <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
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
          <Box sx={{ mr: "40px" }} className="footer-column">
            <Typography sx={{ mb: "2px", fontSize: "17px" }}>About</Typography>
            <Typography sx={{ fontSize: "15px" }}>Company</Typography>
            <Typography sx={{ fontSize: "15px" }}>Contact</Typography>
            <Typography sx={{ fontSize: "15px" }}>FAQ</Typography>
          </Box>
          <Box sx={{ mr: "40px" }} className="footer-column">
            <Typography sx={{ mb: "2px", fontSize: "17px" }}>
              Community
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>News</Typography>
            <Typography sx={{ fontSize: "15px" }}>Career</Typography>
            <Typography sx={{ fontSize: "15px" }}>FAQ</Typography>
          </Box>
          <Box sx={{ mr: "40px" }} className="footer-column">
            <Typography sx={{ mb: "2px", fontSize: "17px" }}>
              Support
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>Policies</Typography>
            <Typography sx={{ fontSize: "15px" }}>Terms</Typography>
            <Typography sx={{ fontSize: "15px" }}>Privacy</Typography>
          </Box>
          <Box className="footer-socials">
            <Typography className="column-headings" sx={{ fontSize: "17px" }}>
              Follow Us
            </Typography>
            <Box
              className="socials-container"
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
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
        </Box>
        <Box>
          <Typography
            className="copyright-text"
            sx={{ fontSize: "15px", mt: "10px", color }}
          >
            ©2022 Immichat, Inc. All rights reserved.
          </Typography>
        </Box>
      </Box>
  );
}

export default Footer;
