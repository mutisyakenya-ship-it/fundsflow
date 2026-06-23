import React, { useState } from "react";
import { entrepreneurProfile } from "../../services/api";

function EntrepreneurProfile() {
  const [profile, setProfile] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    industry: "",
    location: "",
    foundedYear: "",
    fundingGoal: "",
    annualRevenue: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    alert("Business profile saved successfully!");
  };

  return (
    <div className="panel-page">
      <div className="profile-card">
        <h1 className="profile-header-title">Complete Your Business Profile</h1>

        <form onSubmit={handleSubmit}>
          <label>Business Name *</label>
          <input
            type="text"
            name="businessName"
            placeholder="Enter business name"
            value={profile.businessName}
            onChange={handleChange}
            className="profile-input"
            required
          />

          <label>Owner / Founder Name *</label>
          <input
            type="text"
            name="ownerName"
            placeholder="Enter your full name"
            value={profile.ownerName}
            onChange={handleChange}
            className="profile-input"
            required
          />

          <label>Email *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={profile.email}
            onChange={handleChange}
            className="profile-input"
            required
          />

          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="+254..."
            value={profile.phone}
            onChange={handleChange}
            className="profile-input"
            required
          />

          <label>Industry *</label>
          <input
            type="text"
            name="industry"
            placeholder="Technology, Agriculture, Retail..."
            value={profile.industry}
            onChange={handleChange}
            className="profile-input"
            required
          />

          <label>Business Location *</label>
          <input
            type="text"
            name="location"
            placeholder="City, Country"
            value={profile.location}
            onChange={handleChange}
            className="profile-input"
            required
          />

          <label>Year Founded</label>
          <input
            type="number"
            name="foundedYear"
            placeholder="2024"
            value={profile.foundedYear}
            onChange={handleChange}
            className="profile-input"
          />

          <label>Funding Goal (KES)</label>
          <input
            type="number"
            name="fundingGoal"
            placeholder="500000"
            value={profile.fundingGoal}
            onChange={handleChange}
            className="profile-input"
          />

          <label>Annual Revenue (Optional)</label>
          <input
            type="number"
            name="annualRevenue"
            placeholder="1000000"
            value={profile.annualRevenue}
            onChange={handleChange}
            className="profile-input"
          />

          <label>Business Description *</label>
          <textarea
            name="description"
            rows="5"
            placeholder="Describe your business, products/services, and vision..."
            value={profile.description}
            onChange={handleChange}
            className="profile-input"
            required
          />

          <button type="submit" className="btn-profile-primary">
            Save Business Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default EntrepreneurProfile;
