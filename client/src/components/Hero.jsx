import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import banner from "../assets/banner.jpg";
import Footer from "./Footer";

import approval from "../assets/approval.jpg";
import graphic from "../assets/graphic.jpg";
import coin from "../assets/coin.jpg";
import ladder from "../assets/ladder.jpg";

const Hero = () => {
  const imageCards = [
    { src: approval, alt: "Community Approval", title: "Community Approval", description: "Every proposal is voted on by the DAO..." },
    { src: graphic, alt: "Impact Analytics", title: "Impact Analytics", description: "Visualize project performance and growth..." },
    { src: coin, alt: "Funding Flow", title: "Funding Flow", description: "Track secure funding movements..." },
    { src: ladder, alt: "Business Growth", title: "Business Growth", description: "Support entrepreneurs to climb the next level..." },
  ];

  useEffect(() => {
    // Animate hero heading and text
    gsap.from(".hero-heading", { y: -50, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(".hero-text", { y: 30, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
    gsap.from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.8, delay: 0.6, stagger: 0.2, ease: "back.out(1.7)" });

    // Animate FAQ items
    gsap.from(".hero-faq-item", {
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.2,
      delay: 1,
      ease: "power2.out",
    });

    // Animate feature cards
    gsap.from(".dashboard-image-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      delay: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      {/* Banner */}
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
          <Link to="/register" className="hero-btn">Register</Link>
          <div className="hero-divider">
            <div className="hero-divider-line"></div>
            <span>OR</span>
            <div className="hero-divider-line"></div>
          </div>
          <Link to="/login" className="hero-btn">Login</Link>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="hero-faq">
        <h2 className="hero-faq-title">FAQ</h2>
        <div className="hero-faq-item">
          <strong>What is FundFlow DAO?</strong>
          <p>FundFlow DAO is a decentralized community platform that helps small businesses get funding through transparent voting and support.</p>
        </div>
        <div className="hero-faq-item">
          <strong>How does FundFlow work?</strong>
          <p>Entrepreneurs submit proposals, and the community evaluates them through transparent voting. Successful proposals receive funding from the DAO's treasury.</p>
        </div>
        <div className="hero-faq-item">
          <strong>What makes FundFlow DAO different?</strong>
          <p>Unlike traditional funding methods, our platform allows the community to directly participate in decision-making, ensuring promising ideas receive support.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="hero-features">
        <h2 className="hero-features-title">Why FundFlow DAO?</h2>
        <div className="dashboard-grid">
          {imageCards.map((card) => (
            <div key={card.alt} className="dashboard-image-card">
              <img src={card.src} alt={card.alt} className="dashboard-image" />
              <div className="dashboard-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hero;
