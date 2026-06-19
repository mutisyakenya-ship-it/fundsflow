import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loadCountries, getCode } from "../data/countries";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const errorInputStyle = `
  input.error-input::placeholder {
    color: #ff6b6b;
    opacity: 1;
  }
  input.error-input:-ms-input-placeholder {
    color: #ff6b6b;
  }
  input.error-input::-ms-input-placeholder {
    color: #ff6b6b;
  }
  .password-wrapper {
    position: relative;
    display: block;
    width: 100%;
  }
  .password-input {
    padding-right: 40px;
    width: 100%;
    box-sizing: border-box;
  }
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
    background: none;
    border: none;
    padding: 0;
    color: black;
  }
  .toggle-password:hover {
    color: #333;
  }
  @media (max-width: 768px) {
    form {
      padding: 15px !important;
      max-width: 90% !important;
    }
    input, select {
      font-size: 16px !important;
      padding: 8px !important;
    }
    button {
      font-size: 14px !important;
      padding: 8px 15px !important;
    }
  }
`;

function Registration(){
    const { register } = useAuth();
    const navigate = useNavigate();
    const heroStyle = { minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", padding: "30px", };
   const cardStyle = { background: "#ffffff", padding: "35px", borderRadius: "18px", width: "100%", maxWidth: "520px", boxShadow: "0 15px 40px rgba(0,0,0,0.15)", border: "1px solid #e5e7eb", boxSizing: "border-box", };
   const mobileCardStyle = { ...cardStyle, width: "100%", maxWidth: "95%", padding: "20px", };
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        country:"",
        phone:"",
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
        role:"entrepreneur"
    });
    const [errors, setErrors] = useState({ username: "", password: "", confirmPassword: "" });
    const [countries, setCountries] = useState([]);
    const [countryCodes, setCountryCodes] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const iconStyle = {
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        color: "black",
    };
    
    // Responsive styling
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const responsiveCardStyle = isMobile ? mobileCardStyle : cardStyle;

    useEffect(() => {
      let mounted = true;
      loadCountries().then(({ countries: list, codes }) => {
        if (!mounted) return;
        setCountries(list || []);
        setCountryCodes(codes || {});
      });
      return () => { mounted = false; };
    }, []);

const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const countryCode = getCode(selectedCountry, countryCodes) || "";
    setFormData({
        ...formData,
        country: selectedCountry,
        phone: countryCode || ""
    });
};
    const inputStyle = { display: "block", width: "100%", padding: "12px", marginBottom: "12px", borderRadius: "8px", border: "1px solid #d1d5db", backgroundColor: "#fff", color: "#111827", fontSize: "15px", outline: "none", boxSizing: "border-box", transition: "0.3s", };
    const validateUsername = (username) => {
     if (!username) return false;
     const lengthValid = username.length >= 6 && username.length <= 8;
     const specialCharValid = /[^A-Za-z0-9]/.test(username); // at least one non-alphanumeric
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
    const handleChange=(e)=>{
        setFormData({
           ...formData,
          [e.target.name]:e.target.value
        })
    };

    const handleUsernameChange=(e)=>{  
        setFormData({
           ...formData,
          username:e.target.value
        });
        if (e.target.value) {
            setErrors({...errors, username: ""});
        }
    };

    const handlePasswordChange=(e)=>{
        setFormData({
           ...formData,
          password:e.target.value
        });
        if (e.target.value) {
            setErrors({...errors, password: ""});
        }
    };

    const handleConfirmPasswordChange=(e)=>{
        setFormData({
           ...formData,
          confirmPassword:e.target.value
        });
        if (e.target.value) {
            setErrors({...errors, confirmPassword: ""});
        }
    };
    const handleSubmit = (e) => { 
         e.preventDefault(); 
        const nextErrors = { username: "", password: "", confirmPassword: "" };

     if (!validateUsername(formData.username)) {
         nextErrors.username = "Username must be 6-8 characters and include at least one special character (no spaces).";
     }
     if (!validatePassword(formData.password)) {
         nextErrors.password = "Password must be 8-24 chars, include an uppercase letter, a number, and a special character.";
     }
     if (formData.password !== formData.confirmPassword) {
         nextErrors.confirmPassword = "Passwords do not match.";
     }

     if (nextErrors.username || nextErrors.password || nextErrors.confirmPassword) {
         // Clear the error field values so error placeholder is visible
         const clearedData = {...formData};
         if (nextErrors.username) clearedData.username = "";
         if (nextErrors.password) clearedData.password = "";
         if (nextErrors.confirmPassword) clearedData.confirmPassword = "";
         setFormData(clearedData);
         setErrors(nextErrors);
         return;
     }

     setErrors({ username: "", password: "", confirmPassword: "" });
     // Register user and store their data
     register({
       firstname: formData.firstname,
       lastname: formData.lastname,
       username: formData.username,
       email: formData.email,
       password: formData.password,
       country: formData.country,
       phone: formData.phone,
       role:formData.role
     });
     
     alert("Registration successful!");
     navigate("/login {replace:true}");
    };
    return(
            <section style={heroStyle}>
  <style>{errorInputStyle}</style>

  <div
    style={{
      textAlign: "center",
      marginBottom: "25px",
    }}
  >
    <h1
      style={{
        color: "gold",
        fontSize: "38px",
        marginBottom: "8px",
        fontWeight: "bold",
      }}
    >
      FundsFlow DAO
    </h1>

    <p
      style={{
        color: "#f3f4f6",
        fontSize: "16px",
        marginBottom: "5px",
      }}
    >
      Create your account
    </p>

    <p
      style={{
        color: "#d1d5db",
        fontSize: "14px",
      }}
    >
      Join the decentralized funding ecosystem for entrepreneurs and investors.
    </p>
  </div>

  <form
    style={
      typeof window !== "undefined" && window.innerWidth <= 768
        ? mobileCardStyle
        : cardStyle
    }
    onSubmit={handleSubmit}
    noValidate
  >
              <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  }}
