import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
    AOS.refresh();
  }, []);

  return (
    <section
      id="about"
      className="relative py-28 bg-white text-slate-900 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 inline-block mb-3">
            Get to Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Top Feature Grid / Bio Section */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left Column: Detailed Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              Passionate MERN Stack Developer
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              I am a dedicated Full-Stack Web Developer with a strong focus on building scalable web applications using <span className="font-semibold text-slate-900">MongoDB, Express.js, React.js, and Node.js</span>. I specialize in designing RESTful APIs, securing applications with JWT authentication, and crafting highly responsive, accessible user interfaces.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Based in <span className="font-semibold text-slate-900">Faridabad, Haryana</span>, I am continuously pushing my technical capabilities. Currently, I am pursuing my <span className="font-semibold text-slate-900">Master of Computer Applications (MCA)</span> at Maharshi Dayanand University (MDU) to deepen my expertise in computer science fundamentals and software design patterns.
            </p>

            {/* Quick Impact Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-xs hover:border-blue-200 transition-colors">
                <span className="block text-2xl font-extrabold text-blue-600">20%+</span>
                <span className="text-xs font-semibold text-slate-600">Performance Optimized</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-xs hover:border-blue-200 transition-colors">
                <span className="block text-2xl font-extrabold text-blue-600">MERN</span>
                <span className="text-xs font-semibold text-slate-600">Full-Stack Stack</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-xs hover:border-blue-200 transition-colors col-span-2 sm:col-span-1">
                <span className="block text-2xl font-extrabold text-blue-600">MCA</span>
                <span className="text-xs font-semibold text-slate-600">MDU Pursuing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Cards for Experience & Academic Background */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="bg-[#FAFAFA] p-6 rounded-3xl border border-slate-200/80 shadow-md">
              
              {/* Tab Navigation Controls */}
              <div className="flex bg-slate-200/60 p-1.5 rounded-2xl mb-6">
                <button
                  onClick={() => setActiveTab('education')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                    activeTab === 'education'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🎓 Education
                </button>
                <button
                  onClick={() => setActiveTab('focus')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                    activeTab === 'focus'
                      ? 'bg-white text-blue-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🚀 Current Focus
                </button>
              </div>

              {/* Tab Content 1: Education Timeline */}
              {activeTab === 'education' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="relative pl-6 border-l-2 border-blue-200 space-y-6">
                    
                    {/* Degree 1 */}
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs"></div>
                      <h4 className="font-bold text-slate-900 text-base">Master of Computer Application (MCA)</h4>
                      <p className="text-xs font-semibold text-blue-600 mb-1">Maharshi Dayanand University (MDU) • Pursuing</p>
                    </div>

                    {/* Degree 2 */}
                    <div className="relative">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow-xs"></div>
                      <h4 className="font-bold text-slate-900 text-base">Bachelor of Computer Application (BCA)</h4>
                      <p className="text-xs font-semibold text-slate-500 mb-1">Graduated • 2021 – 2023</p>
                    </div>

                  </div>
                </div>
              )}

              {/* Tab Content 2: Current Focus */}
              {activeTab === 'focus' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <h5 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                      Production-Grade Applications
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Architecting full-stack applications with modular backend controllers, JWT authorization flows, and optimized MongoDB aggregation pipelines.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                    <h5 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                      Performance & Micro-Interactions
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Refining React client-side rendering with Tailwind CSS, AOS smooth animations, and optimized asset loading for seamless UX.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Bottom Feature Cards: What I Bring To The Table */}
        <div className="pt-8 border-t border-slate-200/80" data-aos="fade-up">
          <h4 className="text-center text-xl font-bold text-slate-900 mb-8">What I Bring to Your Team</h4>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h5 className="font-bold text-slate-900 text-base mb-2">Frontend Mastery</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Building responsive, interactive UIs in React.js with Tailwind CSS, custom hooks, and state management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                🛠️
              </div>
              <h5 className="font-bold text-slate-900 text-base mb-2">REST API & Node</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designing clean REST API endpoints using Express.js with robust error handling and JWT authorization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                🍃
              </div>
              <h5 className="font-bold text-slate-900 text-base mb-2">Database Design</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structuring scalable MongoDB schemas with Mongoose models, data validation, and index optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 shadow-2xs hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h5 className="font-bold text-slate-900 text-base mb-2">Optimization</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focusing on web vitals, dynamic imports, asset reduction, and code splitting for faster page loads.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;