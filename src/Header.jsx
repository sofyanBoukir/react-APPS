import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to={"/"}>Home</Link>
        <Link to={"/Blog"}>Blogs</Link>
        <Link to={"/Contact"}>Contact</Link>
    </div>
  )
}

export default Header
