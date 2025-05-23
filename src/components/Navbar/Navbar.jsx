import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-gray-50 shadow-md px-4 rounded">
      <div className="flex justify-between">
        <a className="btn btn-ghost text-2xl font-bold">Grocery Billing</a>
      
      <div className="flex-none gap-2">
        <div className="form-control hidden sm:block">
          <input
            type="text"
            placeholder="Search products"
            className="input input-bordered w-40 md:w-64"
          />
        </div>
        </div>

        {/* Avatar Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="rounded-full" src="https://i.ibb.co/LXqrj8TT/nrd-D6-Tu-L3ch-LE-unsplash.jpg"/>
            </div>
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 p-2 shadow bg-base-100 rounded-box w-48 z-10">
              <li className="p-2 hover:bg-base-200 rounded">
                <a href="#">Profile</a>
              </li>
              <li className="p-2 hover:bg-base-200 rounded">
                <a href="#">Settings</a>
              </li>
              <li className="p-2 hover:bg-base-200 rounded">
                <a href="#">Logout</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
