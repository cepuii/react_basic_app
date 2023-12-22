import { useParams } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import SingleItemHeader from "../components/SingIetemHeader/SingleItemHeader";
import { Box } from "@mui/material";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";
import ActorItem from "../components/ActorItem/ActorItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function ShowDetails() {
  const id = useParams()["id"].slice(1);
  const showById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}`;
  const showCastById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}/cast`;
  const apiData = useRequest(showById);
  const castData = useRequest(showCastById);

  return (
    <Box sx={{ flexGrow: 1, mb: 2, mt: "70px" }}>
      {apiData && (
        <>
          <SingleItemHeader {...apiData}></SingleItemHeader>
          <SingleItemTabs
            summary={apiData.summary}
            series={apiData.series}
          ></SingleItemTabs>
          <Box
            className={"swiper-container"}
            sx={{
              margin: "auto",
              maxWidth: "90vw",
              width: "100%",
              height: "auto",
              overflow: "hidden",
            }}
          >
            <Swiper
              spaceBetween={20}
              slidesPerView={"auto"}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className={"swiper-wrapper"}
            >
              {castData?.map((actorInfo, index) => (
                <SwiperSlide
                  key={index}
                  className={"swiper-slide"}
                  style={{ width: "360px", height: "230px" }}
                >
                  <ActorItem {...actorInfo}></ActorItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </>
      )}
    </Box>
  );
}

export default ShowDetails;
