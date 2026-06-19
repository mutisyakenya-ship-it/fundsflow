import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loadCountries, getCode } from "../data/countries";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Registration() {
  const { register,} = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "entrepreneur",
  });
  const [errors, setErrors] = useState({ username: "", password: "", confirmPassword: "" });
  const [countries, setCountries] = useState([]);
  const [countryCodes, setCountryCodes] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
// get countrty and code
  useEffect(() => {
    let mounted = true;
    loadCountries().then(({ countries: list, codes }) => {
      if (!mounted) return;
      setCountries(list || []);
      setCountryCodes(codes || {});
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const countryCode = getCode(selectedCountry, countryCodes) || "";
    setFormData({
      ...formData,
      country: selectedCountry,
      phone: countryCode || "",
    });
  };

  const validateUsername = (username) => {
    if (!username) return false;
    const lengthValid = username.length >= 6 && username.length <= 8;
    const specialCharValid = /[^A-Za-z0-9]/.test(username);
    const noSpaces = !/\s/.test(username);
    return lengthValid && specialCharValid && noSpaces;
  };

  const validatePassword = (password) => {
    if (!password) return false;
    const lengthValid = password.length >= 8 && password.length <= 24;
    const uppercaseValid = /[A-Z]/.test(password);
    const numberValid = /[0-9]/.test(password);
    const specialCharValid = /[^A-Za-z0-9]/.test(password);
    return lengthValid && uppercaseValid && numberValid && specialCharValid;
  };
  const getPasswordStrength = () => {
  const password = formData.password;

  if (password.length < 8) return "Weak";

  let score = 0;

  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return "Medium";

  return "Strong";
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUsernameChange = (e) => {
    setFormData({
      ...formData,
      username: e.target.value,
    });
    if (e.target.value) {
      setErrors({ ...errors, username: "" });
    }
  };

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
    if (e.target.value) {
      setErrors({ ...errors, password: "" });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setFormData({
      ...formData,
      confirmPassword: e.target.value,
    });
    if (e.target.value) {
      setErrors({ ...errors, confirmPassword: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = { username: "", password: "", confirmPassword: "" };

    if (!validateUsername(formData.username)) {
      nextErrors.username =
        "Username must be 6-8 characters and include at least one special character (no spaces).";
    }
    if (!validatePassword(formData.password)) {
      nextErrors.password =
        "Password must be 8-24 chars, include an uppercase letter, a number, and a special character.";
    }
    if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (nextErrors.username || nextErrors.password || nextErrors.confirmPassword) {
      const clearedData = { ...formData };
      if (nextErrors.username) clearedData.username = "";
      if (nextErrors.password) clearedData.password = "";
      if (nextErrors.confirmPassword) clearedData.confirmPassword = "";
      setFormData(clearedData);
      setErrors(nextErrors);
      return;
    }

    setErrors({ username: "", password: "", confirmPassword: "" });
    setLoading(true);

register({
  firstname: formData.firstname,
  lastname: formData.lastname,
  username: formData.username,
  email: formData.email,
  password: formData.password,
  country: formData.country,
  phone: formData.phone,
  role: formData.role,
});

setTimeout(() => {
  setLoading(false);

  alert("Registration successful!");

  navigate("/login", { replace: true });
}, 1000);};

  const fieldBorderClass = (hasError) =>
    hasError ? "form-input form-input--error" : "form-input form-input--gold";

  return (
    <section className="register-hero">
      <div className="register-header">
        <h1 className="register-title">FundsFlow DAO</h1>
        <p className="register-subtitle">Create your account</p>
        <p className="register-description">
          Join the decentralized funding ecosystem for entrepreneurs and investors.
        </p>
      </div>

      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <div className="register-name-grid">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
{/* country input */}
        <select
          name="country"
          value={formData.country}
          onChange={handleCountryChange}
          className="form-input"
          required
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
            {/* phoneinput */}
        <input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="form-input"
  required
/>
        <input
          type="text"
          name="username"
          placeholder={errors.username || "Username"}
          value={formData.username}
          onChange={handleUsernameChange}
          className={`${fieldBorderClass(errors.username)} ${errors.username ? "error-input" : ""}`}
          required
        />
        <div className="form-hint">
          Username must be 6-8 characters and include at least one special character.
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          required
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder={errors.password || "Password"}
            value={formData.password}
            onChange={handlePasswordChange}
            className={`password-input ${fieldBorderClass(errors.password)} ${errors.password ? "error-input" : ""}`}
            required
          />
          <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="form-hint">
          Password must be 8-24 chars, include an uppercase letter, a number, and a special character.
           <p className="form-hint">
  Password Strength: <strong>{getPasswordStrength()}</strong>
</p>
        </div>

        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder={errors.confirmPassword || "Confirm Password"}
            value={formData.confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={`password-input ${fieldBorderClass(errors.confirmPassword)} ${errors.confirmPassword ? "error-input" : ""}`}
            required
          />
          <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-password">
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
         {formData.confirmPassword &&
  formData.password === formData.confirmPassword && (
    <p
      style={{
        color: "green",
        fontSize: "13px",
        marginBottom: "10px",
      }}
    >
      ✓ Passwords match
    </p>
)}
        <label className="register-terms">
          <input type="checkbox" required />I Agree to terms and condition
        </label>

        <div className="role-section">
          <h3 className="role-section-title">Choose Your Role</h3>
          <p className="role-section-desc">Select how you want to use FundsFlow DAO.</p>

          <div className="role-cards">
            <label
              className={`role-card ${formData.role === "entrepreneur" ? "role-card--selected" : ""}`}
            >
              <input
                type="radio"
                name="role"
                value="entrepreneur"
                checked={formData.role === "entrepreneur"}
                onChange={handleChange}
                className="role-card-radio"
              />
              <h4 className="role-card-title">Entrepreneur</h4>
              <p className="role-card-desc">
                Submit startup ideas, raise funding, and manage your proposals.
              </p>
            </label>

            <label
              className={`role-card ${formData.role === "investor" ? "role-card--selected" : ""}`}
            >
              <input
                type="radio"
                name="role"
                value="investor"
                checked={formData.role === "investor"}
                onChange={handleChange}
                className="role-card-radio"
              />
              <h4 className="role-card-title">Investor</h4>
              <p className="role-card-desc">
                Discover promising startups, vote on proposals, and invest securely.
              </p>
            </label>
          </div>
        </div>

       <button
  type="submit"
  className="btn-register"
  disabled={loading}
>
  {loading ? "Creating Account..." : "Create Account"}
</button>
        <p className="register-login-text">
          Already have an account?{" "}
          <Link to="/login" className="link-gold">
            Click here to login
          </Link>
        </p>
      </form>
    </section>
  );

 
}

export default Registration;
