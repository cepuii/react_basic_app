import { Link } from "react-router-dom";
import DEFAULT_IMAGE from "../../images/movie-logo.png";
import useRequest from "../../hooks/useRequest";
import { useMemo } from "react";
import "./titleSingleSlide.css";
import { Grid } from "@mui/material";

const showInfoContainer = {
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "self-start",
};

export default function TitleSingleSlide({ id, name, summary, genres, image }) {
  const showCastById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}/cast`;
  const castData = useRequest(showCastById);
  const starring = useMemo(() => {
    return castData
      .slice(0, 15)
      .map((actor) => actor.person.name)
      .join(", ");
  }, [castData]);

  const genresString = useMemo(() => genres.join(", "), [genres]);

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${image?.original})` ?? DEFAULT_IMAGE,
      }}
    >
      <div className="titleCardBackgroundStyle">
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={"center"}
          justifyContent={{ xs: "center", md: "space-around" }}
          sx={{ width: "100vw" }}
        >
          <Grid item xs={12} md={5} sx={showInfoContainer}>
            <h1 style={{ textTransform: "uppercase" }}>{name}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: summary }}
              style={{ marginTop: "40px" }}
            ></p>
            <p>
              <span>{"Starring: "}</span> {starring}
            </p>
            <p>
              <span>{"Genres: "}</span> {genresString}
            </p>
            <p>
              <span>{"Tags: "}</span> {genresString}
            </p>
            <Link to={`/shows/:${id}`}>
              <button className="show-more-btn">{"Show more"}</button>
            </Link>
          </Grid>
          <Grid item xs={12} md={4} sx={{ padding: "25px" }}>
            <img
              src={image?.original}
              alt="name"
              className="image-container"
            ></img>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
