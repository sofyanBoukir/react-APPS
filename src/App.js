import React, { useState } from 'react'
import { Search } from './Search';
import { Results } from './Results';

const list = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume"},
];

export const App = () => {
    const [type,setType] = useState("");
    const [results,setResults] = useState([]);

    const onSearchSubmit = (terme) =>{
        setType(terme)
        setResults(list.filter((item) => item.type === type))
        console.log(results);
        
    }
    

  return (
    <div className='container'>
        <h1>App component</h1>  
        <Search onSearch={onSearchSubmit} /> 
        <Results result={results} />
    </div>
  )
}
