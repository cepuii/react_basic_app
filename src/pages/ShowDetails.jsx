import { useParams } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import SingleItemHeader from "../components/SingIetemHeader/SingleItemHeader";
import { Box } from "@mui/material";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";

function ShowDetails() {
  const id = useParams()["id"].slice(1);
  const showById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}`;
  const apiData = useRequest(showById);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {apiData && (
        <>
          <SingleItemHeader {...apiData}></SingleItemHeader>{" "}
          <SingleItemTabs summary={apiData.summary} series={apiData.series}></SingleItemTabs>
        </>
      )}
    </Box>
  );
}

export default ShowDetails;
