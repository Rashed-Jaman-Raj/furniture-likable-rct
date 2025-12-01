import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav>
         <Link to= "/"> LOGO </Link>
         <div>
            <NavLink to= "/"> Home </NavLink>
            <NavLink to= "/contacts"> Contact </NavLink>
         </div>
      </nav>
    </header>
  )
}

export default Navbar
