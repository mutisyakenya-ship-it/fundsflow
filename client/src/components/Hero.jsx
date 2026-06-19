import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <div
        className="hero-banner"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`,
        }}
      >
        <h1 className="hero-heading">Welcome to FundFlow DAO</h1>
        <p className="hero-text">
          Join us in revolutionizing the way we fund and support small businesses.
        </p>
        <div className="hero-buttons">
          <Link to="/register" className="hero-btn">
            Register
          </Link>
          <div className="hero-divider">
            <div className="hero-divider-line"></div>
            <span>OR</span>
            <div className="hero-divider-line"></div>
          </div>
          <Link to="/login" className="hero-btn">
            Login
          </Link>
        </div>
      </div>
      <section className="hero-faq">
        <h2 className="hero-faq-title">FAQ</h2>
        <div className="hero-faq-item">
          <strong>What is FundFlow DAO?</strong>
          <p>
            FundFlow DAO is a decentralized community platform that helps small businesses get
            funding through transparent voting and support. Enterprenuers write small business
            proposals and the communities evaluate the ideas and vote for them.
          </p>
        </div>
        <div className="hero-faq-item">
          <strong>How FUNDFLOW works?</strong>
          <p>
            Enterprenuers submit small business proposals, and the community evaluates them through
            transparent voting. Successful proposals receive funding from the DAO's treasury.
          </p>
        </div>
        <div className="hero-faq-item">
          <strong>What makes FUNDFLOW DAO different?</strong>
          <p>
            FundFlow DAO stands out by providing a transparent and community-driven approach to
            funding small businesses. Unlike traditional funding methods, our platform allows the
            community to directly participate in the decision-making process, ensuring that the
            most promising ideas receive support.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hero;
