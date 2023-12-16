import useRequest from "../hooks/useRequest";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/SearchSlice";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Box } from "@mui/system";
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";

const searchInputStyle = {
  width: "270px",
  margin: "40px 20px 0",
  height: "20px",
  backgroundColor: "209, 208, 207, .6",
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
    <Grid item xs={12}>
      {/* <Grid item>
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
      </Grid> */}
      <Box
        className={"swiper-container"}
        sx={{
          maxWidth: "100%",
          width: "100%",
          height: "90dvh",
          maxHeight: "100vh",
          display: "grid",
        }}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className={"swiper-wrapper"}
          style={{}}
        >
          {apiData.map((cardInfo, index) => (
            <SwiperSlide
              key={index}
              className={"swiper-slide"}
              style={{ width: "100%", maxWidth: "100%" }}
            >
              <TitleSingleSlide {...cardInfo}></TitleSingleSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Grid>
  );
}

export default Home;
