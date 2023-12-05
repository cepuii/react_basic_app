import { useDispatch, useSelector } from "react-redux";
import useRequest from "../hooks/useRequest";
import { Grid, NativeSelect } from "@mui/material";
import SingleCard from "../components/SingleCard/SingeleCard";
import { GENRES } from "../constants/constants";
import {  setGenre } from "../store/SearchSlice";

function Shows() {
  const genre = useSelector((state) => state.search.genre)?? "Action";
  
  let url = `https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/${genre}`;

  const apiData = useRequest(url);
  const dispatch = useDispatch();
  const handleGenreChange = (e) => {
    dispatch(setGenre(e.target.value));
  };
  
  return (
    <>
      <h1>Show by genre: {genre} </h1>
      {"   "}
      <NativeSelect
        defaultValue={GENRES[0]}
        value={genre}
        onChange={handleGenreChange}
        inputProps={{
          name: "age",
          id: "uncontrolled-native",
        }}
      >
        {GENRES.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
        ;
      </NativeSelect>
      <Grid
        container
        spacing={3}
        sx={{
          margin: "20px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {apiData.map((cardInfo, index) => (
          <Grid item key={index}>
            <SingleCard {...cardInfo}></SingleCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Shows;
