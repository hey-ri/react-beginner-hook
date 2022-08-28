import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onConfirm !== "function") {
        return;
    }
    const confirmAcction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAcction;
};

function App() {
    const deleteworld = () => console.log("Deleting the world");
    const aborted = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure ?", deleteworld, aborted);
    return (
        <div>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
}

export default App;
