import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
`;

function Registration(){
    const { register } = useAuth();
    const navigate = useNavigate();
    const heroStyle = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #111, #333)",
    };
    const cardStyle = {
        backgroundColor: "#1c1135",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(231, 225, 217, 0.94)",
        width: "100%",
        maxWidth: "400px",
        color:"white",
        fontFamily: "Arial, sans-serif",
    };
    const [formData, setFormData] = useState({
        firstname:"John",
        lastname:"Doe",
        country:"",
        phone:"",
        username:"",
        email:"",
        password:"",
        confirmPassword:""
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
    const inputStyle = {
        display: "block",
        marginBottom: "10px",
        boxSizing: "border-box",
        padding: "5px",
        width: "100%",  
        border: "2px solid gold",
        borderRadius: "5px",
        backgroundColor: "white",
        color: "black",
        fontSize: "16px",
    };
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
       country: formData.country,
       phone: formData.phone
     });
     
     alert("Registration successful!");
     navigate("/dashboard");
    };
    return(
        <section style={heroStyle}>
             <style>{errorInputStyle}</style>
             <h2 style={{textAlign:"center",color:"blue"}}>Register</h2>
            <form style={cardStyle} onSubmit={handleSubmit} noValidate>
               <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} style={inputStyle} required />
               <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} style={inputStyle} required />
                <select name="country" value={formData.country} onChange={handleCountryChange} style={inputStyle} required>
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

                  <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} style={inputStyle} required />
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

                <label style={{ gridColumn: "span 2", display: "flex", alignItems: "center", gap: "10px" }}>
                  <input type="checkbox" required />
                  I Agree to terms and condition
                </label>
                <button 
                 type="submit"
                    style={{
                       gridColumn: "span 2",
                       backgroundColor: "gold",
                       color: "black",
                       padding: "10px 20px",
                       border: "none",
                       borderRadius: "5px",
                       cursor: "pointer",
                       fontSize: "16px",
                       textAlign: "center",
                       alignItems: "center",
                       justifyContent:"center"
                    }}>
                Create Account
                </button>
                <p style={{gridAutoColumns: "span 2",color:"white"}}>Already have an account? <a href="/login" style={{color:"gold"}}>Click here to login</a></p>
            </form>
        </section>
    )
};  
export default Registration;      