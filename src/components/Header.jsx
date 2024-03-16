import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="hidden lg:flex items-center lg:order-2">
            <NavLink
              exact="true"
              to="/"
              activeclassname="text-orange-700"
              className="text-gray-700 hover:text-orange-700 font-medium mx-3 lg:mx-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              activeclassname="text-orange-700"
              className="text-gray-700 hover:text-orange-700 font-medium mx-3 lg:mx-2"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              activeclassname="text-orange-700"
              className="text-gray-700 hover:text-orange-700 font-medium mx-3 lg:mx-2"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/github"
              activeclassname="text-orange-700"
              className="text-gray-700 hover:text-orange-700 font-medium mx-3 lg:mx-2"
            >
              Github
            </NavLink>
          </div>
          <div
            className={`${
              mobileMenuOpen ? "" : "hidden"
            } lg:hidden justify-between items-center w-full lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  exact={true}
                  to="/"
                  activeclassname="text-orange-700"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeclassname="text-orange-700"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeclassname="text-orange-700"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  activeclassname="text-orange-700"
                  className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Show mobile menu toggle button */}
          <button className="lg:hidden" onClick={handleMobileMenuToggle}>
            {/* Add your mobile menu toggle icon here */}
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
          {/* Show login button on mobile */}
          <div className="lg:hidden">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
