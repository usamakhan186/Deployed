// src/app/Adminpanel/components/Sidebar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, LayoutDashboard, ShoppingCart, Car, Settings } from 'lucide-react';

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  
  const navigation = [
    { 
      name: 'Orders', 
      href: '/Adminpanel', 
      icon: ShoppingCart,
      current: true
    },
    { 
      name: 'Car Inventory', 
      href: '/Adminpanel/inventory', 
      icon: Car 
    },
    { 
      name: 'Settings', 
      href: '/Adminpanel/settings', 
      icon: Settings 
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <span className="text-xl font-semibold">Car Admin</span>
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-5 px-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 mt-2 text-sm rounded-lg ${
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}