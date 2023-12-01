import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { DEFAULT_IMAGE } from "../../constants/constants";

export default function SingleItemHeader({name, rating, premiered, ended, genres, averageRuntime, series, views, image, status}){

    const genresString = genres?.join(", ");
    const showPoster = image?.medium?? DEFAULT_IMAGE; 
    const showLength = 1 * averageRuntime * series?.length;
    const showLengthHours = Math.floor(showLength / 60);
    const showLengthMinutes = showLength % 60;
    return(
        <Box>
            <Grid container sx={{justifyContent: "space-between", margin: "20px", color: "#fff"}}>
            <Grid item >
                <Typography variant="h2">{name} {rating?.average}</Typography>
                <Typography>{genresString}</Typography>
                <Typography> lasted: {showLengthHours}hr : {showLengthMinutes}mins views: {views}</Typography>
                <Typography>Premiered: {premiered} Status: {status}  {ended?? ""}</Typography>
            </Grid>
            <Grid item >
                <img src={showPoster} alt="film poster" />
            </Grid>
            </Grid>
        </Box>
    )

}