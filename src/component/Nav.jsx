'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RxAvatar } from 'react-icons/rx';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md';

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleDarkModeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-semibold dark:text-white">
            MyStore
          </span>
        </Link>

        {/* Hamburger Icon (Visible on mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-gray-900 dark:text-white"
          >
            {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>

        {/* Links for larger screens */}
        <div className={`w-full md:flex md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium bg-gray-50 p-4 md:p-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Dark Mode Toggle & Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleDarkModeToggle}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? (
              <MdLightMode size={24} className="text-yellow-400" />
            ) : (
              <MdDarkMode size={24} className="text-gray-900 dark:text-white" />
            )}
          </button>
          <Link href="/login" className="text-gray-900 dark:text-white">
            <RxAvatar size={20} />
          </Link>
          <button>
            <CiSearch size={20} className="text-gray-900 dark:text-white" />
          </button>
          <button>
            <CiShoppingCart size={20} className="text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when hamburger is clicked) */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 py-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 text-gray-900 dark:text-white"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="block py-2 px-4 text-gray-900 dark:text-white"
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-2 px-4 text-gray-900 dark:text-white"
                onClick={toggleMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 text-gray-900 dark:text-white"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
