import useRequest from "../hooks/useRequest";
import { Grid, TextField } from "@mui/material";
import SingleCard from "../components/SingleCard/SingeleCard";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/SearchSlice";

const searchInputStyle = {
  width: "270px",
  margin: "40px 20px 0",
  height: "20px",
  backgroundColor: "209, 208, 207, .6",
};

const cardsContainerStyle = {
  margin: "20px",
  justifyContent: "center",
  alignItems: "flex-start",
};

function Home() {
  const search = useSelector((state) => state.search.value);
  const apiData = useRequest(
    search.length >= 3
      ? `https://dolphin-app-pc6ii.ondigitalocean.app/article?q=${search}`
      : `https://dolphin-app-pc6ii.ondigitalocean.app/article/popular`
  );

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <Grid item container sx={{ display: "flex", justifyContent: "center" }}>
      <TextField
        variant="standard"
        autoFocus
        label="Show search"
        id="search"
        name="search"
        value={search}
        onChange={handleSearch}
        sx={searchInputStyle}
      />
      <Grid container spacing={3} sx={cardsContainerStyle}>
        {apiData.map((cardInfo, index) => (
          <Grid item key={index}>
            <SingleCard {...cardInfo}></SingleCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Home;
