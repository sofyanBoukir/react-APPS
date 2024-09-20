

function App() {

  const handleClick = () =>{
    alert("cc soufian");
  }

  const handleCheck = () =>{
    if(true){
      console.log("wa ta sir t9awed");
      
    }
  }


  return (
    <div className="container">
      <center>
        <h1>Soufian </h1>
        <h1>Walid</h1>
        <h1>Ali</h1>  
        <h1>react js front end framwork</h1>  
        <p>three students on digital developement at tiznit ISTA</p>
        
        <button onClick={handleClick}>Click</button>
        <button onClick={handleCheck}>hh</button>
      </center>
    </div>
  );
}

export default App;
