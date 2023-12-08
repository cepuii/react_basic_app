import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
} from "@mui/material";
import DEFAULT_IMAGE from "../../images/actor-logo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#4A4E69",
  border: "none",
  borderRadius: "3px",
  boxShadow: 24,
  p: 4,
};

export default function ActorItem({ character = {}, person = {} }) {
  const [open, setOpen] = useState(false);
  const [actorId, setActorId] = useState(null);
  const [apiData, setApiData] = useState(null);
  const handleOpen = (id) => {
    setOpen(true);
    setActorId(id);
  };
  const handleClose = () => setOpen(false);

  const image =
    character?.image?.medium ?? person?.image?.medium ?? DEFAULT_IMAGE;

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
    <>
      <Card raised="true" sx={{ width: 350, height: 200, bgcolor: "#8d99ae" }}>
        <CardActionArea
          onClick={() => handleOpen(person.id)}
          sx={{ display: "flex", height: "100%" }}
        >
          <CardMedia
            component="img"
            image={image}
            alt="actor photo"
            sx={{ width: "150px", height: "auto" }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div">
              {person.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              As {character.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                  <IconButton>
                    <Link to={`/shows/:${item?.id}`} onClick={handleClose}>
                      <ImageListItem key={item?.id}>
                        <img src={item?.image?.medium} alt="show logo" />
                        <ImageListItemBar title={item.name} />
                      </ImageListItem>
                    </Link>
                  </IconButton>
                ))}
              </ImageList>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </>
  );
}
