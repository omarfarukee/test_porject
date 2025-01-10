// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent  backdrop-blur-md'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        
        <div className="text-xl font-bold">MyLogo</div>

   
        <div className="text-lg">
         <NavLink to="/home">
            <a  className="hover:text-gray-400">
            Home
          </a>
        </NavLink> 
        </div>

       
        <div className="text-2xl">
          <FiUser className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
