import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center pl-0 md:pl-0 ml-4 md:ml-2">
            <Link
              href="#about"
              className="text-xl font-bold text-gray-100 sm:hidden"
            >
              Rami
            </Link>
            <Link
              href="#about"
              className="hidden sm:block text-xl font-bold text-gray-100"
            >
              Rami Al-Azzawe
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Links for Larger Screens */}
          <div className="hidden md:flex ml-10 items-baseline space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
            >
              {" / home "}
            </Link>
            <Link
              href="/projects"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
            >
              {" / projects "}
            </Link>
            <Link
              href="/blogs"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap"
            >
              {" / blogs "}
            </Link>
          </div>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isOpen && (
          <div className="md:hidden">
            <Link
              href="/"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {" / home "}
            </Link>
            <Link
              href="/projects"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {" / projects "}
            </Link>
            <Link
              href="/blogs"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {" / blogs "}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;