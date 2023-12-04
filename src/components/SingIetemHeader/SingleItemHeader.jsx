import {
  Avatar,
  Box,
  IconButton,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import DEFAULT_IMAGE from "../../images/movie-logo.png";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

export default function SingleItemHeader({
  name = "",
  type = "",
  rating = 0.0,
  premiered = "1999-1-1",
  genres = [],
  averageRuntime = 60,
  series = [],
  views = 1,
  image = DEFAULT_IMAGE,
}) {
  const genresString = genres?.join(", ");
  const showPoster = image?.medium ?? DEFAULT_IMAGE;
  const showLength = 1 * averageRuntime * series?.length;
  const showLengthHours = Math.floor(showLength / 60);
  const showLengthMinutes = showLength % 60;
  let dateString = "";
  if (premiered) {
    const [year, month, day] = premiered.split("-");
    dateString = new Date(year, month - 1, day).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }
  return (
    <Box sx={{ margin: "20px 50px" }}>
      <Grid
        container
        sx={{ justifyContent: "space-between", margin: "20px", color: "#fff" }}
      >
        <Grid item alignSelf="center">
          <Typography variant="h2">
            {name}
            <Rating sx={{bottom: "10px", fontSize: "25px"}} value={rating?.average} precision={0.1} max={10} readOnly />
            {rating?.average}
          </Typography>
          <Typography marginBottom={1}>{genresString}</Typography>
          <Typography marginBottom={1}>
            <Avatar
              sx={{
                bgcolor: "grey",
                display: "inline-block",
                width: 16,
                height: 16,
                fontSize: 14,
                textAlign: "center",
              }}
              variant="rounded"
            >
              {type.at(0)}
            </Avatar>{" "}
            {showLengthHours}hr : {showLengthMinutes}mins • {dateString} • 👁
            {views} views
          </Typography>
          <Box marginBottom={1} sx={{ display: "flex" }}>
            <IconButton size="small" sx={{ bgcolor: "#fff", margin: "5px" }}>
              <ShareIcon sx={{ color: "red", fontSize: "small" }}></ShareIcon>
            </IconButton>
            <IconButton size="small" sx={{ bgcolor: "#fff", margin: "5px" }}>
              <FavoriteIcon
                sx={{ color: "red", fontSize: "small" }}
              ></FavoriteIcon>
            </IconButton>
            <IconButton size="small" sx={{ bgcolor: "#fff", margin: "5px" }}>
              <AddIcon sx={{ color: "red", fontSize: "small" }}></AddIcon>
            </IconButton>
          </Box>
          <Typography color="red">
            {genres.length !== 0 && (
              <>
                <CollectionsBookmarkIcon fontSize="small" /> TAGS:{" "}
              </>
            )}
            {[...genres].map((value, index) => (
              <Link key={index} href="#" color="#fff" underline="none">
                {value}
                {"  "}
              </Link>
            ))}
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={showPoster}
            alt="film poster"
            width="220px"
            height="300px"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
