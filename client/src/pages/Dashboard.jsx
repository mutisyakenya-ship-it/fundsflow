import approval from "../assets/approval.jpg";
import graphic from "../assets/graphic.jpg";
import coin from "../assets/coin.jpg";
import ladder from "../assets/ladder.jpg";

function Dashboard() {
  const imageCards = [
    {
      src: approval,
      alt: "Community Approval",
      title: "Community Approval",
      description:
        "Every proposal is voted on by the DAO so funding stays fair, transparent, and community-driven. why banks limit access to capital when we can democratize it with blockchain? the power of the crowd can unlock opportunities for all. ",
    },
    {
      src: graphic,
      alt: "Impact Analytics",
      title: "Impact Analytics",
      description:
        "Visualize project performance and growth with clear metrics for stakeholders. clear insights empower informed decisions and demonstrate the real-world impact of community-funded projects. transparency builds trust and drives continued support for entrepreneurs across Africa and beyond.",
    },
    {
      src: coin,
      alt: "Funding Flow",
      title: "Funding Flow",
      description:
        "Track secure funding movements and reward contributions with on-chain clarity. blockchain transparency ensures every transaction is visible and verifiable, creating a trustworthy ecosystem where funders and entrepreneurs can connect with confidence. together, we can democratize access to capital and drive economic growth across Africa and global markets.",
    },
    {
      src: ladder,
      alt: "Business Growth",
      title: "Business Growth",
      description:
        "Support entrepreneurs to climb the next level with community capital and guidance.Together, we can drive economic growth and innovation across Africa  and global markets. By democratizing access to funding, we empower small businesses to thrive and create lasting impact in their communities.",
    },
  ];

  return (
    <div>
      <h2 className="dashboard-title">fundflow dao powered by community</h2>
      <div className="dashboard-box">
        <textarea
          className="dashboard-textarea"
          readOnly
          value={
            "Fundflow DAO is a decentralized platform designed to help individuals access funding for small-scale businesses. " +
            "Users across Africa can submit business ideas and receive community support through voting and blockchain transparency. " +
            "Smart contracts keep every fund transfer secure and visible, creating a fair alternative to traditional finance."
          }
          cols="30"
          rows="10"
        />
      </div>
      <div className="dashboard-grid">
        {imageCards.map((card, index) => (
          <div
            key={card.alt}
            className="dashboard-image-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img src={card.src} alt={card.alt} className="dashboard-image" />
            <div className="dashboard-card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
