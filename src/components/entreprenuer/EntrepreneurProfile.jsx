
import React, { useState } from "react";

function EntrepreneurProfile() {
  const [profile, setProfile] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    industry: "",
    location: "",
    website: "",
    foundedYear: "",
    employees: "",
    fundingGoal: "",
    annualRevenue: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    description: "",
    businessLogo: null,
    registrationCertificate: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(profile);

    // Send profile to backend/API here

    alert("Business profile saved successfully!");
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ marginBottom: "25px" }}>
          Complete Your Business Profile
        </h1>

        <form onSubmit={handleSubmit}>
          <label>Business Name *</label>
          <input
            type="text"
            name="businessName"
            placeholder="Enter business name"
            value={profile.businessName}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Owner / Founder Name *</label>
          <input
            type="text"
            name="ownerName"
            placeholder="Enter your full name"
            value={profile.ownerName}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={profile.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="+254..."
            value={profile.phone}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Industry *</label>
          <input
            type="text"
            name="industry"
            placeholder="Technology, Agriculture, Retail..."
            value={profile.industry}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Business Location *</label>
          <input
            type="text"
            name="location"
            placeholder="City, Country"
            value={profile.location}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Website</label>
          <input
            type="url"
            name="website"
            placeholder="https://yourbusiness.com"
            value={profile.website}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Year Founded</label>
          <input
            type="number"
            name="foundedYear"
            placeholder="2024"
            value={profile.foundedYear}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Number of Employees</label>
          <input
            type="number"
            name="employees"
            placeholder="10"
            value={profile.employees}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Funding Goal (KES)</label>
          <input
            type="number"
            name="fundingGoal"
            placeholder="500000"
            value={profile.fundingGoal}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Annual Revenue (Optional)</label>
          <input
            type="number"
            name="annualRevenue"
            placeholder="1000000"
            value={profile.annualRevenue}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/..."
            value={profile.linkedin}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Facebook Page</label>
          <input
            type="url"
            name="facebook"
            placeholder="https://facebook.com/..."
            value={profile.facebook}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Instagram</label>
          <input
            type="url"
            name="instagram"
            placeholder="https://instagram.com/..."
            value={profile.instagram}
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Business Description *</label>
          <textarea
            name="description"
            rows="5"
            placeholder="Describe your business, products/services, and vision..."
            value={profile.description}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label>Upload Business Logo</label>
          <input
            type="file"
            name="businessLogo"
            accept="image/*"
            onChange={handleChange}
            style={inputStyle}
          />

          <label>Upload Business Registration Certificate</label>
          <input
            type="file"
            name="registrationCertificate"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              background: "gold",
              color: "black",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Save Business Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default EntrepreneurProfile;

