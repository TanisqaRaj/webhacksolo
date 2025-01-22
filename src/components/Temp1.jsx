import React from 'react'
import { useSelector } from 'react-redux'

const Temp1 = () => {
    const {temp ,sub, multiply,divide}= useSelector(state=>state.general);
  return (
    
    <div>
      <p>sub is {sub}</p>
      <p>divide is {divide}</p>
      <p>sum is {temp}</p>
      <p>multiply is {multiply}</p>
    </div>
  )
}

export default Temp1
