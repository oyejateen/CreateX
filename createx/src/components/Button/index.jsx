import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick, className = '' }) => {
  const baseClasses = 'px-6 py-2 bg-orange-500 text-white rounded-[0.6125rem] text-base font-bold hover:bg-orange-600 transition-all duration-300 inline-block font-kagitingan text-xl text-center';
  
  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;