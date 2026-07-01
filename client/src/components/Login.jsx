import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const [loginData, setlogData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  const [showPassword, setShowpassword] = useState(false);
  const [error, setError] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const lengthValid = password.length >= 8 && password.length <= 24;
    const uppercaseValid = /[A-Z]/.test(password);
    const numberValid = /[0-9]/.test(password);
    const specialCharValid = /[@$#%]/.test(password);
    return lengthValid && uppercaseValid && numberValid && specialCharValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setlogData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newError = {};
    if (!validatePassword(loginData.password)) {
      newError.password =
        "Password must be 8-24 characters, include an uppercase letter, a number, and a special character (@, $, #, %).";
    }
    if (!validateEmail(loginData.email)) {
      newError.email = "Please enter a valid email address.";
    }
    setError(newError);
    if (Object.keys(newError).length === 0) {
      try {
        await login({ email: loginData.email, password: loginData.password });
        navigate("/dashboard");
      } catch (err) {
        console.error('Login error', err);
        alert(err?.response?.data?.error || err?.message || 'Invalid email or password');
      }
    }
  };

  return (
    <div className="login-hero">
      <div className="login-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleChange}
            className="login-input"
          />
          {error.email && <p className="login-error">{error.email}</p>}
          <div className="login-password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              className="login-input"
            />
            <span onClick={() => setShowpassword(!showPassword)} className="login-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {error.password && <p className="login-error-password">{error.password}</p>}
          <label className="login-remember">
            <input
              type="checkbox"
              name="rememberMe"
              checked={loginData.rememberMe}
              onChange={handleChange}
            />
            Remember Me
          </label>
          <p className="text-right color-black">
            <a href="/forgot-password" className="login-forgot-link">
              Forgot Password?
            </a>
          </p>
          <button type="submit" className="btn-sign-in">
            sign in
          </button>
          <p className="login-signup-text">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
