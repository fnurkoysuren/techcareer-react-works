import React from 'react'

function TechButton({title, width, height}) {
  return (
    <button style={{color:'tomato', width: width, height: height}}>{title}</button>
  )
}

export default TechButton