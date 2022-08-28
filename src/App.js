import React, { useRef } from "react";

function App() {
    const potato = useRef();
    setTimeout(() => potato.current.focus(), 3000); /* getElementByID와 같은것 */
    return (
        <div>
            <h1>Hello</h1>
            <input type="text" placeholder="la" ref={potato} />
        </div>
    );
}

export default App;
