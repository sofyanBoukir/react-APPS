import React from 'react'

function expensiveCalcul(value) {
  for(let i=0; i<1000; i++){
    value ++;
  }
  return value
}

const App = () => {

  let n = 1;

  const calculate = () =>{
    return expensiveCalcul(n);
  }


  return (
    <div>
      <h1>{calculate()}</h1>
    </div>
  )
}

export default App
