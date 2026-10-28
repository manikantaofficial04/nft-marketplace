import { useState } from "react";
import { Search, Sun, Moon, Bell, CheckCircle, Lock } from "lucide-react";

import liquidWave from "../assets/liquid-wave.jpg";
import papayaProfile from "../assets/papaya-profile.png";

import "./Profile.css";

const followers = [
  { id: 1, name: "Papaya", items: "60 Items" },
  { id: 2, name: "Papaya", items: "60 Items" },
  { id: 3, name: "Papaya", items: "60 Items" },
  { id: 4, name: "Papaya", items: "60 Items" },
];

const boughtItems = [
  { id: 1, name: "Liquid Wave" },
  { id: 2, name: "Liquid Wave" },
  { id: 3, name: "Liquid Wave" },
  { id: 4, name: "Liquid Wave" },
];

const collections = [
  { id: 1, name: "Liquid Wave" },
  { id: 2, name: "Liquid Wave" },
  { id: 3, name: "Liquid Wave" },
  { id: 4, name: "Liquid Wave" },
];

function Profile({ darkMode, setDarkMode }) {
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  return (
    <div
      className={`profile-page ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      {/* HEADER */}
      <header className="profile-header">
        <div className="profile-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search Here"
          />
        </div>

        <div className="profile-header-actions">
          <button
            className="profile-icon-button"
            onClick={() =>
              setDarkMode((value) => !value)
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="profile-icon-button"
            onClick={() =>
              showToast("No new notifications")
            }
          >
            <Bell size={20} />
          </button>

          <button
            className="profile-top-avatar"
            onClick={() =>
              showToast("Profile opened")
            }
          >
            <img
              src={papayaProfile}
              alt="Profile"
            />
          </button>
        </div>
      </header>

      {/* PAGE HEADING */}
      <div className="profile-page-heading">
        <div>
          <h1>Profile</h1>
          <p>Welcome Profile Page</p>
        </div>

        <div className="profile-breadcrumb">
          <span>Home</span>
          <span>›</span>
          <strong>Profile</strong>
        </div>
      </div>

      {/* TOP PROFILE AREA */}
      <div className="profile-top-section">

        {/* VERIFICATION CARD */}
        <div className="profile-verification-card">
          <div className="profile-verification-avatar">
            <img
              src={papayaProfile}
              alt="John Smith"
            />
          </div>

          <h2>Welcome, John Smith</h2>

          <p>
            Looks like you are not verified yet. Verify yourself
            to use the full potential of Xtrader.
          </p>

          <button
            className="profile-verification-row"
            onClick={() =>
              showToast("Verify account clicked")
            }
          >
            <span className="profile-check-icon">
              <CheckCircle size={18} />
            </span>

            <span>Verify account</span>
          </button>

          <div className="profile-divider"></div>

          <button
            className="profile-verification-row"
            onClick={() =>
              showToast("Two-factor Authentication clicked")
            }
          >
            <span className="profile-lock-icon">
              <Lock size={17} />
            </span>

            <span>
              Two-factor Authentication ( 2FA )
            </span>
          </button>
        </div>

        {/* FOLLOWING */}
        <div className="profile-following-section">
          <h2>Following</h2>

          <div className="profile-following-grid">
            {followers.map((person) => (
              <div
                className="profile-follow-card"
                key={person.id}
              >
                <div className="profile-follow-avatar">
                  <img
                    src={papayaProfile}
                    alt={person.name}
                  />
                </div>

                <div className="profile-follow-details">
                  <strong>{person.name}</strong>
                  <span>{person.items}</span>
                </div>

                <button
                  onClick={() =>
                    showToast("Unfollow clicked")
                  }
                >
                  Unfollow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MY BOUGHT */}
      <section className="profile-content-section">
        <h2>My bought</h2>

        <div className="profile-nft-grid">
          {boughtItems.map((item) => (
            <div
              className="profile-nft-card"
              key={item.id}
            >
              <div className="profile-nft-image">
                <img
                  src={liquidWave}
                  alt={item.name}
                />

                <div className="profile-nft-avatar">
                  <img
                    src={papayaProfile}
                    alt="Papaya"
                  />
                </div>
              </div>

              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MY COLLECTIONS */}
      <section className="profile-content-section">
        <h2>My Collections</h2>

        <div className="profile-nft-grid">
          {collections.map((item) => (
            <div
              className="profile-nft-card"
              key={item.id}
            >
              <div className="profile-nft-image">
                <img
                  src={liquidWave}
                  alt={item.name}
                />

                <div className="profile-nft-avatar">
                  <img
                    src={papayaProfile}
                    alt="Papaya"
                  />
                </div>
              </div>

              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TOAST */}
      {toast && (
        <div className="profile-toast">
          {toast}
        </div>
      )}
    </div>
  );
}

export default Profile;