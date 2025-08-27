"use client";

import React from "react";

interface ButtonProps {
  text: string; 
  onClick?: () => void; 
  className?: string; 
}
const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;