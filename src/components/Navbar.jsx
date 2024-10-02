import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../public/logo.jpg';
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar =()=>{
      const [isMenuOpen, setIsMenuOpen] = useState(false);

    return   <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
           <img src={logo} alt="" width={'130px'} />
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/journey">Journey</NavLink>
            <NavLink to="/donate">Donate</NavLink>
            {/* <NavLink to="/contact">Contact</NavLink> */}
          </div>
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <NavLink to="/" mobile>Home</NavLink>
            <NavLink to="/about" mobile>About Us</NavLink>
            <NavLink to="/journey" mobile>Journey</NavLink>
            <NavLink to="/donate" mobile>Donate</NavLink>
            {/* <NavLink to="/contact" mobile>Contact</NavLink> */}
          </div>
        )}
      </nav>
}


function NavLink({ to, children, mobile = false }) {
  return (
    <Link
      to={to}
      className={`${
        mobile
          ? 'block py-2 px-4 hover:bg-gray-100'
          : 'text-gray-600 hover:text-primary'
      } transition duration-300`}
    >
      {children}
    </Link>
  );
}
export default Navbar