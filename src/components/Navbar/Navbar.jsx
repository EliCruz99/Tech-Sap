import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="link">
      TechSap
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
    </nav>
  )
}

export default Navbar
