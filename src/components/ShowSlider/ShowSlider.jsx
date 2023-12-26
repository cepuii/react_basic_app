import DEFAULT_SHOW_IMAGE from "../../images/movie-logo.png";
import { Link } from "react-router-dom";
import {
  Box,
  CardActionArea,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const swiperContainer = {
  maxWidth: "80vw",
  width: "100%",
  height: "auto",
  overflow: "hidden",
};

function ShowSlider({ shows = [] }) {
  return (
    <Box className={"swiper-container"} sx={swiperContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={"swiper-wrapper"}
      >
        {shows?.map((item, index) => (
          <SwiperSlide
            key={index}
            className={"swiper-slide"}
            style={{ width: "160px", height: "282px" }}
          >
            <CardActionArea key={item?.id}>
              <Link to={`/shows/:${item?.id}`}>
                <ImageListItem>
                  <img
                    src={item?.image?.medium ?? DEFAULT_SHOW_IMAGE}
                    width="140px"
                    height="200px"
                    alt="show logo"
                    style={{ objectFit: "contain" }}
                  />
                  <ImageListItemBar title={item.name} />
                </ImageListItem>
              </Link>
            </CardActionArea>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default ShowSlider;
