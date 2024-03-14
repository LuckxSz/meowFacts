import { useFetch } from "./hooks/useFetch";

export const App = () => {
  const { facts, isFetching } = useFetch(
    "https://meowfacts.herokuapp.com/?lang=por"
  );

  return (
    <div>
      {isFetching && <p>Loading...</p>}
      <div className="flex justify-center items-center h-screen bg-pink-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-pink-600 mb-4">
            Fatos sobre gatinhos
          </h1>
          <div className="text-lg text-gray-700">
            {facts && <p>{facts.data}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
