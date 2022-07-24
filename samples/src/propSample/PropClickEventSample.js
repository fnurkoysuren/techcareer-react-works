import React from 'react'

function PropClickEventSample({hello}) {
  return (<>
  <button onClick={() => hello()}>Hello props!!</button>
  </>    
  )
}

export default PropClickEventSample