import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
  function Registration(){
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
        firstname:"",
        lastname:"",
        country:"",
        phone:"",
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const country = [
"Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan",
"Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
"Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Côte d’Ivoire","Croatia","Cuba","Cyprus","Czechia",
"Denmark","Djibouti","Dominica","Dominican Republic",
"Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
"Fiji","Finland","France",
"Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
"Haiti","Holy See (Vatican City)","Honduras","Hungary",
"Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
"Jamaica","Japan","Jordan",
"Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
"Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
"Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
"Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
"Oman",
"Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
"Qatar",
"Romania","Russia","Rwanda",
"Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
"Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
"Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan",
"Vanuatu","Venezuela","Vietnam",
"Yemen",
"Zambia","Zimbabwe"
].sort((a, b) => a.localeCompare(b));
const countryCodes = {
  Afghanistan: "+93",
  Albania: "+355",
  Algeria: "+213",
  Andorra: "+376",
  Angola: "+244",
  "Antigua and Barbuda": "+1-268",
  Argentina: "+54",
  Armenia: "+374",
  Australia: "+61",
  Austria: "+43",
  Azerbaijan: "+994",
  Bahamas: "+1-242",
  Bahrain: "+973",
  Bangladesh: "+880",
  Barbados: "+1-246",
  Belarus: "+375",
  Belgium: "+32",
  Belize: "+501",
  Benin: "+229",
  Bhutan: "+975",
  Bolivia: "+591",
  "Bosnia and Herzegovina": "+387",
  Botswana: "+267",
  Brazil: "+55",
  Brunei: "+673",
  Bulgaria: "+359",
  "Burkina Faso": "+226",
  Burundi: "+257",
  "Cabo Verde": "+238",
  Cambodia: "+855",
  Cameroon: "+237",
  Canada: "+1",
  "Central African Republic": "+236",
  Chad: "+235",
  Chile: "+56",
  China: "+86",
  Colombia: "+57",
  Comoros: "+269",
  Congo: "+242",
  "Costa Rica": "+506",
  Croatia: "+385",
  Cuba: "+53",
  Cyprus: "+357",
  Czechia: "+420",
  Denmark: "+45",
  Djibouti: "+253",
  Dominica: "+1-767",
  "Dominican Republic": "+1-809",
  Ecuador: "+593",
  Egypt: "+20",
  "El Salvador": "+503",
  "Equatorial Guinea": "+240",
  Eritrea: "+291",
  Estonia: "+372",
  Eswatini: "+268",
  Ethiopia: "+251",
  Fiji: "+679",
  Finland: "+358",
  France: "+33",
  Gabon: "+241",
  Gambia: "+220",
  Georgia: "+995",
  Germany: "+49",
  Ghana: "+233",
  Greece: "+30",
  Grenada: "+1-473",
  Guatemala: "+502",
  Guinea: "+224",
  "Guinea-Bissau": "+245",
  Guyana: "+592",
  Haiti: "+509",
  Honduras: "+504",
  Hungary: "+36",
  Iceland: "+354",
  India: "+91",
  Indonesia: "+62",
  Iran: "+98",
  Iraq: "+964",
  Ireland: "+353",
  Israel: "+972",
  Italy: "+39",
  Jamaica: "+1-876",
  Japan: "+81",
  Jordan: "+962",
  Kazakhstan: "+7",
  Kenya: "+254",
  Kiribati: "+686",
  Kuwait: "+965",
  Kyrgyzstan: "+996",
  Laos: "+856",
  Latvia: "+371",
  Lebanon: "+961",
  Lesotho: "+266",
  Liberia: "+231",
  Libya: "+218",
  Liechtenstein: "+423",
  Lithuania: "+370",
  Luxembourg: "+352",
  Madagascar: "+261",
  Malawi: "+265",
  Malaysia: "+60",
  Maldives: "+960",
  Mali: "+223",
  Malta: "+356",
  "Marshall Islands": "+692",
  Mauritania: "+222",
  Mauritius: "+230",
  Mexico: "+52",
  Micronesia: "+691",
  Moldova: "+373",
  Monaco: "+377",
  Mongolia: "+976",
  Montenegro: "+382",
  Morocco: "+212",
  Mozambique: "+258",
  Myanmar: "+95",
  Namibia: "+264",
  Nauru: "+674",
  Nepal: "+977",
  Netherlands: "+31",
  "New Zealand": "+64",
  Nicaragua: "+505",
  Niger: "+227",
  Nigeria: "+234",
  "North Korea": "+850",
  "North Macedonia": "+389",
  Norway: "+47",
  Oman: "+968",
  Pakistan: "+92",
  Palau: "+680",
  Palestine: "+970",
  Panama: "+507",
  "Papua New Guinea": "+675",
  Paraguay: "+595",
  Peru: "+51",
  Philippines: "+63",
  Poland: "+48",
  Portugal: "+351",
  Qatar: "+974",
  Romania: "+40",
  Russia: "+7",
  Rwanda: "+250",
  "Saudi Arabia": "+966",
  Senegal: "+221",
  Serbia: "+381",
  Seychelles: "+248",
  "Sierra Leone": "+232",
  Singapore: "+65",
  Slovakia: "+421",
  Slovenia: "+386",
  "Solomon Islands": "+677",
  Somalia: "+252",
  "South Africa": "+27",
  "South Korea": "+82",
  "South Sudan": "+211",
  Spain: "+34",
  "Sri Lanka": "+94",
  Sudan: "+249",
  Suriname: "+597",
  Sweden: "+46",
  Switzerland: "+41",
  Syria: "+963",
  Tajikistan: "+992",
  Tanzania: "+255",
  Thailand: "+66",
  "Timor-Leste": "+670",
  Togo: "+228",
  Tonga: "+676",
  "Trinidad and Tobago": "+1-868",
  Tunisia: "+216",
  Turkey: "+90",
  Turkmenistan: "+993",
  Tuvalu: "+688",
  Uganda: "+256",
  Ukraine: "+380",
  "United Arab Emirates": "+971",
  "United Kingdom": "+44",
  "United States": "+1",
  Uruguay: "+598",
  Uzbekistan: "+998",
  Vanuatu: "+678",
  Venezuela: "+58",
  Vietnam: "+84",
  Yemen: "+967",
  Zambia: "+260",
  Zimbabwe: "+263"
};
const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const countryCode = countryCodes[selectedCountry] || "";
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
     const lengthValid = username.length >= 8 && username.length <= 24;
     const numbers = username.match(/[0-9]/g);
     const specialCharValid = /[@$#%]/.test(username);
     const numbersValid = !numbers || numbers.length <= 2; 
     const underscoreValid = (username.match(/_/g) || []).length <= 1; 
     return lengthValid && specialCharValid && numbersValid && underscoreValid; 
    };

    const validatePassword = (password) => {
     const lengthValid = password.length >= 8 && password.length <= 24;
     const uppercaseValid = /[A-Z]/.test(password); 
     const numberValid = /[0-9]/.test(password); 
     const specialCharValid = /[@$#%]/.test(password);
     return lengthValid && uppercaseValid && numberValid && specialCharValid;
   };
    const handleChange=(e)=>{
        setFormData({
           ...formData,
          [e.target.name]:e.target.value
        })
    };
    const handleSubmit = (e) => { 
         e.preventDefault(); 
        
     if (!validateUsername(formData.username))
         { alert("Invalid username!"); return; }
        else if (!validatePassword(formData.password))
         { alert("Invalid password!"); return; }
        else if (formData.password !== formData.confirmPassword) 
           { alert("Passwords do not match!"); return; };
     alert("Registration successful!");
    };
    return(
        <section style={heroStyle}>
             <h2 style={{textAlign:"center",color:"blue"}}>Register</h2>
            <form style={cardStyle} onSubmit={handleSubmit}>
               <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} style={inputStyle} required />
               <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} style={inputStyle} required />
                <select name="country" value={formData.country} onChange={handleCountryChange} style={inputStyle} required>
                    <option value="">Select Country</option>
                    {country.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>

                  <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} style={inputStyle} required />
                  <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} style={inputStyle} required />
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                  <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={inputStyle} required />
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} style={inputStyle} required />

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
                <p style={{gridAutoColumns: "span 2",color:"white"}}>Already have an account? <a href="/login"><p style={{color:"gold"}}>Click here to login</p></a></p>
            </form>
        </section>
    )
};  
export default Registration;      