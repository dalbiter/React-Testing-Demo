import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count+1)

    return (
        <div>
            <h1>Let's Count!</h1>
            <h2>Current Count: {count}</h2>
            <button onClick={increment}>Add</button>
        </div>
    )
};

export default Counter;