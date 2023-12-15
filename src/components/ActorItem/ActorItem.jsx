import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DEFAULT_ACTOR_IMAGE from "../../images/actor-logo.png";
import { Link } from "react-router-dom";

export default function ActorItem({ character = {}, person = {} }) {
  const image =
    character?.image?.medium ?? person?.image?.medium ?? DEFAULT_ACTOR_IMAGE;

  return (
    <Card raised="true" sx={{ width: 350, height: 200, bgcolor: "#8d99ae" }}>
      <Link
        to={`/shows/actor/:${person.id}`}
        style={{ textDecoration: "none" }}
      >
        <CardActionArea sx={{ display: "flex", height: "100%" }}>
          <CardMedia
            component="img"
            image={image}
            alt="actor photo"
            sx={{ width: "150px", height: "auto" }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div" color="black">
              {person.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              As {character.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
