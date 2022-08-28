import React, { useEffect } from "react";

const useBeforeLeave = (onLeave) => {
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
    const handle = (e) => {
        //console.log(e);
        const { clientY } = e;
        if (clientY <= 0) {
            onLeave();
        }
    };
    if (typeof onLeave !== "function") {
        return;
    }
};

function App() {
    const begForLife = () => console.log("Pls don't leave");
    useBeforeLeave(begForLife);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default App;
