import { useEffect, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://meowfacts.herokuapp.com/?lang=por",
});

export const useFetch = (url) => {
  const [facts, setFacts] = useState("");
  const [isFetching, setIsFetching] = useState("true");
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setFacts(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);
  return { facts, isFetching, error };
};
