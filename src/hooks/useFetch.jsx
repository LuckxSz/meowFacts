import { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = (url) => {
  const [facts, setFacts] = useState("");
  const [isFetching, setIsFetching] = useState("true");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setFacts(response.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);
  return { facts, isFetching };
};
