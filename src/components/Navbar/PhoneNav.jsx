import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "./PhoneNav.css"

function PhoneNav() {
  const [showMenu, setShowMenu] = useState(false)

  let menu
  let menuMask

  const handleClick = () => {
    setShowMenu(false)
  }

  if (showMenu) {
    menu = <div className="menuDetails">
      <Link to="/" onClick={handleClick}>Home</Link>
      <Link to="/store" onClick={handleClick}>Store</Link>
      <Link to="/categories" onClick={handleClick}>Categories</Link>
      <Link to="/new-card" onClick={handleClick}>New Item</Link>
    </div>
    menuMask = <div onClick={() => setShowMenu(false)} className="emptySide"></div>
  }


  return (
    <nav className="phoneNav">
      <span className="appName">TechSap</span>
        <span className="menuIcon">
        <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>

      {menuMask}
      
      {menu}
      
      </nav>
  )
}

export default PhoneNav
