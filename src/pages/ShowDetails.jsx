import { useParams } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import SingleItemHeader from "../components/SingIetemHeader/SingleItemHeader";
import { Box, Grid, Paper } from "@mui/material";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";
import ActorItem from "../components/ActorItem/ActorItem";

function ShowDetails() {
  const id = useParams()["id"].slice(1);
  const showById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}`;
  const showCastById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}/cast`;
  const apiData = useRequest(showById);
  const castData = useRequest(showCastById);
  console.log(castData);
  return (
    <Box sx={{ flexGrow: 1 }}>
      {apiData && (
        <>
          <SingleItemHeader {...apiData}></SingleItemHeader>{" "}
          <SingleItemTabs
            summary={apiData.summary}
            series={apiData.series}
          ></SingleItemTabs>
          <Grid container gap={2} sx={{justifyContent: "center", mb: 2}}>
          {castData.map((actorInfo, index) => (
            <Grid item >
            <Paper elevation={3}>
            <ActorItem key={index} {...actorInfo}></ActorItem>
            </Paper>
            </Grid>
          ))}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default ShowDetails;
