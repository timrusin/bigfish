import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick (!click)

  return (
    <div className={click ? "navbar active" : "navbar"}>
        <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-dash menu-dashes-angle1" : "fas fa-dash menu-dashes"}/>
        <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
        <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
      </div>



    </div>
  )
}

export default Navbar