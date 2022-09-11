import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import "./Search.css";
import Note from "./Note";
export default function Search() {
  return (
    <div className="explore-container">
      <div className="s-bar">
        <TextField
          id="outlined-basic"
          label="Search for Notes"
          variant="outlined"
          style={{ width: "100%", marginBottom: "30px" }}
        />
      </div>
    </div>
  );
}
