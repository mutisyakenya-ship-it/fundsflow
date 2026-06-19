import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-small">
        © {new Date().getFullYear()} FundFlow DAO. Built for community funding and transparent
        participation.
      </p>
      <div className="footer-links-row">
        <Link to="/" className="footer-link">
          X/Tweeter
        </Link>
        <Link to="/about" className="footer-link">
          GitHub
        </Link>
        <Link to="/contact" className="footer-link">
          Youtube
        </Link>
        <Link to="/register" className="footer-link">
          Discord
        </Link>
        <Link to="/login" className="footer-link">
          LinkedIn
        </Link>
      </div>
      <p className="footer-small">Empowering communities through secure and transparent voting.</p>
      <div>
        <p className="text-center">Privacy Policy</p>
        <p className="text-center">Terms of Service</p>
        <p className="text-center">Contact Us</p>
      </div>
    </footer>
  );
};

export default Footer;
