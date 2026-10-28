import { useState } from "react";
import {
  Search,
  Sun,
  Moon,
  Bell,
  Heart,
} from "lucide-react";

import liquidWave from "../assets/liquid-wave.jpg";
import "./SavedItems.css";

const savedItems = [
  { id: 1, name: "Liquid Wave", image: liquidWave },
  { id: 2, name: "Liquid Wave", image: liquidWave },
  { id: 3, name: "Liquid Wave", image: liquidWave },
  { id: 4, name: "Liquid Wave", image: liquidWave },
  { id: 5, name: "Liquid Wave", image: liquidWave },
  { id: 6, name: "Liquid Wave", image: liquidWave },
  { id: 7, name: "Liquid Wave", image: liquidWave },
  { id: 8, name: "Liquid Wave", image: liquidWave },
];

function SavedItems({ darkMode, setDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState(savedItems);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const removeItem = (id) => {
    setItems((previous) =>
      previous.filter((item) => item.id !== id)
    );

    showToast("Removed from Saved Items");
  };

  return (
    <div
      className={`saved-items-page ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      {/* HEADER */}
      <header className="saved-items-header">
        <div className="saved-items-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search Here"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <div className="saved-items-actions">
          <button
            className="saved-items-icon-button"
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
            className="saved-items-icon-button"
            onClick={() =>
              showToast("No new notifications")
            }
          >
            <Bell size={20} />
          </button>

          <button
            className="saved-items-profile"
            onClick={() =>
              showToast("Profile opened")
            }
          >
            P
          </button>
        </div>
      </header>

      {/* PAGE HEADING */}
      <div className="saved-items-page-heading">
        <div>
          <h1>Saved Items</h1>
          <p>Welcome Saved Page</p>
        </div>

        <div className="saved-items-breadcrumb">
          <span>Home</span>
          <span>›</span>
          <strong>Saved</strong>
        </div>
      </div>

      {/* CARDS */}
      <div className="saved-items-grid">
        {filteredItems.map((item) => (
          <div
            className="saved-item-card"
            key={item.id}
          >
            <div className="saved-item-image">
              <img
                src={item.image}
                alt={item.name}
              />

              <button
                className="saved-heart-button"
                onClick={() =>
                  removeItem(item.id)
                }
              >
                <Heart
                  size={18}
                  fill="currentColor"
                />
              </button>
            </div>

            <h2>{item.name}</h2>

            <div className="saved-item-info">
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
              className="saved-place-bid"
              onClick={() =>
                showToast("Place a Bid clicked")
              }
            >
              Place a Bid
            </button>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="saved-items-empty">
          No saved items found.
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="saved-items-toast">
          {toast}
        </div>
      )}
    </div>
  );
}

export default SavedItems;