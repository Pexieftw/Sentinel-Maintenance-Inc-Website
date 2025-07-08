"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { services, navItems } from "../utils/data";

import smiLogo from '@/public/icons/SMI-FINAL.svg';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const navLinksRef = useRef([]);
  const underlineRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    transition: 'none',
  });

  // Client-side hydration check
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Touch detection - More reliable and immediate
  useEffect(() => {
    if (!isClient) return;
    
    const detectTouch = () => {
      // More comprehensive touch detection
      const hasTouch = (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
      );
      
      return hasTouch;
    };

    // Set initial state immediately
    const initialTouchState = detectTouch();
    setIsTouchDevice(initialTouchState);
    
    // Also check for media query changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(pointer: coarse)');
      const handleMediaChange = (e) => {
        setIsTouchDevice(e.matches || detectTouch());
      };

      if (mediaQuery.addListener) {
        mediaQuery.addListener(handleMediaChange);
      } else {
        mediaQuery.addEventListener('change', handleMediaChange);
      }

      return () => {
        if (mediaQuery.removeListener) {
          mediaQuery.removeListener(handleMediaChange);
        } else {
          mediaQuery.removeEventListener('change', handleMediaChange);
        }
      };
    }
  }, [isClient]);
  
  useEffect(() => {
    updateUnderlinePosition();
  }, [pathname]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      updateUnderlinePosition(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);
  
  // Function to update the underline position
  const updateUnderlinePosition = (animate = true) => {
    const activeIndex = navItems.findIndex(item => pathname === item.link);
    
    if (activeIndex >= 0 && navLinksRef.current[activeIndex]) {
      const activeLink = navLinksRef.current[activeIndex];
      const { offsetLeft, offsetWidth } = activeLink;
      
      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
        transition: animate ? 'all 0.3s ease-in-out' : 'none',
      });
    } else {
      setUnderlineStyle({
        ...underlineStyle,
        opacity: 0,
        transition: animate ? 'opacity 0.3s ease-in-out' : 'none',
      });
    }
  };

  // Handle dropdown mouse enter
  const handleDropdownMouseEnter = (label) => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  // Handle dropdown mouse leave
  const handleDropdownMouseLeave = () => {
    // Set a delay before hiding the dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
  };

  // Handle scroll behavior - IMPROVED WITH PROPER LG BREAKPOINT
  useEffect(() => {
    if (!isClient) return;
    
    // Threshold for how far user needs to scroll before navbar hides (in pixels)
    const SCROLL_THRESHOLD = 10;
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    // Function to get current viewport width
    const getViewportWidth = () => {
      return window.innerWidth;
    };
    
    // Function to get scroll threshold based on viewport width
    const getScrollThreshold = () => {
      const viewportWidth = getViewportWidth();
      if (viewportWidth >= 1280) {
        return 180; // xl screens
      } else if (viewportWidth >= 1024) {
        return 160; // lg screens - FIXED
      } else if (viewportWidth >= 768) {
        return 140; // md screens
      } else {
        return 120; // sm screens
      }
    };
    
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDown = currentScrollPos > lastScrollY;
      const dynamicThreshold = getScrollThreshold();
      
      // Check if at the top zone (always show navbar at the 52px mark)
      const inTopZone = currentScrollPos < 52;
      // Check if in the "fixed" zone between 52px and the responsive threshold
      const inFixedZone = currentScrollPos >= 52 && currentScrollPos < dynamicThreshold;
      
      // Set navbar position - fixed at 52px until the threshold is reached
      const navbarPosition = inTopZone ? 52 : 0;
      document.documentElement.style.setProperty('--navbar-top', `${navbarPosition}px`);
      
      // Visibility logic
      if (inTopZone || inFixedZone) {
        // Always visible in top or fixed zones
        setVisible(true);
      } else if (scrollDown && Math.abs(currentScrollPos - lastScrollY) > SCROLL_THRESHOLD) {
        // Hide when scrolling down past the dynamic threshold
        setVisible(false);
      } else if (!scrollDown) {
        // Show immediately on any upward scroll when below the threshold
        setVisible(true);
      }
      
      lastScrollY = currentScrollPos;
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Set initial position and visibility
    const initialScrollPos = window.scrollY;
    const dynamicThreshold = getScrollThreshold();
    const initialPosition = initialScrollPos < 52 ? 52 : 0;
    const initiallyVisible = initialScrollPos < dynamicThreshold;
    
    document.documentElement.style.setProperty('--navbar-top', `${initialPosition}px`);
    setVisible(initiallyVisible);
    lastScrollY = initialScrollPos;
    
    // Add event listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isClient]);
  
  // Handle body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  // Handle link click with animation
  const handleLinkClick = (e, link) => {
    if (pathname === link) return;
    
    // Get target link element
    const linkIndex = navItems.findIndex(item => item.link === link);
    if (linkIndex >= 0 && navLinksRef.current[linkIndex]) {
      const targetLink = navLinksRef.current[linkIndex];
      const { offsetLeft, offsetWidth } = targetLink;
      
      // Animate underline to new position before navigation
      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
        transition: 'all 0.3s ease-in-out',
      });
    }
  };

  // Handle mobile services click - navigate and toggle dropdown
  const handleMobileServicesClick = (e, item) => {
    e.preventDefault();
    
    // Navigate to services page
    router.push(item.link);
    
    // Toggle dropdown
    setActiveDropdown(activeDropdown === item.label ? null : item.label);
    
    // Set first category as active by default when opening dropdown
    if (activeDropdown !== item.label && item.dropdown) {
      setActiveCategoryTab(Object.keys(item.dropdown)[0]);
    }
  };

  // Determine if we should show mobile menu - only after client-side hydration
  const shouldShowMobileMenu = isClient && isTouchDevice;
  
  return (
    <>
      <nav 
        className={`w-full bg-white shadow-md z-40 fixed left-0 right-0 transition-transform duration-300 ease-in-out ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: 'var(--navbar-top)' }}
      >
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center h-16 sm:h-18 md:h-20 lg:h-22 xl:h-26 px-4 sm:px-6 lg:px-8 xl:px-0">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={smiLogo}
                  alt="SMI Logo"
                  className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-40 lg:h-20 xl:w-48 xl:h-24"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation - Only show on non-touch devices with large screens */}
            {!shouldShowMobileMenu && (
              <div className="hidden lg:flex flex-1 justify-end items-center h-full">
                {/* Animated underline element */}
                <span 
                  ref={underlineRef}
                  className="absolute bottom-3 lg:bottom-4 xl:bottom-4 h-1 bg-primary-300"
                  style={{
                    left: `${underlineStyle.left}px`,
                    width: `${underlineStyle.width}px`,
                    opacity: underlineStyle.opacity,
                    transition: underlineStyle.transition,
                  }}
                />
                
                {navItems.map((item, index) => {
                  const isActive = pathname === item.link;

                  return (
                    <div 
                      key={index} 
                      className="group h-full flex items-center"
                      onMouseEnter={() => item.dropdown && handleDropdownMouseEnter(item.label)}
                      onMouseLeave={() => item.dropdown && handleDropdownMouseLeave()}
                    >
                      <Link
                        href={item.link}
                        ref={el => navLinksRef.current[index] = el}
                        onClick={(e) => handleLinkClick(e, item.link)}
                        className={`${isActive ? 'font-extrabold text-primary-600' : 'font-semibold'} 
                          flex text-gray-800 hover:text-primary-500 px-2 lg:px-3 xl:px-4 h-full items-center 
                          text-xs lg:text-sm xl:text-sm transition-colors duration-300 hover:bg-gray-50`}
                      >
                        {item.label}
                        {item.dropdown && <ChevronDown className="ml-1 w-3 h-3 lg:w-4 lg:h-4" />}
                      </Link>
                      
                      {/* Dropdown menu - Fixed width and positioning */}
                      {item.dropdown && activeDropdown === item.label && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 lg:top-[88px] xl:top-[104px] w-full max-w-6xl bg-white shadow-lg border border-gray-200"
                          style={{
                            animation: 'fadeIn 0.5s ease-out forwards'
                          }}
                          onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                          onMouseLeave={() => handleDropdownMouseLeave()}
                        >
                          <div className="grid grid-cols-4 divide-x divide-gray-200">
                            {/* Cleaning Services Column */}
                            <div className="p-3 lg:p-4">
                              <h3 className="text-base lg:text-lg xl:text-xl uppercase font-bold text-primary-500 mb-2 lg:mb-3 text-center">
                                Cleaning Services
                              </h3>
                              <ul className="space-y-1">
                                {services['Cleaning Services'].map((service, index) => (
                                  <li 
                                    key={index}
                                    style={{
                                      opacity: 0,
                                      animation: `slideIn 0.3s ease-out forwards ${0.1 + index * 0.05}s`
                                    }}
                                  >
                                    <Link 
                                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                      className="flex justify-center items-center h-10 lg:h-12 xl:h-14 text-xs lg:text-sm xl:text-sm w-full text-center py-2 px-2 lg:px-3 xl:px-4 text-gray-700 bg-gray-50 hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                      {service}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Specialized Services Column */}
                            <div className="p-3 lg:p-4 col-span-2">
                              <h3 className="text-base lg:text-lg xl:text-xl uppercase font-bold text-primary-500 mb-2 lg:mb-3 text-center">
                                Specialized Services
                              </h3>
                              <div className="grid grid-cols-2 gap-2 lg:gap-3 xl:gap-4">
                                <ul className="space-y-1">
                                  {services['Specialized Services'].column1.map((service, index) => (
                                    <li 
                                      key={index}
                                      style={{
                                        opacity: 0,
                                        animation: `slideIn 0.3s ease-out forwards ${0.3 + index * 0.05}s`
                                      }}
                                    >
                                      <Link 
                                        href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                        className="flex justify-center items-center h-10 lg:h-12 xl:h-14 text-xs lg:text-sm xl:text-sm w-full text-center py-2 px-2 lg:px-3 xl:px-4 text-gray-700 bg-gray-50 hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                                      >
                                        {service}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                                <ul className="space-y-1">
                                  {services['Specialized Services'].column2.map((service, index) => (
                                    <li 
                                      key={index}
                                      style={{
                                        opacity: 0,
                                        animation: `slideIn 0.3s ease-out forwards ${0.3 + index * 0.05}s`
                                      }}
                                    >
                                      <Link 
                                        href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                        className="flex justify-center items-center h-10 lg:h-12 xl:h-14 text-xs lg:text-sm xl:text-sm w-full text-center py-2 px-2 lg:px-3 xl:px-4 text-gray-700 bg-gray-50 hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                                      >
                                        {service}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            
                            {/* Restoration Column */}
                            <div className="p-3 lg:p-4">
                              <h3 className="text-base lg:text-lg xl:text-xl uppercase font-bold text-primary-500 mb-2 lg:mb-3 text-center">
                                Restoration
                              </h3>
                              <ul className="space-y-1">
                                {services['Restoration'].map((service, index) => (
                                  <li 
                                    key={index}
                                    style={{
                                      opacity: 0,
                                      animation: `slideIn 0.3s ease-out forwards ${0.5 + index * 0.05}s`
                                    }}
                                  >
                                    <Link 
                                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                      className="flex justify-center items-center h-10 lg:h-12 xl:h-14 text-xs lg:text-sm xl:text-sm w-full text-center py-2 px-2 lg:px-3 xl:px-4 text-gray-700 bg-gray-50 hover:bg-primary-400 hover:text-white hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                                    >
                                      {service}
                                    </Link>
                                    </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Mobile Menu Buttons - Show on touch devices or small screens */}
            <div className={`flex items-center gap-3 md:gap-4 ml-auto ${shouldShowMobileMenu ? '' : 'lg:hidden'}`}>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 sm:p-3 bg-primary-300 text-white hover:bg-primary-400 
                  focus:outline-none focus:ring-2 focus:ring-inset cursor-pointer"
                aria-expanded={isMenuOpen}
              >
                <a href="tel:+14169184177">
                  <Phone className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </a>
              </button>

              <button
                onClick={() => setIsMenuOpen(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 sm:p-3 bg-primary-300 text-white hover:bg-primary-400 
                  focus:outline-none focus:ring-2 focus:ring-inset cursor-pointer"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Show when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-white"
          style={{
            animation: 'slideInFromRight 0.3s ease-out forwards'
          }}
        >
          <div className="h-full flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src={smiLogo}
                    alt="SMI Logo"
                    width={120}
                    height={60}
                    className="sm:w-[150px] sm:h-[74px]"
                    priority                    
                  />
                </Link>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 hover:text-primary-500 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content - Scrollable Area */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-200 py-2"
                    style={{
                      opacity: 0,
                      transform: 'translateX(20px)',
                      animation: `slideInFromRight 0.3s ease-out forwards ${index * 0.05}s`
                    }}
                  >
                    {item.dropdown ? (
                      <div>
                        <div
                          className="px-4 py-3 text-gray-800 flex justify-center items-center hover:bg-gray-100 cursor-pointer transition duration-200"
                          onClick={(e) => handleMobileServicesClick(e, item)}
                        >
                          <span className="font-medium text-lg">{item.label}</span>
                          <ChevronDown
                            className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </div>

                        {activeDropdown === item.label && (
                          <div className="bg-gray-50 p-4 mt-2 overflow-x-hidden" 
                            style={{
                              animation: 'slideDown 0.4s ease-out forwards'
                            }}
                          >
                            <div className="grid grid-cols-3 gap-2 w-full mb-4 overflow-x-hidden">
                              {Object.keys(item.dropdown).map((category, catIndex) => (
                                <button
                                  key={category}
                                  className={`cursor-pointer py-2 px-3 text-sm font-medium transition-all duration-300 overflow-x-hidden ${
                                    activeCategoryTab === category
                                      ? 'bg-primary-500 text-white shadow-md'
                                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                  }`}
                                  onClick={() => setActiveCategoryTab(category)}
                                  style={{
                                    opacity: 0,
                                    animation: `fadeIn 0.3s ease-out forwards ${0.2 + catIndex * 0.1}s`
                                  }}
                                >
                                  {category}
                                </button>
                              ))}
                            </div>

                            <div className="">
                              {Object.entries(item.dropdown).map(([category, services]) => (
                                <div 
                                  key={category} 
                                  className={`w-full transition-all duration-300 ${activeCategoryTab === category ? 'block' : 'hidden'}`}
                                >
                                  <ul className="space-y-2 w-full">
                                    {category === 'Specialized Services' ? (
                                      <>
                                        {services.column1.map((service, serviceIndex) => (
                                          <li
                                            key={`col1-${serviceIndex}`}
                                            style={{
                                              opacity: 0,
                                              animation: `slideInRight 0.3s ease-out forwards ${serviceIndex * 0.05}s`
                                            }}
                                          >
                                            <Link 
                                              href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                              className="block w-full text-center py-3 px-4 text-gray-700 bg-white hover:bg-primary-500 hover:text-white hover:shadow-md transition-all duration-200"
                                              onClick={() => setIsMenuOpen(false)}
                                            >
                                              {service}
                                            </Link>
                                          </li>
                                        ))}
                                        {services.column2.map((service, serviceIndex) => (
                                          <li
                                            key={`col2-${serviceIndex}`}
                                            className="w-full"
                                            style={{
                                              opacity: 0,
                                              animation: `slideInRight 0.3s ease-out forwards ${(services.column1.length + serviceIndex) * 0.05}s`
                                            }}
                                          >
                                            <Link 
                                              href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                              className="block w-full text-center py-3 px-4 text-gray-700 bg-white hover:bg-primary-500 hover:text-white hover:shadow-md transition-all duration-200"
                                              onClick={() => setIsMenuOpen(false)}
                                            >
                                              {service}
                                            </Link>
                                          </li>
                                        ))}
                                      </>
                                    ) : (
                                      services.map((service, serviceIndex) => (
                                        <li
                                          key={serviceIndex}
                                          className="w-full"
                                          style={{
                                            opacity: 0,
                                            animation: `slideInRight 0.3s ease-out forwards ${serviceIndex * 0.05}s`
                                          }}
                                        >
                                          <Link 
                                            href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                                            className="block w-full text-center py-3 px-4 text-gray-700 bg-white hover:bg-primary-500 hover:text-white hover:shadow-md transition-all duration-200"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            {service}
                                          </Link>
                                        </li>
                                      ))
                                    )}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.link}
                        className="flex justify-center px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-100 transition duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;