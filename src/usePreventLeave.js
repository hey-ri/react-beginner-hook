import React, { useEffect } from "react";

const useBeforeLeave = () => {
    const listener = (e) => {
        e.preventDefault();
        e.returnValue = "";
    };

    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
};
function App() {
    const { enablePrevent, disablePrevent } = useBeforeLeave();
    const begForLife = () => console.log("Pls don't leave");
    useBeforeLeave(begForLife);
    return (
        <div>
            <button onClick={enablePrevent}>protect</button>
            <button onClick={disablePrevent}>unprotect</button>
        </div>
    );
}
export default App;
