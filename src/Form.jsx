import React, { useState } from 'react'

export const Form = () => {
    const [fruits,setFruits] = useState(['banana','apple','mongo']);
    const [numbers,setNumbers] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [inputValue,setInputValue] = useState('')

    const [people,setPeople] = useState([
        {
            name:"soufian",
            age:20,
        },
        {
            name:"amine",
            age:11,
        },
        {
            name:"karim",
            age:16,
        },
        {
            name:"ahmed",
            age:30,
        }
    ])

        
    const total = people.reduce((total,item) =>{return total + item.age},0)
    const total2 = numbers.reduce((total,item) => {return total + item});
    console.log(total2);
    
    
    const handleDelte = (index) =>{
        setFruits(fruits.filter((item,i) => i !== index))
    }
    const handleAdd = () =>{
        if(inputValue !== ''){
            setFruits([...fruits,inputValue])
            setInputValue("")
        }else{
            alert("type somthing")
        }
    }
  return (
    <div className='fruits'>
        <h2>Add fruits</h2>
        <ul>
        {
            fruits && fruits.length ?
                fruits.map((fruit,index) => {
                    return <li key={index}>{fruit} <button onClick={() => handleDelte(index)}>X</button></li>
                })
            :null
        }
        </ul>   
        <input type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => handleAdd()}>Add fruit</button>
    </div>
  )
}
