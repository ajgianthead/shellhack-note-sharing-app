import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./AppBar.css";

export default function () {
  return (
    <div className="navbar">
      <nav>
        <div className="menu-items">
          <h2>GatorNotes</h2>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <p>Dashboard</p>
          </Link>
          <Link to="/explore" style={{ textDecoration: "none" }}>
            <p>Explore</p>
          </Link>
          <Link to="/friends" style={{ textDecoration: "none" }}>
            <p>Friends</p>
          </Link>
        </div>
        <div className="menu-items">
          <Avatar alt="Abijah Nesbitt" src="/static/images/avatar/1.jpg" />
        </div>
      </nav>
    </div>
  );
}
