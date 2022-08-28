import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `all ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    if (typeof duration !== "number" || typeof delay !== "number") {
        return;
    }
    return { ref: element, style: { opacity: 0 } };
};

function App() {
    const fadeInh1 = useFadeIn(0, 1);
    const fadeInp = useFadeIn(5, 5);
    return (
        <div>
            <h1 {...fadeInh1}>Hello</h1>
            <p {...fadeInp}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt unde! Hic vitae, ipsam eum
                commodi dicta sint, nulla ratione voluptatibus saepe, repellendus accusantium illum voluptas at quia
                quos nam?
            </p>
        </div>
    );
}

export default App;
