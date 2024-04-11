import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <nav class="bg-white dark:bg-gray-800  shadow py-4 ">
        <div class="px-8 mx-auto max-w-7xl">
          <div class="flex items-center justify-between h-16">
            <div class=" flex items-center">
              <a class="flex-shrink-0" href="/">
                <img
                  class="w-8 h-8"
                  src="https://th.bing.com/th/id/OIP.nXiwCjPqfY93dzmNBiwcXAHaHa?rs=1&pid=ImgDetMain"
                  alt="Workflow"
                />
              </a>
              <div class="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <NavLink
                    exact
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/schdule"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Schdule
                  </NavLink>
                  <NavLink
                    to="/mark_report"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Mark Report
                  </NavLink>
                  <NavLink
                    to="/attendent_report"
                    className={({ isActive }) =>
                      isActive
                        ? "text-black dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-md font-bold"
                        : "text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    }
                  >
                    Attendent Report
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="flex items-center ml-4 md:ml-6">
                <div class="relative ml-3">
                  <div class="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                        id="options-menu"
                      >
                        <img
                          className="w-12 h-12 rounded-full"
                          onClick={toggleMenu}
                          src="https://source.unsplash.com/grayscale-photography-of-man-wearing-crew-neck-shirt-jmURdhtm7Ng"
                          alt="pic"
                        />
                      </button>
                    </div>
                    {isMenuOpen && (
                      <div
                        ref={menuRef}
                        className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
                      >
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <a
                            href="#"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Settings</span>
                            </span>
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Account</span>
                            </span>
                          </a>
                          <a
                            href="#"
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Logout</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex -mr-2 md:hidden">
              <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Home
            </a>
            <a
              class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Gallery
            </a>
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Content
            </a>
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
