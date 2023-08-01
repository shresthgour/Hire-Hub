import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mt-3 px-6 py-4 bg-white shadow-md">
      <div className="flex items-center ml-44">
        <img src={logo} alt="Logo" className="w-10 h-10 mr-2 hover:cursor-pointer" />
        <h1 className="text-3xl font-bold text-[#2F2F30] hover:cursor-pointer">HireHub</h1>
      </div>
      <div className="flex space-x-7 mr-60">
        <a href="#" className="text-blue-500 tracking-wide text-lg font-semibold hover:underline">For Employers</a>
        <a href="#" className="text-blue-500 tracking-wide text-lg font-semibold hover:underline">Refer and Earn &#x20B9;15k</a>
        <a href="#" className="text-blue-500 tracking-wide text-lg font-semibold hover:underline">Login</a>
        <a href="#" className="text-blue-500 tracking-wide text-lg font-semibold hover:underline">Sign Up</a>
      </div>
    </nav>
  );
};


export default Navbar;
