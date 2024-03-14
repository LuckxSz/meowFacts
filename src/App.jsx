import { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://meowfacts.herokuapp.com/?lang=por"
        );
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.log("something got wrong with this api", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-pink-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-pink-600 mb-4">
          Fatos sobre gatinhos
        </h1>
        <div className="text-lg text-gray-700">
          {data && <p>{data.data}</p>}
        </div>
      </div>
    </div>
  );
};
