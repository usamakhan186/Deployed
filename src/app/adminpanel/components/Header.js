// src/app/Adminpanel/components/Header.js
'use client';

import { Menu } from 'lucide-react';

export default function Header({ onMenuClick }) {
  return (
    <header className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <button
            type="button"
            className="lg:hidden px-4 text-gray-500 focus:outline-none"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex-1 flex justify-end items-center">
            <div className="ml-4 flex items-center">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                <span className="text-sm font-medium">Admin User</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}