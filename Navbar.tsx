import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onAdminClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Coffee className="h-8 w-8 text-amber-800" />
            <span className="ml-2 text-xl font-bold text-amber-900">KOODHAA CAFE</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-amber-900 hover:text-amber-700 transition-colors">Home</a>
              <a href="#menu" className="text-amber-900 hover:text-amber-700 transition-colors">Menu</a>
              <a href="#about" className="text-amber-900 hover:text-amber-700 transition-colors">About</a>
              <a href="#contact" className="text-amber-900 hover:text-amber-700 transition-colors">Contact</a>
              <button
                onClick={onAdminClick}
                className="text-amber-900 hover:text-amber-700 transition-colors"
              >
                Admin
              </button>
              <button className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                Order Now
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900 hover:text-amber-700 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-amber-900 hover:text-amber-700">Home</a>
            <a href="#menu" className="block px-3 py-2 text-amber-900 hover:text-amber-700">Menu</a>
            <a href="#about" className="block px-3 py-2 text-amber-900 hover:text-amber-700">About</a>
            <a href="#contact" className="block px-3 py-2 text-amber-900 hover:text-amber-700">Contact</a>
            <button
              onClick={onAdminClick}
              className="block w-full text-left px-3 py-2 text-amber-900 hover:text-amber-700"
            >
              Admin
            </button>
            <button className="w-full text-left px-3 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}