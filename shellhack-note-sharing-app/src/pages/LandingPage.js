import React from "react";
import Button from "../components/Button";
import "../App.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="App">
      <div className="bg">
        <div className="landing-data">
          <h1>GatorNotes</h1>
          <p>
            Anim minim dolor dolor aliqua eiusmod occaecat sit amet irure
            pariatur cupidatat adipisicing mollit sit. Labore culpa ipsum ex
            labore min im laboris ut minim fugiat ipsum elit nulla. Est occaecat
            minim anim eiusmod sit adipisicing incididunt ipsum nisi.
          </p>
          <div className="b-container">
            <Link to={"/login"}>
              <Button title="Login" />
            </Link>
            <Link to={"/signup"}>
              <Button title="Sign Up" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
