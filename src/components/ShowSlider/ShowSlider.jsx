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
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function ShowSlider({ shows = [] }) {
  console.log(shows);
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        width: "100%",
        height: "200px",
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
        style={{ padding: "0 50px" }}
      >
        {shows?.map((item) => (
          <SwiperSlide style={{ width: "160px", height: "282px" }}>
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
