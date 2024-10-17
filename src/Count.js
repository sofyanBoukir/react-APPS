import React, { useEffect, useState } from 'react'

export const Count = () => {
    const [count,setCount] = useState(0);

    useEffect(() =>{
      document.title = `clicked${count}`
    },[count])
  return (
    <div className='count-container'>
        <h3>Counter component</h3>
        <p>Counter: {count}</p>
        <button onClick={() =>setCount(count+1)}>Increment</button>
    </div>
  )
}
