'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const Nav = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen);
  const toggleProductDropdown = () => setIsProductDropdownOpen(!isProductDropdownOpen);

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
                onClick={toggleShopDropdown}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Shop
              </button>
              {isShopDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 z-10">
                  <Link href="/shop/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Clothing
                  </Link>
                  <Link href="/shop/electronics" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Electronics
                  </Link>
                  <Link href="/shop/accessories" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Accessories
                  </Link>
                </div>
              )}
            </li>

            {/* Product Dropdown */}
            <li className="relative">
              <button
                onClick={toggleProductDropdown}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Product
              </button>
              {isProductDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 z-10">
                  <Link href="/products/new" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    New Arrivals
                  </Link>
                  <Link href="/products/bestsellers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    Bestsellers
                  </Link>
                  <Link href="/products/sale" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    On Sale
                  </Link>
                </div>
              )}
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

        {/* Login button */}
        <div>
          <div className='flex space items-center'>
          <Link
            href="/login"
            className=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {/* Login */}
          </Link>
          
{/* <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
</div> */}<RxAvatar size={20} className=''/>
<CiSearch size={20}/>
<CiShoppingCart size={20} />

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
