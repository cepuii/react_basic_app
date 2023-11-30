import { useEffect, useRef } from "react";
import useRequest from "../hooks/useRequest";
import { Grid } from "@mui/material";
import SingleCard from "../components/SingleCard/SingeleCard";
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from "../store/FilmSearchSlice";
function Home(){

  const search = useSelector((state) => state.filmSearch.value);
    const searchRef = useRef("");
    const apiData = useRequest(search);
    const dispatch = useDispatch();
    useEffect(() => {
      searchRef.current.focus();
    }, []);
  
    const handleSearch = (e) => {
      dispatch(setSearch(searchRef.current.value));
    };
  
    return(
        <Grid item container pb={20} sx={{display: "flex", justifyContent: "center"}}>
        <input
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
            ref={searchRef}
            style={{margin: "20px", height: "20px", border: "none", backgroundColor: "209, 208, 207, .6"}}
          ></input>
          <Grid
            container
            spacing={2}
            sx={{
              margin: "20px",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {apiData.map(({ show }, index) => (
              <Grid item key={index}>
                <SingleCard
                  id={show.id}
                  name={show.name}
                  time={show.premiered}
                  image={show.image ? show.image.medium : ""}
                ></SingleCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
    )
}

export default Home;