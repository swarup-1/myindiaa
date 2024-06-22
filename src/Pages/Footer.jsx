import React from 'react';
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-3" />
          <span className="text-lg font-bold">E-commerce</span>
        </div>
        <div className="mt-4 lg:mt-0">
          <h3 className="text-lg font-bold mb-2">Explore</h3>
          <ul>
            <li className="mb-1"><Link to="./" className="hover:text-gray-400">Home</Link></li>
            <li className="mb-1"><Link to="./" className="hover:text-gray-400">Shop</Link></li>
            <li className="mb-1"><Link to="./" className="hover:text-gray-400">About Us</Link></li>
            <li className="mb-1"><Link to="./" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
        <div className="mt-4 lg:mt-0">
          <h3 className="text-lg font-bold mb-2">Legal</h3>
          <ul>
            <li className="mb-1"><Link to="./" className="hover:text-gray-400">Privacy Policy</Link></li>
            <li className="mb-1"><Link to="./" className="hover:text-gray-400">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="mt-4 lg:mt-0">
          <h3 className="text-lg font-bold mb-2">Connect With Us</h3>
          <ul>
            <li className="mb-1">Email: info@example.com</li>
            <li className="mb-1">Phone: +00 0000000000</li>
            <li className="mb-1">Address: 123 Main road, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
