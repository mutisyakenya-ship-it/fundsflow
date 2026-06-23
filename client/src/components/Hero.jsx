import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import banner from "../assets/banner.jpg";
import Footer from "./Footer";

import approval from "../assets/approval.jpg";
import graphic from "../assets/graphic.jpg";
import coin from "../assets/coin.jpg";
import ladder from "../assets/ladder.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageCards = [
    { src: approval, alt: "Community Approval", title: "Community Approval", description: "Every proposal is voted on by the DAO..." },
    { src: graphic, alt: "Impact Analytics", title: "Impact Analytics", description: "Visualize project performance and growth..." },
    { src: coin, alt: "Funding Flow", title: "Funding Flow", description: "Track secure funding movements..." },
    { src: ladder, alt: "Business Growth", title: "Business Growth", description: "Support entrepreneurs to climb the next level..." },
  ];

  useEffect(() => {
    // Split heading into spans for staggered reveal
    const heading = document.querySelector(".hero-heading");
    if (heading) {
      heading.innerHTML = heading.textContent
        .split(" ")
        .map(word => `<span style="display:inline-block">${word}</span>`)
        .join(" ");
    }

    // Hero heading cinematic reveal
    gsap.from(".hero-heading span", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Hero text fade-in
    gsap.from(".hero-text", {
      y: 20,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power2.out",
    });

    // Buttons with floating loop
    gsap.to(".hero-btn", {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // FAQ items slide-in on scroll
    gsap.from(".hero-faq-item", {
      opacity: 0,
      x: -40,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-faq",
        start: "top 80%",
      },
    });

    // Feature cards staggered reveal on scroll
    gsap.from(".dashboard-image-card", {
      opacity: 0,
      y: 60,
      duration: 1.2,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero-features",
        start: "top 80%",
      },
    });

    // Banner parallax effect
    gsap.to(".hero-banner", {
      backgroundPositionY: "40%",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-banner",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Feature images parallax effect
    gsap.utils.toArray(".dashboard-image").forEach((img) => {
      gsap.to(img, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Gradient overlay fade-in layers
    gsap.utils.toArray(".overlay-gradient").forEach((overlay) => {
      gsap.fromTo(overlay,
        { opacity: 0 },
        {
          opacity: 0.4,
          scrollTrigger: {
            trigger: overlay,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    });

    // Text parallax effect
    gsap.to(".hero-heading", {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-banner",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".hero-text", {
      y: -15,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-banner",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Hover animations for feature cards
    const cards = document.querySelectorAll(".dashboard-image-card");
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0px 15px 25px rgba(0,0,0,0.3)",
          duration: 0.4,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
          duration: 0.4,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

  return (
    <>
      {/* Banner */}
      <div
        className="hero-banner"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        {/* Overlay gradients for fade-in parallax */}
        <div className="overlay-gradient" style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(to bottom, rgba(255,200,150,0.3), transparent)"}}></div>
        <div className="overlay-gradient" style={{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(to top, rgba(150,200,255,0.3), transparent)"}}></div>

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
