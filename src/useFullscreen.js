import React, { useRef } from "react";

const useFullscreen = (onFulls) => {
    const element = useRef();

    const doCallback = (isFullscreen) => {
        if (onFulls && typeof onFulls === "function") {
            onFulls(isFullscreen);
        }
    };

    const triggerFull = () => {
        const currentElem = element.current;
        if (currentElem) {
            if (currentElem.requestFullScreen) {
                currentElem.requestFullscreen();
            } else if (currentElem.mozRequestFullScreen) {
                currentElem.mozRequestFullScreen();
            } else if (currentElem.webkitRequestFullscreen) {
                currentElem.webkitRequestFullscreen();
            } else if (currentElem.msRequestFullscreen) {
                currentElem.msRequestFullscreen();
            }

            doCallback(true);
        }
    };

    const triggerExit = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        doCallback(false);
    };

    return { element, triggerFull, triggerExit };
};

function App() {
    const onFulls = (isFull) => {
        /* isFull은 boolean값 */
        console.log(isFull ? "we are full" : "we are small");
    };
    const { element, triggerFull, triggerExit } = useFullscreen(onFulls);
    return (
        <div>
            <div ref={element}>
                <h1>hi</h1>
            </div>
            <button onClick={triggerExit}>Exit Fullscreen</button>
            <button onClick={triggerFull}>Make Fullscreen</button>
        </div>
    );
}

export default App;
