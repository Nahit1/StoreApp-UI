'use client';
import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 p-5 text-gray-700 font-medium bg-white shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-2xl">Store App</div>
        <div>
          <ul className="flex items-center gap-3">
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
            <li>HOME</li>
          </ul>
        </div>
        <div>Login</div>
      </div>
    </header>
  );
};

export default Navbar;
