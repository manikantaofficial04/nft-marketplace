import { useState } from "react";
import {
  Search,
  Sun,
  Moon,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  CircleDollarSign,
  Gavel,
  Users,
} from "lucide-react";

import papayaProfile from "../assets/papaya-profile.png";
import "./Analytics.css";

const activities = [
  {
    name: "Papaya",
    text: "Purchase by you for 0.05 ETH",
    time: "12 mins ago",
  },
  {
    name: "Papaya",
    text: "0.06 ETH Received",
    time: "12 mins ago",
  },
  {
    name: "Papaya",
    text: "Started Following you",
    time: "12 mins ago",
  },
  {
    name: "Papaya",
    text: "Has been sold by 12.75 ETH",
    time: "12 mins ago",
  },
  {
    name: "Papaya",
    text: "Purchase by you for 0.05 ETH",
    time: "12 mins ago",
  },
];

const creators = [
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
];

function Analytics({ darkMode, setDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2200);
  };

  return (
    <div
      className={`analytics-page ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      {toast && <div className="analytics-toast">{toast}</div>}

      {/* HEADER */}
      <header className="analytics-header">
        <div className="analytics-search">
          <Search size={18} />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Here"
          />
        </div>

        <div className="analytics-header-actions">
          <button
            className="analytics-icon-button"
            onClick={() => setDarkMode((value) => !value)}
            title="Toggle theme"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <div className="analytics-notification-wrap">
            <button
              className="analytics-icon-button"
              onClick={() =>
                setNotifications((value) => !value)
              }
              title="Notifications"
            >
              <Bell size={19} />
            </button>

            {notifications && (
              <div className="analytics-notification-popup">
                <strong>Notifications</strong>

                <p>🎨 New NFT added</p>
                <p>❤️ Someone liked your NFT</p>
                <p>💰 New bid received</p>
              </div>
            )}
          </div>

          {/* PROFILE */}
          <button
            className="analytics-profile"
            onClick={() => showToast("Profile opened")}
            title="Profile"
          >
            <img src={papayaProfile} alt="Papaya profile" />
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="analytics-main">

        {/* TOP ROW */}
        <section className="analytics-top-grid">

          {/* TRENDING BIDS */}
          <div className="analytics-panel trending-panel">
            <div className="analytics-panel-title">
              <h2>Trending Bids</h2>
            </div>

            <div className="bid-stat-list">

              <div className="bid-stat-card">
                <div className="bid-stat-icon purple">
                  <CircleDollarSign size={20} />
                </div>

                <div className="bid-stat-content">
                  <strong>24K</strong>
                  <span>Artworks</span>
                </div>

                <span className="change positive">
                  <ArrowUpRight size={13} />
                  +168.00%
                </span>
              </div>

              <div className="bid-stat-card">
                <div className="bid-stat-icon red">
                  <Gavel size={20} />
                </div>

                <div className="bid-stat-content">
                  <strong>89</strong>
                  <span>Auction</span>
                </div>

                <span className="change negative">
                  <ArrowDownRight size={13} />
                  -168.00%
                </span>
              </div>

              <div className="bid-stat-card">
                <div className="bid-stat-icon green">
                  <Users size={20} />
                </div>

                <div className="bid-stat-content">
                  <strong>82K</strong>
                  <span>Creators</span>
                </div>

                <span className="change positive">
                  <ArrowUpRight size={13} />
                  +168.00%
                </span>
              </div>

            </div>
          </div>

          {/* ETH PRICE */}
          <div className="analytics-panel eth-panel">
            <h2>ETH Price</h2>

            <div className="eth-chart">
              <div className="chart-y-labels">
                <span>350</span>
                <span>300</span>
                <span>250</span>
                <span>200</span>
                <span>150</span>
                <span>100</span>
                <span>50</span>
                <span>0</span>
              </div>

              <svg
                className="eth-line-chart"
                viewBox="0 0 500 280"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="ethArea"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#7950ff"
                      stopOpacity="0.35"
                    />

                    <stop
                      offset="100%"
                      stopColor="#7950ff"
                      stopOpacity="0.02"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="
                    M0 250
                    L60 155
                    L120 170
                    L180 95
                    L240 120
                    L300 55
                    L360 135
                    L420 165
                    L500 105
                    L500 250
                    L0 250
                    Z
                  "
                  fill="url(#ethArea)"
                />

                <polyline
                  points="
                    0,250
                    60,155
                    120,170
                    180,95
                    240,120
                    300,55
                    360,135
                    420,165
                    500,105
                  "
                  fill="none"
                  stroke="#7950ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {[
                  [0, 250],
                  [60, 155],
                  [120, 170],
                  [180, 95],
                  [240, 120],
                  [300, 55],
                  [360, 135],
                  [420, 165],
                  [500, 105],
                ].map(([cx, cy], index) => (
                  <circle
                    key={index}
                    cx={cx}
                    cy={cy}
                    r="5"
                    fill="#7950ff"
                    stroke="#201a38"
                    strokeWidth="3"
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* STATISTICS */}
          <div className="analytics-panel statistics-panel">
            <h2>Statistics</h2>

            <div className="donut-wrapper">
              <div className="donut-chart">
                <div className="donut-inner"></div>
              </div>
            </div>

            <div className="donut-legend">
              <div>
                <span className="legend-dot sold"></span>
                Artwork Sold
              </div>

              <div>
                <span className="legend-dot cancel"></span>
                Artwork Cancel
              </div>
            </div>
          </div>

        </section>

        {/* BOTTOM ROW */}
        <section className="analytics-bottom-grid">

          {/* RECENT ACTIVITY */}
          <div className="activity-column">
            <div className="section-title-row">
              <h2>Recent Activity</h2>

              <button
                onClick={() =>
                  showToast("Showing all activity")
                }
              >
                See more
              </button>
            </div>

            <div className="activity-list">
              {activities.map((activity, index) => (
                <div
                  className="activity-item"
                  key={index}
                >
                  <div className="avatar yellow">
                    <img
                      src={papayaProfile}
                      alt="Papaya"
                    />
                  </div>

                  <div className="activity-text">
                    <strong>{activity.name}</strong>
                    <span>{activity.text}</span>
                  </div>

                  <time>{activity.time}</time>
                </div>
              ))}
            </div>
          </div>

          {/* TOP CREATORS */}
          <div className="creators-column">
            <h2>Top Creators</h2>

            <div className="creators-grid">
              {creators.map((creator, index) => (
                <div
                  className="creator-card"
                  key={index}
                >
                  <div className="avatar yellow">
                    <img
                      src={papayaProfile}
                      alt="Papaya"
                    />
                  </div>

                  <div className="creator-info">
                    <strong>{creator.name}</strong>
                    <span>{creator.items}</span>
                  </div>

                  <button
                    onClick={() =>
                      showToast(
                        `${creator.name} followed`
                      )
                    }
                  >
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}

export default Analytics;