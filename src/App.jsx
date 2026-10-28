import { useState } from "react";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import ActiveBids from "./pages/ActiveBids";
import Bids from "./pages/Bids";
import SavedItems from "./pages/saveditem";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(true);

  const renderPage = () => {
    if (currentPage === "analytics") {
      return (
        <Analytics
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      );
    }

    if (currentPage === "active-bids") {
      return (
        <ActiveBids
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      );
    }

    if (currentPage === "bids") {
      return (
        <Bids
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      );
    }

    if (currentPage === "saved-items") {
      return (
        <SavedItems
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      );
    }

    if (currentPage === "collections") {
      return (
        <Collections
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      );
    }

    if (currentPage === "profile") {
      return (
        <Profile
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      );
    }

    if (currentPage === "settings") {
      return (
        <Settings
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      );
    }

    return <Dashboard />;
  };

  return (
    <div className="app">
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;