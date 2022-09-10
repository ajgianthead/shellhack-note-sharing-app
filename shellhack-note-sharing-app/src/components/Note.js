import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Tooltip from "@mui/material/Tooltip";

import "./Note.css";
import { Icon } from "@mui/material";

export default function Note() {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "20px" }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="picture/preview of note"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Author's Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aliqua quis quis non magna voluptate. Aliqua culpa laborum ad aute
            do excepteur id duis do occaecat culpa Lorem sunt adipisicing. Culpa
            duis consequat consequat consectetur aute velit consequat ipsum ex
            incididunt.
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="Share" arrow>
            <MobileScreenShareIcon />
          </Tooltip>
          <Tooltip title="Favorite" arrow>
            <FavoriteBorderIcon />
          </Tooltip>
        </CardActions>
      </Card>
    </div>
  );
}
