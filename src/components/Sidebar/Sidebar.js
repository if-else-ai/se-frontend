import React from "react";
import "./Sidebar.css";

const Navbar = () => {
  return (
    <div class="sidebar-container">
      <div class="sidebar-card">
        <a href="/" class="sidebar-link">
          Thirawat
        </a>
        <hr color="#FF0000" />
        <a href="/" class="sidebar-link">
          Account
        </a>
        <a href="/" class="sidebar-link">
          Order History
        </a>
      </div>
    </div>
  );
};

export default Navbar;
