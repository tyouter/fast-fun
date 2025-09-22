import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm font-strava-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-strava-orange">
              户外运动商城
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-strava-orange transition duration-300">
              首页
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-strava-orange transition duration-300">
              产品
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-strava-orange transition duration-300">
              分类
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-strava-orange transition duration-300">
              关于我们
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-strava-orange transition duration-300">
              联系我们
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-strava-orange transition duration-300">
              购物车
            </Link>
            <Link to="/login" className="bg-strava-orange hover:bg-strava-grenadier text-white px-4 py-2 rounded-full transition duration-300">
              登录
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-strava-orange transition duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block text-gray-700 hover:text-strava-orange transition duration-300">
                首页
              </Link>
              <Link to="/products" className="block text-gray-700 hover:text-strava-orange transition duration-300">
                产品
              </Link>
              <Link to="/categories" className="block text-gray-700 hover:text-strava-orange transition duration-300">
                分类
              </Link>
              <Link to="/about" className="block text-gray-700 hover:text-strava-orange transition duration-300">
                关于我们
              </Link>
              <Link to="/contact" className="block text-gray-700 hover:text-strava-orange transition duration-300">
                联系我们
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link to="/cart" className="block text-gray-700 hover:text-strava-orange transition duration-300">
                  购物车
                </Link>
                <Link to="/login" className="block mt-2 bg-strava-orange hover:bg-strava-grenadier text-white px-4 py-2 rounded-full transition duration-300">
                  登录
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;