import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Button({ children, variant = 'primary', className, ...props }) {
  const baseStyle = "w-full px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-hover", // The Green Button
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button className={twMerge(baseStyle, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}