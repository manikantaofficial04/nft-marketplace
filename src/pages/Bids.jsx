import { useState } from "react";
import {
  Search,
  Sun,
  Moon,
  Bell,
  X,
  FileImage,
  Gavel,
  Users,
  Ban,
  Plus,
} from "lucide-react";

import activeBid1 from "../assets/active-bid-1.jpg";
import activeBid2 from "../assets/active-bid-2.jpg";
import activeBid3 from "../assets/active-bid-3.jpg";
import activeBid4 from "../assets/active-bid-4.jpg";
import activeBid5 from "../assets/active-bid-5.jpg";
import bidAvatar from "../assets/bid-avatar.jpg";

import "./Bids.css";

const bids = [
  {
    id: 1,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    image: activeBid1,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
  {
    id: 2,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    image: activeBid1,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
  {
    id: 3,
    name: "Liquid Wave",
    creator: "John Abraham",
    image: activeBid2,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
  {
    id: 4,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    image: activeBid3,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
  {
    id: 5,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    image: activeBid1,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
  {
    id: 6,
    name: "Liquid Wave",
    creator: "John Abraham",
    image: activeBid4,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
  {
    id: 7,
    name: "Liquid Wave",
    creator: "John Abraham",
    image: activeBid5,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
];

function Bids({ darkMode, setDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBids, setSelectedBids] = useState([]);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2200);
  };

  const filteredBids = bids.filter((bid) => {
    const search = searchTerm.toLowerCase();

    return (
      bid.name.toLowerCase().includes(search) ||
      bid.creator.toLowerCase().includes(search)
    );
  });

  const toggleSelect = (id) => {
    setSelectedBids((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const toggleAll = () => {
    if (selectedBids.length === filteredBids.length) {
      setSelectedBids([]);
    } else {
      setSelectedBids(filteredBids.map((bid) => bid.id));
    }
  };

  const removeBid = (id) => {
    setSelectedBids((previous) =>
      previous.filter((item) => item !== id)
    );

    showToast("Bid removed");
  };

  return (
    <div
      className={`bids-page ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      {/* HEADER */}
      <header className="bids-header">
        <div className="bids-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bids-header-actions">
          <button
            className="bids-icon-button"
            onClick={() => setDarkMode((value) => !value)}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="bids-icon-button"
            onClick={() =>
              showToast("No new notifications")
            }
          >
            <Bell size={20} />
          </button>

          <button
            className="bids-profile"
            onClick={() =>
              showToast("Profile opened")
            }
          >
            <img src={bidAvatar} alt="Profile" />
          </button>
        </div>
      </header>

      {/* PAGE TITLE */}
      <div className="bids-page-heading">
        <div>
          <h1>Bids</h1>
          <p>Welcome Bids Page</p>
        </div>

        <div className="bids-breadcrumb">
          <span>Home</span>
          <span>›</span>
          <strong>Bids</strong>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="bids-statistics">
        <div className="bids-stat-card">
          <div className="bids-stat-icon purple">
            <FileImage size={20} />
          </div>

          <div>
            <strong>24K</strong>
            <span>Artworks</span>
          </div>
        </div>

        <div className="bids-stat-card">
          <div className="bids-stat-icon green">
            <Gavel size={20} />
          </div>

          <div>
            <strong>82K</strong>
            <span>Auction</span>
          </div>
        </div>

        <div className="bids-stat-card">
          <div className="bids-stat-icon yellow">
            <Users size={20} />
          </div>

          <div>
            <strong>200</strong>
            <span>Creators</span>
          </div>
        </div>

        <div className="bids-stat-card">
          <div className="bids-stat-icon red">
            <Ban size={20} />
          </div>

          <div>
            <strong>89</strong>
            <span>Canceled</span>
          </div>
        </div>
      </div>

      {/* ACTIVE BIDS TITLE */}
      <div className="bids-section-heading">
        <h2>Active Bids</h2>

        <button
          className="bids-place-button"
          onClick={() =>
            showToast("Place a Bid clicked")
          }
        >
          <Plus size={16} />
          Place a Bid
        </button>
      </div>

      {/* TABLE */}
      <div className="bids-table-wrapper">
        <div className="bids-table">

          {/* HEADER */}
          <div className="bids-row bids-table-header">
            <div className="bids-checkbox">
              <input
                type="checkbox"
                checked={
                  filteredBids.length > 0 &&
                  selectedBids.length === filteredBids.length
                }
                onChange={toggleAll}
              />
            </div>

            <div>Item List</div>
            <div>Open Price</div>
            <div>Your Offer</div>
            <div>Recent Offer</div>
            <div>Time Left</div>
            <div>Action</div>
          </div>

          {/* ROWS */}
          {filteredBids.map((bid) => (
            <div
              className="bids-row bids-data-row"
              key={bid.id}
            >
              <div className="bids-checkbox">
                <input
                  type="checkbox"
                  checked={selectedBids.includes(bid.id)}
                  onChange={() =>
                    toggleSelect(bid.id)
                  }
                />
              </div>

              <div className="bids-item">
                <div className="bids-item-image">
                  <img
                    src={bid.image}
                    alt={bid.name}
                  />
                </div>

                <div className="bids-item-details">
                  <strong>{bid.name}</strong>
                  <span>{bid.creator}</span>
                </div>
              </div>

              <div className="bids-price">
                {bid.openPrice}
              </div>

              <div className="bids-price">
                {bid.yourOffer}
              </div>

              <div className="bids-recent-offer">
                <div className="bids-avatar">
                  <img
                    src={bidAvatar}
                    alt="Creator"
                  />
                </div>

                <span>{bid.recentOffer}</span>
              </div>

              <div className="bids-time">
                {bid.timeLeft}
              </div>

              <div className="bids-action">
                <button
                  onClick={() =>
                    removeBid(bid.id)
                  }
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="bids-toast">
          {toast}
        </div>
      )}
    </div>
  );
}

export default Bids;