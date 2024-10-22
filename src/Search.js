import React, { useState } from 'react'

export const Search = ({onSearch}) => {

    const [type,setType] = useState("");

    const handleCLick = () =>{
        if(type !== ''){
            onSearch(type)
        }
    }
    
  return (
    <div>
        <h3>Search bar component</h3>
        <p>Enter the type here</p>
        <input type='text' 
        value={type} 
        onChange={(e) => setType(e.target.value)}/>

        <br></br>
        <button onClick={handleCLick}>Search</button>
    </div>
  )
}
