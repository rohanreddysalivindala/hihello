import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const pages = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/how-it-works', name: 'How It Works' },
    { path: '/commitment', name: 'Commitment' },
    { path: '/contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPageIndex = pages.findIndex(page => page.path === location.pathname);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
      {pages.map((page, index) => (
        <div key={page.path} className="relative group">
          <motion.div
            className={`w-1 rounded-full transition-all duration-300 ${
              index === currentPageIndex ? 'bg-green-600 h-12' : 'bg-gray-300 h-8'
            }`}
            whileHover={{ scale: 1.2, backgroundColor: '#16a34a' }}
          >
            {index === currentPageIndex && (
              <motion.div
                className="w-full bg-green-400 rounded-full"
                style={{ height: `${scrollProgress}%` }}
                initial={{ height: 0 }}
                animate={{ height: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            )}
          </motion.div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
            {page.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageIndicator;