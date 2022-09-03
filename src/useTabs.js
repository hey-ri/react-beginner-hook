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
    const [currentIndex, setCurrentIndex] = useState(initialTab); /* useState는 항상 initialTab의 값을 갖는다. */
    if (!allTabs || !Array.isArray(allTabs)) {
        /* 배열이 아닐 때 return한다. */
        return;
    }
    return {
        //모든 currentItem의 currentIndex를 바꿔줄 것이고 그래서 모든것을 새로고침한다.
        currentItem: allTabs[currentIndex] /* currentItem은 allTab를 가지고 리턴될거고 currentIndex를 값으로 가진다. */,
        changeItem: setCurrentIndex,
    };
};

function App() {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div>
            <h1>Hello</h1>
            {/* index는 0또는 1이어야함
                모든 버튼은 onClick이벤트를 가짐
                인덱스와 상관없이 changeItem(index)을 실행하고
                index는 index 안에 있는 값인 0 또는 1로 바꿔줌
            */}
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}

export default App;