>
  {/* First Name input */}
  {/* Last Name input */}
</div>
                <select name="country" value={formData.country} onChange={handleCountryChange} style={inputStyle} required>
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

                 <PhoneInput
  country={"ke"}
  value={formData.phone}
  onChange={(phone) =>
    setFormData({
      ...formData,
      phone,
    })
  }
  inputStyle={{
    width: "100%",
    height: "46px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
  }}
  containerStyle={{
    marginBottom: "12px",
  }}
/>
                  <input type="text" name="username" placeholder={errors.username || "Username"} value={formData.username} onChange={handleUsernameChange} className={errors.username ? "error-input" : ""} style={{...inputStyle, borderColor: errors.username ? "#ff6b6b" : "gold", color: "black"}} required />
                  <div style={{fontSize: "12px", color: "#ccc", marginBottom: "8px"}}>Username must be 6-8 characters and include at least one special character.</div>
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                  <div className="password-wrapper">
                    <input type={showPassword ? "text" : "password"} name="password" placeholder={errors.password || "Password"} value={formData.password} onChange={handlePasswordChange} className={`password-input ${errors.password ? "error-input" : ""}`} style={{...inputStyle, borderColor: errors.password ? "#ff6b6b" : "gold", color: "black"}} required />
                    <span onClick={() => setShowPassword(!showPassword)} className="toggle-password" style={{position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "black"}}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div style={{fontSize: "12px", color: "#ccc", marginBottom: "8px"}}>Password must be 8-24 chars, include an uppercase letter, a number, and a special character.</div>
                  <div className="password-wrapper">
                    <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder={errors.confirmPassword || "Confirm Password"} value={formData.confirmPassword} onChange={handleConfirmPasswordChange} className={`password-input ${errors.confirmPassword ? "error-input" : ""}`} style={{...inputStyle, borderColor: errors.confirmPassword ? "#ff6b6b" : "gold", color: "black"}} required />
                    <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-password" style={{position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "black"}}>
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                <label style={{color:"black", gridColumn: "span 2", display: "flex", alignItems: "center", gap: "10px" }}>
                  <input type="checkbox" required />
                  I Agree to terms and condition
                </label>
                <div
  style={{
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
  <h3
    style={{
      color: "#111827",
      marginBottom: "5px",
      textAlign: "center",
    }}
  >
    Choose Your Role
  </h3>

  <p
    style={{
      color: "#6b7280",
      fontSize: "14px",
      textAlign: "center",
      marginBottom: "20px",
    }}
  >
    Select how you want to use FundsFlow DAO.
  </p>

  <div
    style={{
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
    }}
  >
    {/* Entrepreneur Card */}

    <label
      style={{
        flex: 1,
        border:
          formData.role === "entrepreneur"
            ? "2px solid gold"
            : "1px solid #d1d5db",
        borderRadius: "12px",
        padding: "15px",
        cursor: "pointer",
        background:
          formData.role === "entrepreneur"
            ? "#fff9e6"
            : "#ffffff",
      }}
    >
      <input
        type="radio"
        name="role"
        value="entrepreneur"
        checked={formData.role === "entrepreneur"}
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
      />

      <h4 style={{ margin: "5px 0", color: "#111827" }}>
         Entrepreneur
      </h4>

      <p
        style={{
          fontSize: "13px",
          color: "#6b7280",
          margin: 0,
        }}
      >
        Submit startup ideas, raise funding, and manage your proposals.
      </p>
    </label>

    {/* Investor Card */}

    <label
      style={{
        flex: 1,
        border:
          formData.role === "investor"
            ? "2px solid gold"
            : "1px solid #d1d5db",
        borderRadius: "12px",
        padding: "15px",
        cursor: "pointer",
        background:
          formData.role === "investor"
            ? "#fff9e6"
            : "#ffffff",
      }}
    >
      <input
        type="radio"
        name="role"
        value="investor"
        checked={formData.role === "investor"}
        onChange={handleChange}
        style={{ marginBottom: "10px" }}
      />

      <h4 style={{ margin: "5px 0", color: "#111827" }}>
         Investor
      </h4>

      <p
        style={{
          fontSize: "13px",
          color: "#6b7280",
          margin: 0,
        }}
      >
        Discover promising startups, vote on proposals, and invest securely.
      </p>
    </label>
  </div>
</div>
                <button type="submit" style={{ width: "100%", padding: "14px", background: "linear-gradient(90deg,#FFD700,#F4B400)", border: "none", borderRadius: "10px", fontWeight: "bold", fontSize: "16px", cursor: "pointer", }} > Create Account </button>
                <p style={{gridAutoColumns: "span 2",color:"white"}}>Already have an account? <Link to="/login" style={{color:"gold"}}>Click here to login</Link></p>
            </form>
        </section>
    )
};  
export default Registration;      