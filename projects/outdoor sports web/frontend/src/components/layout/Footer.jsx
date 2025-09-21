import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">户外运动</h3>
            <p className="mb-4">专注于提供高品质的户外运动装备和服务，让每一次户外探险都充满乐趣和安全。</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-400">首页</Link></li>
              <li><Link to="/products" className="hover:text-green-400">产品</Link></li>
              <li><Link to="/activities" className="hover:text-green-400">活动</Link></li>
              <li><Link to="/blog" className="hover:text-green-400">博客</Link></li>
              <li><Link to="/about" className="hover:text-green-400">关于我们</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">联系我们</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">产品分类</h3>
            <ul className="space-y-2">
              <li><Link to="/products/camping" className="hover:text-green-400">露营装备</Link></li>
              <li><Link to="/products/hiking" className="hover:text-green-400">徒步装备</Link></li>
              <li><Link to="/products/climbing" className="hover:text-green-400">攀岩装备</Link></li>
              <li><Link to="/products/fishing" className="hover:text-green-400">钓鱼装备</Link></li>
              <li><Link to="/products/clothing" className="hover:text-green-400">户外服装</Link></li>
              <li><Link to="/products/accessories" className="hover:text-green-400">户外配件</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li>地址：北京市朝阳区建国路88号</li>
              <li>电话：010-12345678</li>
              <li>邮箱：info@outdoorsports.com</li>
              <li>营业时间：周一至周日 9:00-21:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} 户外运动网站. 保留所有权利.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-green-400">隐私政策</Link>
              <Link to="/terms" className="hover:text-green-400">使用条款</Link>
              <Link to="/sitemap" className="hover:text-green-400">网站地图</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;