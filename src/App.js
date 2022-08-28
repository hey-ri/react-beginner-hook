import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);
    return status;
};

function App() {
    const handleNetworkChange = (online) => {
        console.log(online ? "we just onlinhe" : "we are offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
        <div>
            <h1>{onLine ? "onLine" : "offLine"}</h1>
        </div>
    );
}

export default App;
