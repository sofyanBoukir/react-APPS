import React, { useCallback, useEffect } from 'react'

const App = () => {
  let a = 13;
  let b = 14;

  const handleClick = useCallback(() =>{

    let result = a+b;
    console.log(result);
    
  },[a,b])


  useEffect(() =>{
    let result = a+b;
    console.log(result); 
  },[a,b])



  return (
    <div>
        <button onClick={handleClick}>Click to calcul (useCallback)</button>
        <button>Click to calcul (useEffect)</button>

    </div>
  )
}

export default App
