import React, { useEffect, useState } from 'react'

export const Fetch = () => {
    const [inputValue,setInputValue] = useState(0);
    const [apiData,setApiData] = useState([])
    const [filtredData,setFilteredData] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            return response.json()
        })
        .then((data) =>{
            setApiData(data)                   
   
            const filter = data.filter((item) => item.userId == inputValue);
            setFilteredData(filter)
        })
        .catch((error) =>{
            console.log(error);
        })
    },[inputValue])
    
  return (
    <div>
        <h2>Listes de posts a partir de l'API</h2>
        <input type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
        <br></br>
        <ul>
            {
                filtredData && filtredData.length?
                    filtredData.map((item) =>{
                        return <li>{item.title}</li>
                    })
                :<h2>No data with this userId</h2>
            }
        </ul>
    </div>
  )
}
