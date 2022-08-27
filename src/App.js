import React, { useState } from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        const {
            target: { value },
        } = e;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};
function App() {
    const maxLen = (v) => v.length < 10;
    const name = useInput("Ms.", maxLen); /* useInput에서 value를 반환해서 name과 같아짐 */
    return (
        <div>
            <h1>Hello</h1>
            <input type="text" placeholder="Name" {...name} />
            {/* value={name.value} onChange={name.onChange} 로 안하고 {...name}을 해도 name안에 있는 것들을 반환해준 다는 뜻으로 값은 같게 출력됨 */}
        </div>
    );
}

export default App;
