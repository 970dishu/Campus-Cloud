import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/favicon.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" fixed w-full z-50 bg-[#F2F2F2]  text-gray-500">
        <div className="container mx-auto px-4 pe-16 ">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-6 w-12 mr-2" />
              <h1 className="text-2xl text-black font-bold">Campus Cloud</h1>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-[#594545] transition-colors">Home</Link>
              <a href="/#about" className="hover:text-[#594545] transition-colors">About</a>
              <a href="/#wheel" className="hover:text-[#594545] transition-colors">Services</a>
              <Link to="/contact" className="hover:text-[#594545] transition-colors">Contact</Link>
              
              <Link to="/login" className="hover:text-[#594545] transition-colors">Login</Link>
            </div>
            <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>


      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 w-64 bg-[#373635] text-white z-40 p-4"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-16 text-white">
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-4 mt-16">
              <Link to="/" className="text-lg hover:text-[#594545] transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-lg hover:text-[#594545] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/services" className="text-lg hover:text-[#594545] transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/portfolio" className="text-lg hover:text-[#594545] transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              <Link to="/contact" className="text-lg hover:text-[#594545] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/login" className="text-lg hover:text-[#594545] transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

