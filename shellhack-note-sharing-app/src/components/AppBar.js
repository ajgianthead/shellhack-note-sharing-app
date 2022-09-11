import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./AppBar.css";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

export default function AppBar() {
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
