import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import block from "../assets/block.jpg";
import header from "../assets/header.jpg";

function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${block})` }}>
      <div className="navbar-logo-wrap">
        <img src={header} alt="logo" className="navbar-logo-img" />
      </div>

      <h2 className="navbar-brand">FUNDFLOW DAO</h2>

      <div className="navbar-links">
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>

      <div className="navbar-actions">
        <button onClick={handleLogout} className="navbar-btn">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
