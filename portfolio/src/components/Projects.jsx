import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlogAppImage from '../assets/Blog.png';
import LMSImage from '../assets/LMS.png';
import EmsImage from '../assets/Ems.png';
import todoAppImage from '../assets/todo.png';
import ecommerceImage from '../assets/Ecommerce.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const projectsList = [
    {
      title: 'Learning Management System (LMS)',
      category: 'Educational Tech',
      description: 'Comprehensive LMS platform featuring course enrollment, video lecture modules, progress tracking, and interactive student dashboards.',
      image: LMSImage,
      techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      liveLink: 'https://lms-iota-brown.vercel.app/',
      githubLink: 'https://github.com/Zuber63/LMS',
    },
    {
      title: 'Dil Se Diary – Blog Application',
      category: 'React & Frontend',
      description: 'Full-featured blogging platform with user authentication, post creation, edit/delete actions, dynamic image preview, and responsive UI.',
      image: BlogAppImage,
      techStack: ['React.js', 'Tailwind CSS', 'Appwrite', 'Responsive Web'],
      liveLink: 'https://dil-se-diary.vercel.app',
      githubLink: 'https://github.com/Zuber63/dil-se-diary',
    },
    {
      title: 'Employee Management System',
      category: 'MERN Full-Stack',
      description: 'Full-stack EMS dashboard built with MongoDB, Express, React, and Node.js to manage, search, update, and remove staff records securely.',
      image: EmsImage,
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Responsive Web'],
      liveLink: 'https://ems-frontend-seven-tau.vercel.app',
      githubLink: 'https://github.com/Zuber63/Ems',
    },
    {
      title: 'E-Commerce Web Application',
      category: 'API & State Mgmt',
      description: 'Dynamic e-commerce store with API product fetching, active wishlist management, real-time cart subtotal calculations, and item quantities.',
      image: ecommerceImage,
      techStack: ['React.js', 'Context API', 'Tailwind CSS', 'REST API'],
      liveLink: 'https://cartproject-eight.vercel.app',
      githubLink: 'https://github.com/Zuber63/Cartproject',
    },
    {
      title: 'Todo Application',
      category: 'Productivity & State Management',
      description: 'Responsive todo application for creating, updating, completing, and deleting tasks with a clean and user-friendly interface.',
      image: todoAppImage,
      techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
      githubLink: 'https://github.com/Zuber63/toduApp',
    },
  ];

  return (
    <section id="projects" className="relative py-28 bg-[#FAFAFA] text-slate-900 overflow-hidden">
      
      {/* Background Glow Elements */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 inline-block mb-3">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            My Recent <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="relative bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

              {/* Project Image Container */}
              <div className="relative overflow-hidden aspect-video bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                <div className="absolute top-3.5 right-3.5 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-sm z-10">
                  {project.category}
                </div>

                {/* Hover Live Preview Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                  <div className="flex items-center gap-2 w-full justify-end">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-xl shadow-md hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2.5 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Actions Row */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      Source Code
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/link"
                    >
                      <span>View Live</span>
                      <span className="text-sm group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;