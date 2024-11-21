'use client';

import { useState } from 'react';
import Link from 'next/link';

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId;

  // Handle mouse enter
  const handleMouseEnter = () => {
    clearTimeout(timeoutId);  // Clear any existing timeout to avoid delays when hovering back
    setIsOpen(true);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 100); // Adjust delay time as needed (300ms in this case)
  };

  return (
    <div 
      className="relative inline-block text-left" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Dropdown Button */}
      <button
        className="inline-flex justify-center w-full hover:text-red-400 hover:bg-gray-50/40 px-3 py-2 rounded-md text-sm font-medium transition-colors"
      >
        Services
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link
              href="/services_page/safepurchase"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Safe Purchase
            </Link>
            <Link
              href="/services_page/inspect"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Inspect Car
            </Link>
            <Link
              href="/services_page/refund"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              We Give Refund
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
