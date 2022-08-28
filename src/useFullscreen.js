import React, { useRef } from "react";

const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen();
            if (callback && typeof callback === "function") {
                callback(true);
            }
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if (callback && typeof callback === "function") {
            callback(false);
        }
    };
    return { element, triggerFull, exitFull };
};

function App() {
    const callback = (isFull) => {
        /* isFull은 boolean값 */
        console.log(isFull ? "we are full" : "we are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(callback);
    return (
        <div>
            <div ref={element}>
                <h1>hi</h1>
            </div>
            <button onClick={exitFull}>Exit Fullscreen</button>
            <button onClick={triggerFull}>Make Fullscreen</button>
        </div>
    );
}

export default App;
