
import { Link, NavLink} from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { useCart } from '../../pages/shop/CartContext';




const Navbar = () => {
  const {cartItems} = useCart();

   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false)

   const toggleMenu = () => {
      setIsMenuOpen(prevState => !prevState)
   }

   //when Scrolle apply bg color to navbar
   useEffect(() => {
    const handleScroll =() => {
      if(window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return() => {
      window.addEventListener('scroll', handleScroll);
    }
   }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"} `}>
      <nav className='max-w-screen-2x1 container mx-auto flex justify-between items-center py-4 px-3 md:px-8 lg:px-12'>
         <Link to= "/" className='text-2xl font-bold text-amber-500  whitespace-nowrap'> Raj Furniture </Link>

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
        <FaBars />
        </div>



          {/* Shopping Cart icon  */}
            <NavLink to= "/cart" className={ 'hidden md:block cursor-pointer relative' }>  <AiOutlineShoppingCart  className='text-2xl'/> <sup className='absolute top-0 -right-4 bg-amber-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>{cartItems.length}</sup> </NavLink>
          </div>


          {/* Mobile Menu Item  */}
          {/* inset-0 = full inside measurement */}
          <div className={` fixed inset-0 items-center justify-center gap-8 text-lg pt-20 md:hidden   text-white bg-black/83 transition-all duration-300 ${isMenuOpen ? 'translate-x-0'  : '-translate-x-full'} `}>
            <div onClick={toggleMenu} className='absolute top-5 right-5 text-2xl cursor-pointer'>
              <FaTimes />
            </div>

            {/* Wrap all links in one clickable container */}
            <div onClick={toggleMenu} className='flex flex-col items-center gap-8'>
              <NavLink to= "/" className={({ isActive }) => isActive ? "text-red-400 font-medium underline" : "hover:text-yellow-400"}> Home </NavLink>
            <NavLink to= "/shop" className={({ isActive }) => isActive ? "text-red-400 font-medium underline" : "hover:text-yellow-400"}> Shop </NavLink>
            <NavLink to= "/contacts" className={({ isActive }) => isActive ? "text-red-400 font-medium underline" : "hover:text-yellow-400"}> Contact </NavLink>
            <NavLink to= "/about" className={({ isActive }) => isActive ? "text-red-400 font-medium underline" : "hover:text-yellow-400"}> About </NavLink>
            </div>
          </div>
      </nav>
    </header>
  )
}

export default Navbar