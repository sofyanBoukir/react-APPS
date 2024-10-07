import React, {  createContext, useState } from 'react'
import "./styles.css"
import Card from './Card';

export const AppContext = createContext();

const App = () => {

  const [isDarkMode,setIsDarkMode] = useState(false);


  const handleChange = (event) =>{
    setIsDarkMode(!isDarkMode)
    console.log(isDarkMode);
    
  }
  return (
    <>
      <AppContext.Provider value={isDarkMode}>
        <div className={isDarkMode?"darkMode":""}> 
          <div class="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={handleChange} checked={isDarkMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark mode</label>
          </div>
          <hr></hr>
          <div className='cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </AppContext.Provider>
    </>
  )
}


export default App;