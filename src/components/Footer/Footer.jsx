import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <a href="https://github.com/EliCruz99" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faGithub} className="git" />
      </a>
      <a href="https://www.linkedin.com/in/elijah-cruz" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
       </a>
      
    </footer>
  )
}

export default Footer
