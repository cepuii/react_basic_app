import { Link } from "react-router-dom";
import DEFAULT_IMAGE from "../../images/movie-logo.png";
import useRequest from "../../hooks/useRequest";
import { useMemo } from "react";
import "./titleSingleSlide.css";

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
        <div className="show-info-container">
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
        </div>
        <div style={{ padding: "25px" }}>
          <img
            src={image?.original}
            alt="name"
            className="image-container"
          ></img>
        </div>
      </div>
    </div>
  );
}
