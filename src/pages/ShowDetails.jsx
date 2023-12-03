import { useParams } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import SingleItemHeader from "../components/SingIetemHeader/SingleItemHeader";
import { Box, Grid, Paper } from "@mui/material";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";
import ActorItem from "../components/ActorItem/ActorItem";
import { useState } from "react";

const PaginationDots = ({ totalDots, activeDot, onPageClick }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      {Array.from({ length: totalDots }).map((_, index) => (
        <Dot
          key={index}
          active={index === activeDot}
          onClick={() => onPageClick(index)}
        />
      ))}
    </div>
  );
};

const Dot = ({ active, onClick }) => {
  const dotStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    background: active ? "#2b2d42" : "#8d99ae",
    margin: "0 5px",
    cursor: "pointer",
  };

  return <div style={dotStyle} onClick={onClick} />;
};

function ShowDetails() {
  const id = useParams()["id"].slice(1);
  const showById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}`;
  const showCastById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}/cast`;
  const apiData = useRequest(showById);
  const castData = useRequest(showCastById);
  const [activeDot, setActiveDot] = useState(0);
  const cardsPerPage = 4;
  const totalDots = Math.ceil(castData.length / cardsPerPage);

  const handlePageClick = (index) => {
    setActiveDot(index);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      {apiData && (
        <>
          <SingleItemHeader {...apiData}></SingleItemHeader>{" "}
          <SingleItemTabs
            summary={apiData.summary}
            series={apiData.series}
          ></SingleItemTabs>
          <Grid container gap={2} sx={{ justifyContent: "center", mb: 2 }}>
            {castData
              .slice(
                activeDot * cardsPerPage,
                activeDot * cardsPerPage + cardsPerPage
              )
              .map((actorInfo, index) => (
                <Grid item>
                  <Paper elevation={3}>
                    <ActorItem key={index} {...actorInfo}></ActorItem>
                  </Paper>
                </Grid>
              ))}
          </Grid>
          <PaginationDots
            totalDots={totalDots}
            activeDot={activeDot}
            onPageClick={handlePageClick}
          />
        </>
      )}
    </Box>
  );
}

export default ShowDetails;
