import { useState } from "react";
import {
  Search,
  Bell,
  Sun,
  Moon,
  Heart,
  X,
  CheckCircle,
  Wallet,
} from "lucide-react";
import nfts from "../data/nfts";
import featuredNft from "../assets/nft-1.jpg";
import "./Dashboard.css";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreateNFT, setShowCreateNFT] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [toast, setToast] = useState("");
  const [myNfts, setMyNfts] = useState(nfts);
  const [newNFT, setNewNFT] = useState({
    name: "",
    creator: "",
    price: "",
  });
  const [formError, setFormError] = useState("");
  const [category, setCategory] = useState("All");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  const filteredNfts = myNfts.filter((nft) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      nft.name.toLowerCase().includes(search) ||
      nft.creator.toLowerCase().includes(search);

    return matchesSearch;
  });

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
    showToast(
      favorites.includes(id)
        ? "Removed from favorites ❤️"
        : "Added to favorites ❤️"
    );
  };

  const handleCreateNFT = () => {
    if (
      !newNFT.name.trim() ||
      !newNFT.creator.trim() ||
      !newNFT.price.trim()
    ) {
      setFormError("Please fill all fields.");
      return;
    }

    const nftToAdd = {
      id: Date.now(),
      name: newNFT.name,
      creator: newNFT.creator,
      price: `${newNFT.price} ETH`,
      image: nfts[0].image,
    };

    setMyNfts((current) => [...current, nftToAdd]);
    setNewNFT({ name: "", creator: "", price: "" });
    setFormError("");
    setShowCreateNFT(false);
    showToast("NFT created successfully! 🎉");
  };

  return (
    <div className={`dashboard-v2 ${darkMode ? "dark-theme" : "light-theme"}`}>
      {toast && (
        <div className="dashboard-v2-toast">
          <CheckCircle size={18} />
          {toast}
        </div>
      )}

      {/* TOP BAR */}
      <header className="dashboard-v2-header">
        <div className="dashboard-v2-search">
          <Search size={17} />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Here"
          />
        </div>

        <div className="dashboard-v2-header-actions">
          <button
            className="dashboard-v2-icon"
            onClick={() => setDarkMode((value) => !value)}
            title="Toggle theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <div className="dashboard-v2-notification-wrap">
            <button
              className="dashboard-v2-icon"
              onClick={() => setShowNotifications((value) => !value)}
              title="Notifications"
            >
              <Bell size={16} />
            </button>

            {showNotifications && (
              <div className="dashboard-v2-notification-popup">
                <strong>Notifications</strong>
                <p>🎨 New NFT added</p>
                <p>❤️ Someone liked your NFT</p>
                <p>💰 New bid received</p>
              </div>
            )}
          </div>

          <button
            className="dashboard-v2-avatar"
            onClick={() => showToast("Profile opened")}
          >
            P
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="dashboard-v2-hero">
        <div className="dashboard-v2-hero-main">
          <div className="dashboard-v2-hero-copy">
            <h1>
              Discover, Collect, Sell
              <br />
              and Create your NFT
            </h1>

            <p>
              Digital marketplace for crypto collectibles and non fungible tokens
            </p>

            <div className="dashboard-v2-hero-buttons">
              <button
                className="dashboard-v2-purple-button"
                onClick={() =>
                  document
                    .getElementById("dashboard-v2-nfts")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore
              </button>

              <button
                className="dashboard-v2-red-button"
                onClick={() => {
                  setFormError("");
                  setShowCreateNFT(true);
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>

        <div className="dashboard-v2-feature-card">
          <div className="dashboard-v2-feature-image">
            <img src={featuredNft} alt="Brighten LQ" />
          </div>

          <div className="dashboard-v2-feature-details">
            <div className="dashboard-v2-feature-creator">
              <div className="dashboard-v2-small-avatar">J</div>
              <strong>John Abraham</strong>
              <span>•</span>
            </div>

            <h3>Brighten LQ</h3>

            <div className="dashboard-v2-feature-meta">
              <div>
                <span>Auction time</span>
                <strong>3h 1m 50s</strong>
              </div>

              <div>
                <span>Current Bid : <b>0.05 ETH</b></span>
                <strong>0.15 ETH</strong>
              </div>
            </div>

            <div className="dashboard-v2-feature-buttons">
              <button
                className="dashboard-v2-purple-button"
                onClick={() => showToast("Bid placed for Brighten LQ 💰")}
              >
                Place a Bid
              </button>

              <button
                className="dashboard-v2-red-button"
                onClick={() =>
                  setSelectedNFT({
                    name: "Brighten LQ",
                    creator: "John Abraham",
                    price: "0.05 ETH",
                    image: featuredNft,
                  })
                }
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NFT SECTION */}
      <section className="dashboard-v2-nft-section" id="dashboard-v2-nfts">
        <div className="dashboard-v2-section-heading">
          <h2>Trending Bids</h2>

          <div className="dashboard-v2-filters">
            {["All", "Artwork", "Book"].map((item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="dashboard-v2-grid">
          {filteredNfts.map((nft) => (
            <article
              className="dashboard-v2-card"
              key={nft.id}
              onClick={() => setSelectedNFT(nft)}
            >
              <div className="dashboard-v2-card-image">
                <img src={nft.image} alt={nft.name} />

                <button
                  className="dashboard-v2-heart"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleFavorite(nft.id);
                  }}
                >
                  <Heart
                    size={17}
                    fill={favorites.includes(nft.id) ? "currentColor" : "none"}
                  />
                </button>
              </div>

              <div className="dashboard-v2-card-content">
                <h3>{nft.name}</h3>

                <div className="dashboard-v2-card-info">
                  <div>
                    <span>Auction time</span>
                    <strong>3h 1m 50s</strong>
                  </div>

                  <div>
                    <span>Current Bid</span>
                    <strong className="purple-text">0.05 ETH</strong>
                    <small>{nft.price}</small>
                  </div>
                </div>

                <button
                  className="dashboard-v2-bid-button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showToast(`Bid placed for ${nft.name}! 💰`);
                  }}
                >
                  Place a Bid
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredNfts.length === 0 && (
          <div className="dashboard-v2-empty">No NFTs found.</div>
        )}
      </section>

      {/* DETAILS MODAL */}
      {selectedNFT && (
        <div
          className="dashboard-v2-modal-overlay"
          onClick={() => setSelectedNFT(null)}
        >
          <div
            className="dashboard-v2-details-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="dashboard-v2-close"
              onClick={() => setSelectedNFT(null)}
            >
              <X size={19} />
            </button>

            <img src={selectedNFT.image} alt={selectedNFT.name} />

            <div>
              <span>NFT DETAILS</span>
              <h2>{selectedNFT.name}</h2>
              <p>
                Created by <strong>{selectedNFT.creator}</strong>
              </p>

              <div className="dashboard-v2-price-box">
                <span>Current Price</span>
                <strong>{selectedNFT.price}</strong>
              </div>

              <button
                className="dashboard-v2-purple-button dashboard-v2-full-button"
                onClick={() => showToast(`Bid placed for ${selectedNFT.name}! 💰`)}
              >
                Place a Bid
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE MODAL */}
      {showCreateNFT && (
        <div className="dashboard-v2-modal-overlay">
          <div className="dashboard-v2-create-modal">
            <h2>Create New NFT 🎨</h2>

            <input
              placeholder="NFT Name"
              value={newNFT.name}
              onChange={(e) =>
                setNewNFT({ ...newNFT, name: e.target.value })
              }
            />

            <input
              placeholder="Creator Name"
              value={newNFT.creator}
              onChange={(e) =>
                setNewNFT({ ...newNFT, creator: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Price (ETH)"
              value={newNFT.price}
              onChange={(e) =>
                setNewNFT({ ...newNFT, price: e.target.value })
              }
            />

            {formError && <p className="dashboard-v2-error">{formError}</p>}

            <div className="dashboard-v2-modal-buttons">
              <button
                className="dashboard-v2-purple-button"
                onClick={handleCreateNFT}
              >
                Create NFT
              </button>

              <button
                className="dashboard-v2-cancel-button"
                onClick={() => {
                  setShowCreateNFT(false);
                  setFormError("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
