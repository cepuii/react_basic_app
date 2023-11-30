import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, Typography } from "@mui/material";

const cardBackgroundStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  paddingTop: "50px",
  paddingLeft: "50px",
  top: 0,
  left: 0,
  color: "white",
  background:
    "linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%",
};

const buttonStyle = {
  border: "1px solid #000000",
  borderRadius: "3px",
  background: "#E50914",
  width: "150px",
  height: "30px",
  color: "#fff",
};

export default function SingleCard({ id, name, time, image, handleId: handleCardClick }) {
  return (
    <Card sx={{ width: "400px", height: "200px", position: "relative" }}>
      <CardMedia
        component="img"
        alt={name}
        image={image}
        width={"100%"}
        height={"100%"}
      />
      <Box sx={cardBackgroundStyle}>
        <Typography>{name}</Typography>
        <Typography>{time}</Typography>
        <Button sx={buttonStyle} onClick={() => handleCardClick(id)}>
          Show more
        </Button>
      </Box>
    </Card>
  );
}
