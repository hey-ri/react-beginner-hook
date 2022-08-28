import React, { useState } from "react";

const content = [
    {
        tab: "section",
        content: " I'm the content of the section",
    },
    {
        tab: "section 2",
        content: " I'm the content of the section 2",
    },
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex] /* currentItem은 allTab를 가지고 리턴될거고 currentIndex를 값으로 가진다. */,
        changeItem: setCurrentIndex,
    };
};

function App() {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div>
            <h1>Hello</h1>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}

export default App;
