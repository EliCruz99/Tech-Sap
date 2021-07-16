import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="nav-links">
      TechSap
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/new-card">New Item</Link>
    </nav>
  )
}

export default Navbar
