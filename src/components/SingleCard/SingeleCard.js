import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function SingleCard({ id, name, time, image, handleId }) {
  return (
    <Card sx={{ width: "395px", height: "222px", position: "relative" }}>
      <CardMedia component="img" alt={name} image={image} width={'100%'} height={'100%'} />
      <div
        style={{
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
        }}
      >
        <p>{name}</p>
        <p>{time}</p>
        <button onClick={()=>handleId(id)}
          style={{
            border: "1px solid #000000",
            borderRadius: "3px",
            background: "#fca311",
            width: "100px",
            height: "30px",
            color: "#000000",
          }}
        >
          Show more
        </button>
      </div>
    </Card>
  );
}
