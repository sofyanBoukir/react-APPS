import React, { useEffect, useState } from 'react'
import { Count } from './Count';

export const App = () => {
    const [show,setShow] = useState(false);
    
  return (
    <div className='app-container'>
        <h2>App counter component</h2>
        <button onClick={() => setShow(!show)}>
            {
                show ? "Hide":"Show"
            }
        </button>
        {
            show && <Count />
        }
    </div>
  )
}
