import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 导航项目
  const navItems = [
    { label: "ホーム", href: "#" },
    { label: "製品", href: "#products" },
    { label: "特徴", href: "#features" },
    { label: "お客様の声", href: "#testimonials" },
    { label: "お問い合わせ", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* 品牌标志 */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-primary">Baometi</span>
        </motion.div>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            購入する
          </motion.button>
        </nav>

        {/* 移动端菜单按钮 */}
        <motion.button
          className="md:hidden text-text-primary"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </motion.button>
      </div>

      {/* 移动端导航菜单 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-border-color"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-text-secondary hover:text-primary py-2 border-b border-border-color"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-full text-sm font-medium transition-colors duration-300 shadow-md w-full">
              購入する
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;