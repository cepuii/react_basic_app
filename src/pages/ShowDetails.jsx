import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import SingleItemHeader from "../components/SingeItemHeader/SingleItemHeader";
import { Box } from "@mui/material";

function ShowDetails() {
  const  id  = useParams()['id'].slice(1);
  const showById = `https://dolphin-app-pc6ii.ondigitalocean.app/article/${id}`;
  const apiData = useRequest(showById);
  console.log(apiData);
  return (
    <Box sx={{flexGrow: 1}}>
      <Link to={"/home"}>Home</Link>
      {apiData && <SingleItemHeader {...apiData}></SingleItemHeader>}
    </Box>
  );
}

export default ShowDetails;
