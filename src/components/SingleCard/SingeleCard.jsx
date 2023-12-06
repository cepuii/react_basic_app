import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, CardActionArea, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import DEFAULT_IMAGE from "../../images/movie-logo.png";


const cardStyle = {
  width: "250px",
  height: "350px",
  position: "relative",
  borderRadius: "5px",
  transition: "transform 0.2s",
  ":hover": {
    transform: "scale(1.1)",
  },
};

const cardBackgroundStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  color: "white",
  background:
    "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%",
};

export default function SingleCard({ id, name, time, image }) {

  const showInfo = `${name}, premiered: ${time}`; 
 

  return (
    <Card sx={cardStyle}>
      <Link to={`/shows/:${id}`}>
        <Tooltip title={showInfo} followCursor>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={name}
            image={image?.medium ?? DEFAULT_IMAGE}
            width={"250px"}
            height={"350px"}
            />
          <div style={cardBackgroundStyle}>
            <Box sx={{display: "grid", placeContent: "end"}}>
            </Box>
          </div>
        </CardActionArea>
            </Tooltip>
      </Link>
    </Card>
  );
}
