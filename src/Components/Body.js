import React from 'react'
import Header from './Header'
import "./css/styles.css"

const Body = () => {
  return (
    <>
        <Header />
        <div className='body'>
            <div>
              <img src='https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png' alt='React logo' />
              <h1>React</h1>
              <h2>The library for web and native user interfaces</h2>
              <button id='learn-btn'>Learn React</button>
              <button id='api-btn'>API Reference</button>
            </div>
        </div>
    </>
  )
}

export default Body
