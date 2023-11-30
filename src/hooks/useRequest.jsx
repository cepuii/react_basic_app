import { useState, useEffect } from "react";
import axios from "axios";

function useRequest(search){
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        async function makeRequest() {
          try {
            if (search.length >= 3) {
              const response = await axios.get(
                `https://api.tvmaze.com/search/shows?q=${search}`
              );
              setApiData(response.data);
            } else {
              setApiData([]);
            }
          } catch (error) {
            console.log(error);
          }
        }
        makeRequest();
      }, [search])

      return apiData;
}

export default useRequest;