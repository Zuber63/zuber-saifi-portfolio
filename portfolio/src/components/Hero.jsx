import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../assets/zuber.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
    AOS.refresh();
  }, []);

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#FAFAFA] pt-32 pb-20 overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-[30rem] h-[30rem] bg-blue-200/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-indigo-200/30 rounded-full blur-[140px]"></div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Text Content & Stats */}
          <div className="lg:col-span-7 text-center lg:text-left" data-aos="fade-right">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for Full-Stack & Frontend Opportunities
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight mb-4 leading-[1.15]">
              Hi, I'm <span className="text-blue-600">Zuber Saifi</span>
            </h1>

            {/* Animated Subtitle */}
            <div className="text-lg sm:text-xl md:text-2xl text-slate-700 font-medium mb-6 min-h-[2.5rem]">
              Specialized in{" "}
              <TypeAnimation
                sequence={[
                  'MERN Stack Web Applications',
                  2000,
                  'Interactive React Frontends',
                  2000,
                  'REST APIs & Node.js Architecture',
                  2000,
                  'Database Optimization & MongoDB',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-bold text-blue-700 underline decoration-blue-300 underline-offset-8"
              />
            </div>

            {/* Detailed Bio */}
            <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Passionate Full-Stack Developer creating responsive, high-performing web applications. Focused on writing clean, maintainable code, seamless UI animations, and robust backend services.
            </p>

            {/* Skill Tags to Fill Visual Gap */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              <span className="text-xs font-semibold text-slate-500 mr-2">Core Tech:</span>
              {['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Redux', 'REST API', 'Git'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700 shadow-2xs">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#contact"
                onClick={(e) => handleScrollToSection(e, '#contact')}
                className="px-7 py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-200 active:scale-95 cursor-pointer"
              >
                Let's Work Together
              </a>
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, '#projects')}
                className="px-7 py-3.5 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-50 transition-all border border-slate-200 hover:border-slate-300 active:scale-95 shadow-xs cursor-pointer"
              >
                Explore Projects
              </a>
           <a
  href="/Zuber_Saifi_Resume.pdf"
  download="Zuber_Saifi_Resume.pdf"
  className="px-5 py-3.5 text-blue-600 text-sm font-semibold rounded-full hover:bg-blue-50 transition-all flex items-center gap-2 group cursor-pointer"
>
                Resume 
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </div>

            {/* Highlighted Metrics/Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">10+</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Projects Built</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">MERN</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Full-Stack Stack</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">100%</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Responsive UI</p>
              </div>
            </div>

          </div>

          {/* Right Side: Enhanced Profile Image Frame */}
          <div className="lg:col-span-5 flex justify-center items-center mt-8 lg:mt-0" data-aos="fade-left">
            <div className="relative py-4">
              
              {/* Outer Decorative Glow & Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full opacity-20 blur-lg animate-pulse"></div>
              <div className="absolute -inset-4 border border-blue-200/80 rounded-full"></div>

              {/* Profile Image Frame - Optimized height/width and rounded edges so head is not cropped */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-white p-3 shadow-2xl border border-slate-100 overflow-hidden flex items-center justify-center">
                <img
                  src={image} 
                  alt="Zuber Saifi"
                  className="rounded-full w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* 1. MongoDB Badge (Top-Left) */}
              <div className="absolute top-2 -left-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-bounce [animation-duration:3.2s] z-20" title="MongoDB">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              {/* 2. Express.js Badge (Top-Right) */}
              <div className="absolute top-6 -right-3 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-bounce [animation-duration:2.8s] z-20" title="Express.js">
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" alt="Express.js" className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              {/* 3. React Badge (Bottom-Right) */}
              <div className="absolute bottom-8 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-bounce [animation-duration:2.5s] z-20" title="React">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              {/* 4. Node.js Badge (Bottom-Left) */}
              <div className="absolute -bottom-1 left-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-bounce [animation-duration:3.6s] z-20" title="Node.js">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;