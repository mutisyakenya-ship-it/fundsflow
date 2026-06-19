import chart from "../assets/chart.jpeg";
import { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  useEffect(() => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={aboutRef} className="about-page">
      <h1 className="about-heading">About FundFlow DAO</h1>
      <p className="about-text">🚀 FundFlow DAO: Where Great Ideas Meet Decentralized Capital</p>
      <h2 className="about-heading">The problem we're solving</h2>
      <p className="about-text">
        Traditional funding is broken. Between gatekeeping banks and exclusive VC circles, thousands
        of world-changing business ideas never get off the ground simply because the "right" person
        didn't hear the pitch. FundFlow DAO is here to change that. We're democratizing access to
        capital by putting the power in the hands of the community. No more middlemen, no more
        bias—just pure, decentralized funding for the next generation of entrepreneurs.
      </p>
      <h3 className="about-heading">Our solution</h3>
      <p className="about-text">
        FundFlow DAO is a decentralized ecosystem that puts the power of progress back into the
        hands of the community. We've removed the middleman and replaced them with transparent,
        unchangeable code.Here, the quality of your idea matters more than the depth of your
        connections.
      </p>
      <h4 className="about-heading">How the Flow Works</h4>
      <p className="about-text">
        We believe in transparency. Our entire funding process is governed by a Smart Contract—a
        digital agreement that nobody can tamper with. Propose: Submit your business roadmap and
        budget directly to the blockchain. Vote: Our global community reviews your proposal. If it's
        a winner, they cast their votes using governance tokens. Fund: Once approved, our Smart
        Contract automatically triggers the release of funds from the DAO Treasury to your wallet.
        No paperwork. No delays.
      </p>
      <h5 className="about-heading">Join the movement</h5>
      <p className="about-text">
        Whether you are a builder with a vision or a community member looking to shape the future
        of business, you belong here.
      </p>
      <h6 className="about-heading">Flow Chart</h6>
      <div className="about-chart-wrap">
        <img src={chart} alt="Chart" className="about-chart-img" />
      </div>
    </div>
  );
};

export default About;
