import { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-500 focus:outline-none"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Vagitables
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.77a.75.75 0 01.02 1.06l-3 3a.75.75 0 11-1.06-1.06l3-3a.75.75 0 011.04 0zm9.54 1.06a.75.75 0 10-1.06-1.06l-3 3a.75.75 0 001.06 1.06l3-3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-[-4px]  z-10 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 hover:text-primary"
              role="menuitem"
            >
              Vegetables
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 hover:text-primary"
              role="menuitem"
            >
              Cold Drinks
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 hover:text-primary"
              role="menuitem"
            >
              Fruits
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 hover:text-primary"
              role="menuitem"
            >
              Bakery
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
