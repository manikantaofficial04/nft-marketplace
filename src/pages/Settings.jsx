import { useState } from "react";
import {
  Search,
  Sun,
  Moon,
  Bell,
  UserRound,
} from "lucide-react";

import "./Settings.css";

function Settings({ darkMode, setDarkMode }) {
  const [activeTab, setActiveTab] = useState("Profile");
  const [toast, setToast] = useState("");

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  });

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;

    setPersonalInfo((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const saveProfile = () => {
    showToast("Profile updated successfully");
  };

  const savePersonalInfo = () => {
    showToast("Personal information saved");
  };

  const tabs = [
    "Profile",
    "Application",
    "Security",
    "Activity",
    "Payment Method",
    "API",
  ];

  return (
    <div
      className={`settings-page ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      {/* HEADER */}
      <header className="settings-header">
        <div className="settings-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search Here"
          />
        </div>

        <div className="settings-header-actions">
          <button
            className="settings-icon-button"
            onClick={() =>
              setDarkMode((value) => !value)
            }
          >
            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <button
            className="settings-icon-button"
            onClick={() =>
              showToast("No new notifications")
            }
          >
            <Bell size={20} />
          </button>

          <button
            className="settings-profile-button"
            onClick={() =>
              showToast("Profile opened")
            }
          >
            P
          </button>
        </div>
      </header>

      {/* PAGE HEADING */}
      <div className="settings-page-heading">
        <div>
          <h1>Setting</h1>
          <p>Welcome Setting Page</p>
        </div>

        <div className="settings-breadcrumb">
          <span>Home</span>
          <span>›</span>
          <strong>Setting</strong>
        </div>
      </div>

      {/* PROFILE CARDS */}
      <div className="settings-profile-grid">
        {/* USER PROFILE */}
        <div className="settings-card">
          <h2>User profile</h2>

          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleProfileChange}
          />

          <div className="settings-user-preview">
            <div className="settings-user-icon">
              <UserRound size={19} />
            </div>

            <div>
              <strong>John Smith</strong>
              <span>Welcome Setting Page</span>
            </div>
          </div>

          <button
            className="settings-save-button"
            onClick={saveProfile}
          >
            Save
          </button>
        </div>

        {/* UPDATE PROFILE */}
        <div className="settings-card">
          <h2>Update Profile</h2>

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleProfileChange}
          />

          <button
            className="settings-save-button"
            onClick={saveProfile}
          >
            Save
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="settings-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab ? "active" : ""
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      {activeTab === "Profile" && (
        <section className="settings-content">
          <h2>Personal Information</h2>

          <div className="settings-personal-card">
            <div className="settings-form-group">
              <label>Info</label>
              <input
                type="text"
                name="firstName"
                value={personalInfo.firstName}
                onChange={handlePersonalChange}
              />
            </div>

            <div className="settings-form-group">
              <label>Info</label>
              <input
                type="text"
                name="lastName"
                value={personalInfo.lastName}
                onChange={handlePersonalChange}
              />
            </div>

            <div className="settings-form-group">
              <label>Info</label>
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalChange}
              />
            </div>

            <div className="settings-form-group">
              <label>Info</label>
              <input
                type="text"
                name="phone"
                value={personalInfo.phone}
                onChange={handlePersonalChange}
              />
            </div>

            <div className="settings-form-group">
              <label>Info</label>
              <input
                type="text"
                name="country"
                value={personalInfo.country}
                onChange={handlePersonalChange}
              />
            </div>

            <div className="settings-form-group">
              <label>Info</label>
              <input
                type="text"
                name="city"
                value={personalInfo.city}
                onChange={handlePersonalChange}
              />
            </div>

            <button
              className="settings-save-button"
              onClick={savePersonalInfo}
            >
              Save
            </button>
          </div>
        </section>
      )}

      {activeTab !== "Profile" && (
        <section className="settings-content">
          <h2>{activeTab}</h2>

          <div className="settings-placeholder-card">
            <p>
              {activeTab} settings will appear here.
            </p>
          </div>
        </section>
      )}

      {/* TOAST */}
      {toast && (
        <div className="settings-toast">
          {toast}
        </div>
      )}
    </div>
  );
}

export default Settings;