import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="education" className="relative py-28 bg-white text-slate-900 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 inline-block mb-3">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Education & <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Education Column */}
          <div className="space-y-8" data-aos="fade-right">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-xl text-base">🎓</span>
              Education History
            </h3>

            <div className="relative pl-6 border-l-2 border-blue-100 space-y-8">
              
              {/* MCA Item */}
              <div className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                      Pursuing
                    </span>
                    <span className="text-xs font-medium text-slate-400">Master's Degree</span>
                  </div>
                  
                  <h4 className="font-bold text-slate-950 text-lg group-hover:text-blue-600 transition-colors">
                    Master of Computer Application (MCA)
                  </h4>
                  <p className="text-blue-600 font-medium text-sm mt-0.5">MDU (Maharshi Dayanand University)</p>
                  
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    Focusing on advanced computer science principles, database management systems, cloud infrastructure, and enterprise software architecture.
                  </p>
                </div>
              </div>

              {/* BCA Item */}
              <div className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                      2021 – 2023
                    </span>
                    <span className="text-xs font-medium text-slate-400">Bachelor's Degree</span>
                  </div>
                  
                  <h4 className="font-bold text-slate-950 text-lg group-hover:text-blue-600 transition-colors">
                    Bachelor of Computer Application (BCA)
                  </h4>
                  <p className="text-blue-600 font-medium text-sm mt-0.5">MAHGU</p>
                  
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    Built a strong foundation in core programming paradigms, data structures & algorithms, web fundamentals, and software engineering concepts.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-8" data-aos="fade-left">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5 pb-4 border-b border-slate-100">
              <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl text-base">📜</span>
              Professional Certifications
            </h3>

            <div className="relative pl-6 border-l-2 border-indigo-100 space-y-8">
              
              {/* Full Stack Certification */}
              <div className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-300">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                      Certified Course
                    </span>
                  </div>
                  
                  <h4 className="font-bold text-slate-950 text-lg group-hover:text-indigo-600 transition-colors">
                    Full Stack Web Development
                  </h4>
                  <p className="text-indigo-600 font-medium text-sm mt-0.5">Dreamer Infotech</p>
                  
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                    Hands-on practical training in designing modern frontend interfaces using React & Tailwind CSS, along with RESTful APIs and database backend integration.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;