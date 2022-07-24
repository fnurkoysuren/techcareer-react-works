import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>increse</button>
            <button onClick={() => setCounter(0)}>reset</button>
            <button onClick={() => setCounter(counter - 1)}>decrease</button>
        </>
    )
}

export default Counter