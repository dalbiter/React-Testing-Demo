import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count+2)

    return (
        <div>
            <h1>Let's Count!</h1>
            <h2>Current Count: {count}</h2>
            <button onClick={increment}>Add</button>
            <label htmlFor="usr">Username</label>
            <input id="usr" type="text" placeholder="username" />
        </div>
    )
};

export default Counter;