import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import UserContext from '../context/UserContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 shadow-md relative">
      <Link to="/" className="text-2xl font-bold text-white">
        Panhandlr
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="menu-btn text-white md:hidden focus:outline-none"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className="hidden text-xl md:flex space-x-4">
        <Link to="/top-panhandlrs" className="text-white hover:underline">
          Top Panhandlrs
        </Link>
        <Link to="/trending" className="text-white hover:underline">
          Trending
        </Link>
        <Link to="/random" className="text-white hover:underline">
          Random
        </Link>
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        {user ? (
          <>
            <Link to="/settings" className="text-white hover:underline">
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <nav className="flex flex-col items-start p-4 space-y-2">
            <Link to="/top-panhandlrs" onClick={() => setMenuOpen(false)} className="text-purple-600 hover:underline">
              Top Panhandlrs
            </Link>
            <Link to="/trending" onClick={() => setMenuOpen(false)} className="text-purple-600 hover:underline">
              Trending
            </Link>
            <Link to="/random" onClick={() => setMenuOpen(false)} className="text-purple-600 hover:underline">
              Random
            </Link>

            {user ? (
              <>
                <Link to="/settings" onClick={() => setMenuOpen(false)} className="text-purple-600 hover:underline">
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg w-full text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full text-left hover:bg-purple-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg w-full text-left hover:bg-pink-600"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
