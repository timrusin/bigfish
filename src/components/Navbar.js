import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const time = new Date()
const hour = time.getHours()
console.log(hour);

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick (!click)
    const closeMenu = () => setClick (false)

  return (
    <div className={click ? "navbar active" : "navbar"}>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-dash menu-dashes-angle1" : "fas fa-dash menu-dashes"}/>
            <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
            <i className={click ? "fas fa-dash menu-dashes-angle2" : "fas fa-dash menu-dashes"}/>
        </div>
        <Link to="/" onClick={closeMenu}>
            <img
                className='title-image'
                src='/assets/images/Big_Fish_Logo_Full.png'
                alt="Big Fish Aquarium logo"
            ></img>
        </Link>
            <h2 className='title'>BigFishAquarium.com</h2>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <Link className="nav-links" to="/" onClick={closeMenu}>
                Home
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-links" to="/store" onClick={closeMenu}>
                Store
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-links" to="/about" onClick={closeMenu}>
                About
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-links" to="/contact" onClick={closeMenu}>
                Contact
            </Link>
            </li>
        </ul>



    </div>
  )
}

export default Navbar