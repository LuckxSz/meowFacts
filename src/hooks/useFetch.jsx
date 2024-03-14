import { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = (url) => {
  const [facts, setFacts] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setFacts(response.data);
    });
  }, []);
  return { facts };
};
