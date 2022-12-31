import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo-img">
        <div className="footer-logo">Immichat</div>
        <div className="about-footer">
          <div className="about-text">About</div>
          <div className="extra-text">Company</div>
          <div className="extra-text">Contact</div>
          <div className="extra-text">FAQ</div>
        </div>
        <div className="community-footer">
          <div className="community-text">Community</div>
          <div className="extra-text">News</div>
          <div className="extra-text">Career</div>
        </div>
        <div className="support-footer">
          <div className="support-text">Support</div>
          <div className="extra-text">Policies</div>
          <div className="extra-text">Terms</div>
          <div className="extra-text">Privacy</div>
        </div>
        <div className="follow-us-footer">
          <div className="follow-us-text">Follow Us</div>
          <div className="socials-container">
            <div className="facebook-icon">
              <FacebookIcon />
            </div>
            <div className="instagram-icon">
              <InstagramIcon />
            </div>
            <div className="tiktok-icon">
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-text">
        ©2022 Immichat, Inc. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
