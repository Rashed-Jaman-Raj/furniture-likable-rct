
import { Link, NavLink} from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';



const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const toggleMenu = () => {
      setIsMenuOpen(prevState => !prevState)
   }
  return (
    <header>
      <nav className='max-w-screen-2x1 container mx-auto flex justify-between items-center py-6 px-3 md:px-8 lg:px-12'>
         <Link to= "/" className='font-stretch-expanded'> RAJ FURNITURE </Link>

         {/* Desktop menu item */}
         <div className='md:flex lg:flex hidden justify-center items-center container sm:gap-4 md:gap-6 lg:gap-12'>
            <NavLink to= "/" className={({ isActive }) => isActive ? "text-red-400 font-medium underline" : "hover:text-red-400"}> Home </NavLink>
            <NavLink to= "/shop" className={({ isActive }) => isActive ? "text-red-400 font-medium underline" : "hover:text-red-400"}> Shop </NavLink>
            <NavLink to= "/contacts" className={({ isActive }) => isActive ? "text-red-400 font-medium underline" : "hover:text-red-400"}> Contact </NavLink>
            <NavLink to= "/about" className={({ isActive }) => isActive ? "text-red-400 font-medium underline" : "hover:text-red-400"}> About </NavLink>
         </div>


          <div>
            {/* Hamburger mobile menu */}
        <div onClick={toggleMenu} className='md:hidden text-xl cursor-pointer hover:text-red-400 '>
          {
            isMenuOpen ? <p>X</p> : <FaBars />
          }
          
        </div>



         {/* Shopping Cart icon  */}
            <NavLink to= "/cart" className={ 'hidden md:block cursor-pointer relative' }>  <AiOutlineShoppingCart  className='text-xl'/> <sup className='absolute top-0 -right-4 bg-amber-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'> 0 </sup> </NavLink>
          </div>

      </nav>
    </header>
  )
}

export default Navbar
