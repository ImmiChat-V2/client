import { Instagram, Facebook } from "@mui/icons-material";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h1 className="footer-logo">Immichat</h1>
        <div className="footer-column">
          <h3 className="column-headings">About</h3>
          <h5>Company</h5>
          <h5>Contact</h5>
          <h5>FAQ</h5>
        </div>
        <div className="footer-column">
          <h3 className="column-headings">Community</h3>
          <h5>News</h5>
          <h5>Career</h5>
        </div>
        <div className="footer-column">
          <h3 className="column-headings">Support</h3>
          <h5>Policies</h5>
          <h5>Terms</h5>
          <h5>Privacy</h5>
        </div>
        <div className="footer-socials">
          <h3 className="column-headings">Follow Us</h3>
          <div className="socials-container">
            <div className="facebook-icon">
              <Facebook />
            </div>
            <div className="instagram-icon">
              <Instagram />
            </div>
            <div className="tiktok-icon">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <h5 className="copyright-text">
        ©2022 Immichat, Inc. All rights reserved.
      </h5>
    </footer>
  );
}

export default Footer;
