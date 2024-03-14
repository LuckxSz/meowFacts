import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const App = () => {
  const { facts, isFetching } = useFetch(
    "https://meowfacts.herokuapp.com/?lang=por"
  );

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-pink-100 text-gray-900"
      }`}
    >
      <button
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 px-4 py-2 rounded-lg ${
          darkMode
            ? "bg-white text-gray-900 border border-gray-400 hover:bg-gray-100"
            : "bg-pink-600 text-white border border-pink-700 hover:bg-pink-700"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {isFetching && <p>Loading...</p>}
      <div
        className={`shadow-lg max-w-md w-full bg-white rounded-lg p-8 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        <h1
          className={`text-3xl font-semibold mb-4 ${
            darkMode ? "text-gray-900" : "text-pink-600"
          }`}
        >
          Fatos sobre gatinhos
        </h1>
        <div className={`${darkMode ? "text-gray-900" : "text-gray-700"}`}>
          {facts && <p>{facts.data}</p>}
        </div>
      </div>
    </div>
  );
};
