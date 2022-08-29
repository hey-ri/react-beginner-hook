import React from "react";
import useAxios from "./useAxios";

function App() {
    const { loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
    console.log(`Loading:${loading} \nData:${JSON.stringify(data)} \nError:${error}`);
    return (
        <div>
            <h1>{data && data.status}</h1>
            <h2>{loading && "Loading"}</h2>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

export default App;
