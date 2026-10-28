import { useState } from "react";
import { Search, Sun, Moon, Bell } from "lucide-react";

import liquidWave from "../assets/liquid-wave.jpg";
import "./Collections.css";

const collections = [
  { id: 1, name: "Liquid Wave", image: liquidWave },
  { id: 2, name: "Liquid Wave", image: liquidWave },
  { id: 3, name: "Liquid Wave", image: liquidWave },
  { id: 4, name: "Liquid Wave", image: liquidWave },
  { id: 5, name: "Liquid Wave", image: liquidWave },
  { id: 6, name: "Liquid Wave", image: liquidWave },
  { id: 7, name: "Liquid Wave", image: liquidWave },
  { id: 8, name: "Liquid Wave", image: liquidWave },
];

function Collections({ darkMode, setDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  const filteredCollections = collections.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`collections-page ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      {/* HEADER */}
      <header className="collections-header">
        <div className="collections-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="collections-actions">
          <button
            className="collections-icon-button"
            onClick={() =>
              setDarkMode((value) => !value)
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="collections-icon-button"
            onClick={() =>
              showToast("No new notifications")
            }
          >
            <Bell size={20} />
          </button>

          <button
            className="collections-profile"
            onClick={() =>
              showToast("Profile opened")
            }
          >
            P
          </button>
        </div>
      </header>

      {/* PAGE HEADING */}
      <div className="collections-page-heading">
        <div>
          <h1>Collections</h1>
          <p>Welcome Collections Page</p>
        </div>

        <div className="collections-breadcrumb">
          <span>Home</span>
          <span>›</span>
          <strong>Collections</strong>
        </div>
      </div>

      {/* FILTERS */}
      <div className="collections-filters">
        {["All", "Artwork", "Book"].map((filter) => (
          <button
            key={filter}
            className={
              activeFilter === filter ? "active" : ""
            }
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* COLLECTION GRID */}
      <div className="collections-grid">
        {filteredCollections.map((item) => (
          <div
            className="collection-card"
            key={item.id}
          >
            <div className="collection-image">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            <h2>{item.name}</h2>

            <div className="collection-info">
              <div>
                <span>Auction time</span>
                <strong>3h 1m 50s</strong>
              </div>

              <div>
                <span>Current Bid</span>
                <strong>0.05 ETH</strong>
                <small>0.15 ETH</small>
              </div>
            </div>

            <button
              className="collection-place-bid"
              onClick={() =>
                showToast("Place a Bid clicked")
              }
            >
              Place a Bid
            </button>
          </div>
        ))}
      </div>

      {/* TOAST */}
      {toast && (
        <div className="collections-toast">
          {toast}
        </div>
      )}
    </div>
  );
}

export default Collections;