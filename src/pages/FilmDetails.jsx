import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function FilmDetails(){

    const {filmId} = useParams();

    return(
        <>
        <Link to={"/home"}>Home</Link>
        <h1>This is film page with id: {filmId}</h1>
        </>
    ) 
}

export default FilmDetails;