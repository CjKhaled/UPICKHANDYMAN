import { useRef } from 'react'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import Logo from '../assets/upick-logo.webp'
import './navbar.css'

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav")
  }

  return (
   <nav>
        <div className="container nav__container">
           <a href="#" aria-label='Go to home page'><img className='nav__logo' src={Logo} width='125px' height='85px' alt="upick handyman llc"/></a>

           <ul className="nav__menu" ref={navRef} onClick={showNavbar}>
             <li><a href="#" aria-label='Go to home page'>Home</a></li>
             <li><a href="#about" aria-label='Go to about page'>About</a></li>
             <li><a href="#services" aria-label='Go to services page'>Services</a></li>
             <li><a href="#portfolio" aria-label='Go to portfolio page'>Portfolio</a></li>
             <li><a href="#contact" aria-label='Go to contact page'>Contact</a></li>
             <button className='nav-btn nav-close-btn' aria-label='button to close'>
             <FaTimes/>
           </button>
           </ul>
           <button className="nav-btn" onClick={showNavbar}>
               <FaBars/>
           </button>
       </div>
   </nav>
  )
}

export default Navbar