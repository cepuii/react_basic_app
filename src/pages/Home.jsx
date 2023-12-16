import useRequest from "../hooks/useRequest";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/system";
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const swiperContainerStyle = {
  maxWidth: "100%",
  width: "100%",
  height: "90dvh",
  maxHeight: "100vh",
  display: "grid",
};

function Home() {
  const apiData = useRequest(
    `https://dolphin-app-pc6ii.ondigitalocean.app/article/popular`
  );

  return (
    <Grid item xs={12}>
      <Box className={"swiper-container"} sx={swiperContainerStyle}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className={"swiper-wrapper"}
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
