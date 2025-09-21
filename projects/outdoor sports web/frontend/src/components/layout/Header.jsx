import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-600">户外运动</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({isActive}) => 
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"}
            >
              首页
            </NavLink>
            <NavLink to="/products" className={({isActive}) => 
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"}
            >
              产品
            </NavLink>
            <NavLink to="/activities" className={({isActive}) => 
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"}
            >
              活动
            </NavLink>
            <NavLink to="/blog" className={({isActive}) => 
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"}
            >
              博客
            </NavLink>
            <NavLink to="/about" className={({isActive}) => 
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"}
            >
              关于我们
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              isActive ? "text-green-600 font-medium" : "text-gray-600 hover:text-green-600"}
            >
              联系我们
            </NavLink>
          </nav>
          
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-green-600">
              <FaShoppingCart className="text-xl" />
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-green-600">
              <FaUser className="text-xl" />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" 
                className={({isActive}) => 
                  isActive ? "text-green-600 font-medium" : "text-gray-600"}
                onClick={toggleMenu}
              >
                首页
              </NavLink>
              <NavLink to="/products" 
                className={({isActive}) => 
                  isActive ? "text-green-600 font-medium" : "text-gray-600"}
                onClick={toggleMenu}
              >
                产品
              </NavLink>
              <NavLink to="/activities" 
                className={({isActive}) => 
                  isActive ? "text-green-600 font-medium" : "text-gray-600"}
                onClick={toggleMenu}
              >
                活动
              </NavLink>
              <NavLink to="/blog" 
                className={({isActive}) => 
                  isActive ? "text-green-600 font-medium" : "text-gray-600"}
                onClick={toggleMenu}
              >
                博客
              </NavLink>
              <NavLink to="/about" 
                className={({isActive}) => 
                  isActive ? "text-green-600 font-medium" : "text-gray-600"}
                onClick={toggleMenu}
              >
                关于我们
              </NavLink>
              <NavLink to="/contact" 
                className={({isActive}) => 
                  isActive ? "text-green-600 font-medium" : "text-gray-600"}
                onClick={toggleMenu}
              >
                联系我们
              </NavLink>
              <div className="flex space-x-4 pt-2">
                <Link to="/cart" className="text-gray-600" onClick={toggleMenu}>
                  <FaShoppingCart className="text-xl" />
                </Link>
                <Link to="/account" className="text-gray-600" onClick={toggleMenu}>
                  <FaUser className="text-xl" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;