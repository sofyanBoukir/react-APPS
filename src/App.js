import React from 'react'
import Header from './Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './Blog'
import Contact from './Contact'
import Blogs from './Blogs'
import NotFound from './NotFound'
const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Blog />}/>
                <Route path='/Blog' element={<Blogs />}/>
                <Route path='/Contact' element={<Contact />}/>
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
