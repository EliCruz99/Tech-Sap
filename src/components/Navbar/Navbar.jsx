import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import PhoneNav from './PhoneNav'

function Navbar() {
  return (
    <>
    <nav className="nav-links">
      <Link to="/" className="techSap">TechSap</Link>
      <Link to="/" className="links">Home</Link>
      <Link to="/store" className="links">Store</Link>
      <Link to="/categories" className="links">Categories</Link>
      <Link to="/new-card" className="links">New Item</Link>
      </nav>
      <PhoneNav/>
    </>
  )
}

export default Navbar
