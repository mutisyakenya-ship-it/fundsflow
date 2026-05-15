import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD9A2V4V5X8X8X8X8X8X8X8X8X8X8X8X8",
    authDomain: "funflow-abc123.firebaseapp.com",
    projectId: "funflow-abc123",
    storageBucket: "funflow-abc123.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abc123def456ghi789jkl012"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login({ setIsAuthenticated }) {
const [loginData, setlogData] = useState({
    email:"",
    password:"",
    rememberMe: false
    });
const navigate = useNavigate();
const [showPassword, setShowpassword] = useState(false);
const [error, setError] = useState({});
const heroStyle = {
    minHeight: "100vh",
    display: "flex",    
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #111, #333)",
};
const cardStyle = {
    backgroundColor: "#10091d",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
    width: "100%",
    maxWidth: "400px",
    color:"black",
    fontFamily: "Arial, sans-serif",
};
const inputStyle = {
    display: "block",
    marginBottom: "10px",   
    padding: "8px",
    boxSizing: "border-box",
    paddingRight: "40px",
    width: "100%",
    border: "2px solid gold",
    borderRadius: "5px",
    backgroundColor: "#f8eeee",
    color: "black",
    fontSize: "16px",
};
const passwordContainer = {
    position: "relative",
    marginBottom: "10px",
};
const iconStyle = {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "black",
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); };
const validatePassword = (password) => {
     const lengthValid = password.length >= 8 && password.length <= 24;
     const uppercaseValid = /[A-Z]/.test(password); 
     const numberValid = /[0-9]/.test(password); 
     const specialCharValid = /[@$#%]/.test(password);
     return lengthValid && uppercaseValid && numberValid && specialCharValid; };
const handleChange=(e)=>{
    const { name, value,type,checked } = e.target;
        setlogData({
            ...loginData,
            [name]: type === "checkbox" ? checked : value
    });
};
const handleSubmit = (e) => {
    e.preventDefault();
    let newError = {};
    if (!validatePassword(loginData.password)) {
        newError.password = "Password must be 8-24 characters, include an uppercase letter, a number, and a special character (@, $, #, %).";
    }
    if (!validateEmail(loginData.email)) {
        newError.email = "Please enter a valid email address.";
    }
    setError(newError);
    if (Object.keys(newError).length === 0) {
        alert("login successful");
        setIsAuthenticated(true);
        navigate("/dashboard");
    }
};

const handleGoogleLogin = async () => {
    try {
        await signInWithPopup(auth, new GoogleAuthProvider());
        setIsAuthenticated(true);
        navigate("/dashboard");
    } catch (error) {
        console.error(error);
    }
};

const handleFacebookLogin = async () => {
    try {
        await signInWithPopup(auth, new FacebookAuthProvider());
        setIsAuthenticated(true);
        navigate("/dashboard");
    } catch (error) {
        console.error(error);
    }
};

const handleGithubLogin = async () => {
    try {
        await signInWithPopup(auth, new GithubAuthProvider());
        setIsAuthenticated(true);
        navigate("/dashboard");
    } catch (error) {
        console.error(error);
    }
};
return(
   < div style={heroStyle}>
    <div style={{position: "relative"}}> 
        <form style={cardStyle} onSubmit={handleSubmit}>
            <h2 style={{textAlign:"center",color:"gold",}}>login</h2>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleChange}
                style={inputStyle}
            />
            {error.email && (
                <p style={{ color: "red", marginBottom: "10px" }}>{error.email}</p>)}
            <div style={passwordContainer}>
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                style={inputStyle}
            />
            <span onClick={()=>setShowpassword(!showPassword)} style={iconStyle}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            </div>
            {error.password && (
                <p style={{ color: "blue", marginBottom: "10px" }}>{error.password}</p>)}
<label style={{display:"block", marginBottom:"10px"}}>
<input
 type="checkbox"
 name="rememberMe"style={{color:"white"}}
 checked={loginData.rememberMe}
 onChange={handleChange}
/>
 Remember Me
</label>
 <p style={{textAlign:"right"}}>
 <a href="/forgot-password" style={{color:"white", textDecoration:"underline", fontSize:"14px"}}>
Forgot Password?
</a>
</p>
<button type="submit" style={{             
 backgroundColor: "blue",
 color: "white",
 padding: "10px 20px",
 border: "none",
 borderRadius: "5px",
 cursor: "pointer",
 fontSize: "16px",
 }}>sign in</button>
<button
type="button"
onClick={handleGoogleLogin}
style={{
 width:"100%",
 padding:"10px",
 backgroundColor:"white",
 color:"black",
 border:"1px solid #ccc",
 borderRadius:"5px",
 marginTop:"10px",
 cursor:"pointer"
}}
>
Login with Google
</button>
<button
type="button"
onClick={handleFacebookLogin}
style={{
    width:"100%",
    padding:"10px",
    backgroundColor:"white",
    color:"black",
    border:"1px solid #ccc",        
    borderRadius:"5px",
    marginTop:"10px",
    cursor:"pointer"    
}}
>
Login with Facebook 
</button>
<button
type="button"
onClick={handleGithubLogin}
style={{
    width:"100%",
    padding:"10px",
    backgroundColor:"white",
    color:"black",
    border:"1px solid #ccc",
    borderRadius:"5px",
    marginTop:"10px",
    cursor:"pointer"
}}
>
Login with Github
</button>

        </form>
    </div>
    </div>
    );
}
 
export default Login;