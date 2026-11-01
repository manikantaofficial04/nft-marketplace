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

  const pageProps = {
    darkMode,
    setDarkMode,
  };

  const pages = {
    dashboard: <Dashboard />,
    analytics: <Analytics {...pageProps} />,
    "active-bids": <ActiveBids {...pageProps} />,
    bids: <Bids {...pageProps} />,
    "saved-items": <SavedItems {...pageProps} />,
    collections: <Collections {...pageProps} />,
    profile: <Profile {...pageProps} />,
    settings: <Settings {...pageProps} />,
  };

  return (
    <div className="app">
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main className="main-content">
        {pages[currentPage] || <Dashboard />}
      </main>
    </div>
  );
}

export default App;