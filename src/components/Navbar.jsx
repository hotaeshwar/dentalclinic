import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import lavaangLogo from '../assets/images/Lavaang .png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIPad, setIsIPad] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Enhanced iPad detection
    const detectIPad = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Detect iPad devices by common resolutions and user agent
      const iPadDetected = (
        // iPad Mini: 768x1024
        (width === 768 && height === 1024) ||
        // iPad Air: 820x1180  
        (width === 820 && height === 1180) ||
        // iPad Pro 11": 834x1194
        (width === 834 && height === 1194) ||
        // iPad Pro 12.9": 1024x1366
        (width === 1024 && height === 1366) ||
        // Landscape orientations
        (height === 768 && width === 1024) ||
        (height === 820 && width === 1180) ||
        (height === 834 && width === 1194) ||
        (height === 1024 && width === 1366) ||
        // General iPad detection
        (navigator.userAgent.includes('iPad') || 
         (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document))
      );
      
      setIsIPad(iPadDetected);
    };

    detectIPad();
    
    // Throttled resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(detectIPad, 300);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', () => {
      setTimeout(detectIPad, 500);
    }, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', detectIPad);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dynamic navbar height based on device - original sizes
  const getNavbarHeight = () => {
    if (typeof window === 'undefined') return '80px';
    
    const width = window.innerWidth;
    
    // Mobile phones
    if (width < 640) return '70px';
    // iPad specific heights for better proportion
    if (isIPad) {
      if (width < 900) return '85px'; // Portrait iPad
      return '90px'; // Landscape iPad
    }
    // Tablets and small laptops
    if (width < 1024) return '80px';
    // Desktop
    return '96px';
  };

  // Dynamic logo size based on device - 60% bigger than original
  const getLogoSize = () => {
    if (typeof window === 'undefined') return 'h-22';
    
    const width = window.innerWidth;
    
    // Mobile phones - 60% bigger (h-12 -> h-19)
    if (width < 640) return 'h-19';
    // iPad specific sizing - 60% bigger
    if (isIPad) {
      if (width < 900) return 'h-26'; // Portrait iPad (h-16 -> h-26)
      return 'h-29'; // Landscape iPad (h-18 -> h-29)
    }
    // Tablets - 60% bigger (h-14 -> h-22)
    if (width < 1024) return 'h-22';
    // Desktop - 60% bigger (h-20 -> h-32)
    return 'h-32';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      style={{ 
        height: getNavbarHeight(),
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">

          {/* Logo Section - Left Side with iPad optimizations */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={lavaangLogo}
              alt="Lavaang Logo"
              className={`w-auto object-contain ${getLogoSize()} transition-all duration-300`}
              style={{
                maxHeight: isIPad ? '115px' : '102px',
                transition: 'all 0.3s ease-in-out',
                filter: isScrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}
            />
          </div>

          {/* Navigation Links - Responsive for iPad */}
          <div className={`hidden ${isIPad ? 'sm:block' : 'md:block'}`}>
            <div className={`flex items-baseline ${isIPad ? 'space-x-4 ml-6' : 'space-x-6 ml-8 md:space-x-8 md:ml-10'}`}>
              <a
                href="#"
                className={`px-3 py-2 font-medium transition-all duration-300 hover:bg-blue-50 rounded-md ${
                  isIPad ? 'text-base' : 'text-sm md:text-base'
                } ${
                  isScrolled 
                    ? 'text-black hover:text-blue-600' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
                style={{
                  minHeight: '44px', // iOS recommended touch target
                  display: 'flex',
                  alignItems: 'center',
                  touchAction: 'manipulation',
                  textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Home
              </a>
              <a
                href="#about"
                className={`px-3 py-2 font-medium transition-all duration-300 hover:bg-blue-50 rounded-md ${
                  isIPad ? 'text-base' : 'text-sm md:text-base'
                } ${
                  isScrolled 
                    ? 'text-black hover:text-blue-600' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
                style={{
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  touchAction: 'manipulation',
                  textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                About Us
              </a>
              <a
                href="#contact"
                className={`px-3 py-2 font-medium transition-all duration-300 hover:bg-blue-50 rounded-md ${
                  isIPad ? 'text-base' : 'text-sm md:text-base'
                } ${
                  isScrolled 
                    ? 'text-black hover:text-blue-600' 
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                }`}
                style={{
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  touchAction: 'manipulation',
                  textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button - Hidden on iPad */}
          <div className={`${isIPad ? 'hidden' : 'sm:hidden'}`}>
            <button
              onClick={toggleMobileMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                isScrolled 
                  ? 'text-black hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white hover:text-blue-200 hover:bg-white/10'
              }`}
              style={{
                minHeight: '44px',
                minWidth: '44px',
                touchAction: 'manipulation'
              }}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Only for phones, not iPads */}
      <div className={`${isIPad ? 'hidden' : 'sm:hidden'} transition-all duration-300 ease-in-out ${
        isMobileMenuOpen
          ? 'max-h-48 opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 border-t transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm border-gray-200' 
            : 'bg-black/20 backdrop-blur-sm border-white/20'
        }`}>
          <a
            href="#"
            className={`block px-3 py-3 text-base font-medium transition-all duration-300 rounded-md ${
              isScrolled 
                ? 'text-black hover:text-blue-600 hover:bg-blue-50' 
                : 'text-white hover:text-blue-200 hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              minHeight: '44px',
              touchAction: 'manipulation',
              textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className={`block px-3 py-3 text-base font-medium transition-all duration-300 rounded-md ${
              isScrolled 
                ? 'text-black hover:text-blue-600 hover:bg-blue-50' 
                : 'text-white hover:text-blue-200 hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              minHeight: '44px',
              touchAction: 'manipulation',
              textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            About Us
          </a>
          <a
            href="#contact"
            className={`block px-3 py-3 text-base font-medium transition-all duration-300 rounded-md ${
              isScrolled 
                ? 'text-black hover:text-blue-600 hover:bg-blue-50' 
                : 'text-white hover:text-blue-200 hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              minHeight: '44px',
              touchAction: 'manipulation',
              textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;