import React, { useState } from 'react'

function InputStateSample() {
    const [name, setName] = useState(' ')
    const [languages, setLanguages] = useState(["JavaScript", "Python", "Java"])

    const newLanguage = () => {
        setName('')
        setLanguages([...languages, name])
    }

    const removeLanguages = () => {
        setLanguages([])
    }

    return (<>
        <ul>
            {
                languages.map((item, key) => {
                    return <li key={key}>{item}</li>
                })
            }
        </ul>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={() => newLanguage()}>add new</button>
        <button onClick={() => removeLanguages()}>remove languages</button>
    </>
    )
}

export default InputStateSample