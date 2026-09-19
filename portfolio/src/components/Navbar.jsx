import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Initialize AOS for smooth scroll/fade effects
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      // Navbar background & shadow trigger on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active Section Highlighting logic
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll handler function
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      data-aos="fade-down"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] py-3.5'
          : 'bg-[#FAFAFA] py-5'
      }`}
    >
      {/* Balanced Container to prevent excessive left/right gaps */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollToSection(e, '#home')}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-200 group-hover:scale-105 transition-transform">
            ZS
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            Zuber Saifi
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-100/70 p-1 rounded-full border border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full cursor-pointer ${
                  isActive
                    ? 'text-blue-600 bg-white shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, '#contact')}
            className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 active:scale-95 transition-all shadow-sm hover:shadow cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Smooth Toggle Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none rounded-xl bg-slate-100 border border-slate-200 transition-all active:scale-95"
          aria-label="Toggle Menu"
        >
          <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown with Smooth Scale & Opacity Transition */}
      <div
        className={`fixed inset-x-0 top-[68px] mx-4 bg-white/95 backdrop-blur-xl border border-slate-200/80 px-6 py-6 rounded-2xl flex flex-col space-y-3 md:hidden transition-all duration-300 ease-in-out origin-top shadow-xl ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                isActive
                  ? 'text-blue-600 bg-blue-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          );
        })}
        <div className="pt-2 border-t border-slate-100">
          <a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, '#contact')}
            className="block w-full text-center py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;