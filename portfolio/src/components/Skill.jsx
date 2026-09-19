import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const categories = ['All', 'Frontend', 'Backend', 'Tools & Workflow'];

  const skillsList = [
    // Frontend
    { name: 'HTML5', subtitle: 'Semantic Markup & SEO', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
    { name: 'CSS3', subtitle: 'Flexbox, Grid & Animations', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
    { name: 'JavaScript', subtitle: 'ES6+, Async/Await & DOM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
    { name: 'React.js', subtitle: 'Hooks, Components & SPA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'Tailwind CSS', subtitle: 'Responsive & Utility-First UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', subtitle: 'Server Runtime & Logic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'Express.js', subtitle: 'Routing & Middleware', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
    { name: 'MongoDB', subtitle: 'NoSQL Database & Mongoose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Backend' },
    { name: 'REST APIs', subtitle: 'CRUD Operations & Auth', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg', category: 'Backend' },
    
    // Tools
    { name: 'Git', subtitle: 'Version Control Systems', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools & Workflow' },
    { name: 'GitHub', subtitle: 'Code Repositories & Collaboration', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools & Workflow' },
    { name: 'Postman', subtitle: 'API Testing & Debugging', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'Tools & Workflow' },
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillsList 
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#FAFAFA] text-slate-900 overflow-hidden">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 inline-block mb-3">
            Tech Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12" data-aos="fade-up">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 30}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-center gap-4 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform p-2.5 border border-slate-100/80">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain" 
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div className="overflow-hidden">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{skill.name}</h3>
                <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">{skill.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Banner - Fills Section Space Beautifully */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs text-center" data-aos="fade-up">
          <div className="max-w-2xl mx-auto space-y-2">
            <h4 className="text-lg font-bold text-slate-900">End-to-End MERN Application Development</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Capable of bridging client-side interactive React UIs with robust Express & Node backend systems, integrating MongoDB databases, and maintaining clean code with Git workflow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;