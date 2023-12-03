import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DEFAULT_IMAGE from "../../images/actor-logo.png";

export default function ActorItem({ character = {}, person = {} }) {
  const image = character?.image?.medium ?? person?.image?.medium ?? DEFAULT_IMAGE;

  return (
    <Card sx={{ width: 350, height: 200, bgcolor: "#8d99ae" }}>
      <CardActionArea sx={{ display: "flex", height: "100%" }}>
        <CardMedia
          component="img"
          image={image}
          alt="actor photo"
          sx={{ width: "150px", height: "auto" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            As {character.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
