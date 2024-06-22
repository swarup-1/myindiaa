import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../Assets/logo.png';

const Navbar = () => {
  const cart = useSelector(state => state.products.cart);

  return (
    <nav className="top-0 w-full p-2 border-b bg-white shadow-md">
      <div className="flex justify-between items-center w-full px-4 gap-2">
        <NavLink to="/">
          <img className="w-20 h-20" src={logo} alt="Logo" />
        </NavLink>
        <div className="flex items-center w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 w-full rounded-l focus:border-gray-500 focus:outline-none"
          />
          <NavLink to="/cart">
            <button className="border p-2 bg-gray-200 rounded-r">
              <i className="fas fa-search text-gray-600"></i>
            </button>
          </NavLink>
        </div>
        <NavLink to="/cart" className="relative">
          <i className="fas fa-shopping-cart text-black w-9 h-9 flex justify-center items-center hover:text-black">
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </i>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
