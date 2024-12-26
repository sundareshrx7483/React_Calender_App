import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-4 px-6 shadow-2xl fixed w-full z-50 backdrop-blur-lg bg-opacity-95">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 drop-shadow-2xl hover:scale-105 transition-transform duration-300">
          Communication Tracker
        </h1>
        <nav className="relative">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#admin"
                className="text-lg font-medium px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-300 ease-out shadow-lg hover:shadow-indigo-500/25 flex items-center space-x-2 group"
              >
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">Admin</span>
              </a>
            </li>
            <li>
              <a
                href="#user"
                className="text-lg font-medium px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-300 ease-out shadow-lg hover:shadow-indigo-500/25 flex items-center space-x-2 group"
              >
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">User</span>
              </a>
            </li>
            <li>
              <a
                href="#reporting"
                className="text-lg font-medium px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/15 transition-all duration-300 ease-out shadow-lg hover:shadow-indigo-500/25 flex items-center space-x-2 group"
              >
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">Reporting</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;