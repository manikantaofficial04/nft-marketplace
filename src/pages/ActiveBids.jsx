import { useState } from "react";
import {
  Search,
  Sun,
  Moon,
  Bell,
  X,
} from "lucide-react";

import activeBid1 from "../assets/active-bid-1.jpg";
import activeBid2 from "../assets/active-bid-2.jpg";
import activeBid3 from "../assets/active-bid-3.jpg";
import activeBid4 from "../assets/active-bid-4.jpg";
import activeBid5 from "../assets/active-bid-5.jpg";
import bidAvatar from "../assets/bid-avatar.jpg";

import "./ActiveBids.css";

const activeBids = [
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
    name: "Liquid Wave",
    creator: "John Abraham",
    image: activeBid2,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
  {
    id: 3,
    name: "Cute Cube Cool",
    creator: "John Abraham",
    image: activeBid3,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
  {
    id: 4,
    name: "Liquid Wave",
    creator: "John Abraham",
    image: activeBid4,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
  {
    id: 5,
    name: "Liquid Wave",
    creator: "John Abraham",
    image: activeBid5,
    openPrice: "0.0025 ETH",
    yourOffer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    timeLeft: "2 Hours 1 min 30s",
  },
];

function ActiveBids({ darkMode, setDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBids, setSelectedBids] = useState([]);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2200);
  };

  const filteredBids = activeBids.filter((bid) => {
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
      className={`active-bids-page ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
    >
      {/* TOP HEADER */}
      <header className="active-bids-header">
        <div className="active-bids-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="active-bids-actions">
          <button
            className="active-bids-icon-button"
            onClick={() => setDarkMode((value) => !value)}
          >
            {darkMode ? (
              <Sun size={22} />
            ) : (
              <Moon size={22} />
            )}
          </button>

          <button
            className="active-bids-icon-button"
            onClick={() =>
              showToast("No new notifications")
            }
          >
            <Bell size={22} />
          </button>

          <button
            className="active-bids-profile"
            onClick={() =>
              showToast("Profile opened")
            }
          >
            <img
              src={bidAvatar}
              alt="Profile"
            />
          </button>
        </div>
      </header>

      {/* PAGE TITLE */}
      <div className="active-bids-page-heading">
        <h1>Active Bids</h1>
      </div>

      {/* TABLE */}
      <div className="active-bids-table-wrapper">
        <div className="active-bids-table">

          {/* TABLE HEADER */}
          <div className="active-bids-row active-bids-table-header">
            <div className="active-bids-checkbox">
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

          {/* BID ROWS */}
          {filteredBids.length > 0 ? (
            filteredBids.map((bid) => (
              <div
                className="active-bids-row active-bids-data-row"
                key={bid.id}
              >
                {/* CHECKBOX */}
                <div className="active-bids-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedBids.includes(bid.id)}
                    onChange={() =>
                      toggleSelect(bid.id)
                    }
                  />
                </div>

                {/* ITEM */}
                <div className="active-bids-item">
                  <div className="active-bids-item-image">
                    <img
                      src={bid.image}
                      alt={bid.name}
                    />
                  </div>

                  <div className="item-details">
                    <strong>{bid.name}</strong>
                    <span>{bid.creator}</span>
                  </div>
                </div>

                {/* OPEN PRICE */}
                <div className="bid-price">
                  {bid.openPrice}
                </div>

                {/* YOUR OFFER */}
                <div className="bid-price">
                  {bid.yourOffer}
                </div>

                {/* RECENT OFFER */}
                <div className="recent-offer">
                  <div className="offer-avatar">
                    <img
                      src={bidAvatar}
                      alt="Creator"
                    />
                  </div>

                  <span>
                    {bid.recentOffer}
                  </span>
                </div>

                {/* TIME LEFT */}
                <div className="time-left">
                  {bid.timeLeft}
                </div>

                {/* ACTION */}
                <div className="bid-action">
                  <button
                    onClick={() =>
                      removeBid(bid.id)
                    }
                    title="Remove bid"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="active-bids-empty">
              No active bids found.
            </div>
          )}
        </div>
      </div>

      {/* TOAST */}
      {toast && (
        <div className="active-bids-toast">
          {toast}
        </div>
      )}
    </div>
  );
}

export default ActiveBids;