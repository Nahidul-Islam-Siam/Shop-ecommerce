'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const handleDarkModeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MySite
            </span>
          </Link>
        </div>

        {/* Nav links */}
        <div className="hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 md:mt-0 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Home
              </Link>
            </li>

            {/* Shop Dropdown */}
            <li className="relative">
              <button
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Shop
              </button>
            </li>

            {/* Product Dropdown */}
            <li className="relative">
              <button
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Product
              </button>
            </li>

            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Dark Mode Toggle and Login/Avatar */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"
            onClick={handleDarkModeToggle}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <MdLightMode size={24} className="text-yellow-400" /> : <MdDarkMode size={24} className="text-gray-900 dark:text-white" />}
          </button>

          {/* Avatar and other icons */}
          <Link href="/login" className="block py-2 px-3 text-gray-900 rounded dark:text-white">
            <RxAvatar size={20} />
          </Link>
          <CiSearch size={20} className="text-gray-900 dark:text-white" />
          <CiShoppingCart size={20} className="text-gray-900 dark:text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
