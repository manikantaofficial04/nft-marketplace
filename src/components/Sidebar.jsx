import {
  LayoutDashboard,
  BarChart3,
  Gavel,
  FileText,
  Heart,
  Grid3X3,
  User,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

function Sidebar({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      page: "dashboard",
    },
    {
      name: "Analytics",
      icon: BarChart3,
      page: "analytics",
    },
    {
      name: "Active Bids",
      icon: Gavel,
      page: "active-bids",
    },
    {
      name: "Bids",
      icon: FileText,
      page: "bids",
    },
    {
      name: "Saved Items",
      icon: Heart,
      page: "saved-items",
    },
    {
      name: "Collections",
      icon: Grid3X3,
      page: "collections",
    },
    {
      name: "Profile",
      icon: User,
      page: "profile",
    },
    {
      name: "Settings",
      icon: Settings,
      page: "settings",
    },
  ];

  const handleNavigation = (item) => {
    if (item.page) {
      onNavigate(item.page);
      setMobileOpen(false);
    }
  };

  const handleLogout = () => {
    alert("Logout clicked");
  };

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        className="mobile-menu-button"
        onClick={() => setMobileOpen((value) => !value)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`sidebar ${
          mobileOpen ? "mobile-sidebar-open" : ""
        }`}
      >
        {/* LOGO REMOVED */}
        <div className="sidebar-logo"></div>

        {/* MENU */}
        <nav className="sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.page;

            return (
              <button
                key={item.name}
                type="button"
                className={`menu-item ${
                  isActive ? "active" : ""
                }`}
                onClick={() => handleNavigation(item)}
                title={item.name}
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="sidebar-bottom">
          <button
            type="button"
            className="menu-item logout-item"
            onClick={handleLogout}
            title="Logout"
          >
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;