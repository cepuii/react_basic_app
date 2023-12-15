import { useEffect, useState } from "react";
import DEFAULT_SHOW_IMAGE from "../images/movie-logo.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  CardActionArea,
  Grid,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";

const ActorDetails = () => {
  console.log("render page");
  const [apiData, setApiData] = useState(null);
  const actorId = useParams()["id"].slice(1);
  useEffect(() => {
    async function makeRequest() {
      try {
        const response = await axios.get(
          `https://dolphin-app-pc6ii.ondigitalocean.app/article/actor/${actorId}`
        );
        setApiData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (actorId) {
      makeRequest();
    }
  }, [actorId]);

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent={"space-around"}
      sx={{ margin: "20px" }}
    >
      <Grid item xs={3}>
        <img
          src={apiData?.image?.original}
          alt="Actor"
          width="220px"
          height="auto"
          style={{ margin: "30px" }}
        />
        <Typography variant="h4" component="h4">
          {"Personal info"}
        </Typography>
        <IconButton>
          <FacebookIcon></FacebookIcon>
        </IconButton>
        <IconButton>
          <TwitterIcon></TwitterIcon>
        </IconButton>
        <IconButton>
          <ShareIcon></ShareIcon>
        </IconButton>
        <Typography variant="h6" component="h4">
          {"Birthday"}
        </Typography>
        <Typography component="p">{apiData?.birthday}</Typography>
        <Typography variant="h6" component="h4">
          {"Country"}
        </Typography>
        <Typography component="p">{apiData?.country?.name}</Typography>
        <Typography variant="h6" component="h4">
          {"Gender"}
        </Typography>
        <Typography component="p">{apiData?.gender}</Typography>
      </Grid>
      <Grid item xs={9}>
        <Box>
          <Typography variant="h3" component="h2">
            {apiData?.name}
          </Typography>
          <Typography component="p">{apiData?.name}</Typography>
          <hr
            style={{
              height: "2px",
              width: "100%",
              border: "none",
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <Typography variant="h5" component="h4" mb="20px">
            {"Acting in"}
          </Typography>
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
              {apiData?.casts?.map((item) => (
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default ActorDetails;

/*

    <Box>
      <Card raised="true" sx={{ display: "flex", height: "100%" }}>
        <CardMedia
          component="img"
          image={apiData?.image?.original}
          alt="actor photo"
          sx={{ width: "400px", height: "auto" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {apiData?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {apiData?.birthday}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {apiData?.country?.name}
          </Typography>
          <ImageList sx={{ width: 500, height: 450 }}>
            {apiData?.casts?.map((item) => (
              <CardActionArea key={item?.id}>
                <Link to={`/shows/:${item?.id}`}>
                  <ImageListItem>
                    <img
                      src={item?.image?.medium ?? DEFAULT_SHOW_IMAGE}
                      alt="show logo"
                    />
                    <ImageListItemBar title={item.name} />
                  </ImageListItem>
                </Link>
              </CardActionArea>
            ))}
          </ImageList>
        </CardContent>
      </Card>
    </Box>

*/
