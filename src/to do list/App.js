import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [toDos,setToDos] = useState([]);
  const inputRef = useRef();


  function addItem(){
    const itemValue = inputRef.current.value;
    const newItem = {completed:false,itemValue};

    if(itemValue !== ''){
      setToDos([...toDos,newItem]);
    }else{
      alert("Please type somthing!");
    }
    inputRef.current.value = '';
  }


  const handleItemDone = (index) =>{
    const newToDos = [...toDos];
    newToDos[index].completed = !newToDos[index].completed;
    setToDos(newToDos);
  }

  const handleItemRemove = (indexToRemove) =>{
    const newToDos = [...toDos];
    newToDos.splice(indexToRemove,1);
    setToDos(newToDos);
  }

  return (
    <div className='container'>
      <h2>To do list Application</h2>
      <ul>
        {
          toDos.map((item,index) => {
            return <div className='itemContainer'>
              <li
               onClick={() => handleItemDone(index)}
               className={item.completed ? "done" : ""}
               >{item.itemValue}
               </li>
               <span id='remove-btn' onClick={() => handleItemRemove(index)}>❌</span>
            </div>
          })
        }
      </ul>
      <input type='text' ref={inputRef}></input>
      <button onClick={() => addItem()}>Add</button>
    </div>
  );
}

export default App;
