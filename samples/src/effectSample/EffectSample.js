import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log("bu kod satırı sadece component yüklendiğinde çalışır!.");
    },[])

    useEffect(() => {
        console.log("2. sayaç arttı");
    }, [count2])

    return (<>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>increase</button>

        <h1>{count2}</h1>
        <button onClick={() => setCount2(count2 + 1)}>increase</button>
    </>
    )
}

export default EffectSample