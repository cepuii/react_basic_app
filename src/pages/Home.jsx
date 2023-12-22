import useRequest from "../hooks/useRequest";
import { Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/system";
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";
import { Autoplay, Pagination } from "swiper/modules";
import ShowSlider from "../components/ShowSlider/ShowSlider";

import "swiper/css";
import "swiper/css/pagination";

const swiperContainerStyle = {
  marginTop: "60px",
  maxWidth: "100%",
  width: "100%",
  height: { xs: "150vh", md: "calc(100vh - 60px)" },
  minHeight: "calc(100vh - 60px)",
  display: "grid",
};

const slider = {
  marginTop: "33px",
  marginRight: "auto",
  marginLeft: "auto",
};

const sliderLabel = {
  color: "white",
  fontSize: "40px",
  marginBottom: "20px",
};

function Home() {
  const apiData = useRequest(
    `https://dolphin-app-pc6ii.ondigitalocean.app/article/popular`
  );

  const actionData = useRequest(
    "https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/action"
  );
  const comedyData = useRequest(
    "https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/comedy"
  );

  return (
    <>
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
      <Grid item sx={slider}>
        <Typography sx={sliderLabel}>{"Action shows"}</Typography>
        <ShowSlider shows={actionData}></ShowSlider>
      </Grid>
      <Grid item sx={slider}>
        <Typography sx={sliderLabel}>{"Comedy shows"}</Typography>
        <ShowSlider shows={comedyData}></ShowSlider>
      </Grid>
    </>
  );
}

export default Home;
