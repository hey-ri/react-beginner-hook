import React from "react";

const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            /* 사용자가 거부하지 않았을 때 */
            Notification.requestPermission().then((permission) => {
                /* then문은 granted, denide, defult 값중 하나가 될 것임*/
                if (permission === "granted") {
                    new Notification(title, options);
                } else {
                    /* else문은 user가 내가 그를 알아주길 바라지 않는다는 뜻 그래서 아무것도 반환시키지 않을 것임 */
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;
};

function App() {
    const triggerNotif = useNotification("can i steal your kimchi?", { body: "I love kimchi dont you?" });
    return (
        <div>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
}

export default App;
