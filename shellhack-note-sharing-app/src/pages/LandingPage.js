import React from "react";
// import Button from "../components/Button";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material"
import IMAGE from "../assets/gatorlogo.png"

export default function LandingPage() {
  return (
    <div className="App">
      <div className="bg">
        <div className="landing-data">
          <img src={ IMAGE } alt="gatornotes"></img>
          <p>
            chomp chomp
          </p>
          <div className="b-container">
            <Link to={"/login"}>
              <Button variant="contained" size="large">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant="contained" size="large">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
