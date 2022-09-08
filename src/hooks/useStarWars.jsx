import { useState, useEffect } from "react";
import axios from "axios";

export default function useStarWars(category) {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("");

  axios.defaults.baseURL = "https://swapi.dev/api";

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(category, {
        params: { search: keyword },
        timeout: 4000,
      })
      .then((response) => {
        setList(response.data.results);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.warn("API Call canceled");
        } else {
          console.log(err.message);
        }
      });

    return () => {
      // Abort axios fetch everytime a new fetch is demanded
      controller.abort();
    };
  }, [category, setList, keyword]);

  return [list, setKeyword];
}
