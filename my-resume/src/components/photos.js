import React from 'react'
import Prof from './prof1.jpg' 

function photos() {
  return (
    <div className='picture'>
      <div><img src={Prof} alt="not found"/></div>
      <div><img src={Prof} alt="not found"/></div>
      <div><img src={Prof} alt="not found"/></div>
    </div>
  )
}

export default photos
