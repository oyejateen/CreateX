import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/index';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuRef = useRef(null);

useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scroll > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 `}>
      {onscroll = ()=>{setIsMenuOpen(false)} }
      <div className="container mx-auto px-6 py-2 flex justify-between backdrop-blur-md items-center">
        <button onClick={toggleMenu} className={`${isMenuOpen ? 'invisible' : 'visible'}`}>
          <img src="/assets/menu-icon.svg" alt="Menu" className="w-[5.75rem] h-[3.875rem]" />
        </button>

        <Link to="/" className="mx-auto">
          <img src="/assets/logo.svg" alt="CreateX Logo" className="h-14" />
        </Link>

        <Button to="/login">LOGIN</Button>
      </div>

      <div ref={menuRef} className={`fixed top-0 left-0 w-80 h-full bg-[#1E1E1E] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 flex flex-col space-y-6">
          <div className="flex justify-between items-center mb-6">
            <Button to="/register" className="flex-grow mr-4" onClick={closeMenu}>REGISTER NOW</Button>
            <button onClick={toggleMenu} className="p-2">
              <img src="/assets/menu-close.svg" alt="Close Menu" className="w-8 h-8" />
            </button>
          </div>
          <Link to="/sponsors" className="text-white font-kagitingan text-2xl text-left" onClick={closeMenu}>SPONSORS & PARTNERS</Link>
          <Link to="/problem-statements" className="text-white font-kagitingan text-2xl text-left" onClick={closeMenu}>PROBLEM STATEMENTS</Link>
          <Link to="/rules" className="text-white font-kagitingan text-2xl text-left" onClick={closeMenu}>RULES</Link>
          <Link to="/schedule" className="text-white font-kagitingan text-2xl text-left" onClick={closeMenu}>SCHEDULE</Link>
          <Link to="/faq" className="text-white font-kagitingan text-2xl text-left" onClick={closeMenu}>FAQ</Link>
          <Link to="/contact" className="text-white font-kagitingan text-2xl text-left" onClick={closeMenu}>CONTACT</Link>
          <Link to="/team" className="text-white font-kagitingan text-2xl text-left" onClick={closeMenu}>ORGANIZING TEAM</Link>
          <div className="border-t border-white my-4"></div>
          <Link to="/submission" className="text-white font-kagitingan text-2xl text-left" onClick={closeMenu}>SUBMISSION PORTAL</Link>
          <Link to="/registration" className="text-white font-kagitingan text-2xl text-left" onClick={closeMenu}>TEAM REGISTRATION</Link>
        </div>
        <div className="absolute bottom-8 left-0 w-full flex justify-center">
          <img src="/assets/logo.svg" alt="CreateX Logo" className="h-12" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
