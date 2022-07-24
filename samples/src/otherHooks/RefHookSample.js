import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';

function RefHookSample() {

    //     //1.yol use state
    // const [h1color, seth1color] = useState('')

    //   return (<>
    //   <h1 style={{color: h1color}}>Fatma Nur Köysüren</h1>
    //   <Button variant="outlined" onClick={() => seth1color('tomato')}>Change h1 Color</Button>
    //   </>
    //   )

    let h1Ref = useRef();
    const changeColor = () => {

        h1Ref.current.style.color = 'orange'

    }

    return (<>
        <h1 ref={h1Ref}>Fatma Nur Köysüren</h1>
        <Button variant="outlined" onClick={() => changeColor()}>Change h1 Color</Button>
    </>
    )
}

export default RefHookSample