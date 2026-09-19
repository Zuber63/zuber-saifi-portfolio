import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '', 
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    errorMessage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, errorMessage: '' });

    const SERVICE_ID = 'service_os14vfa';
    const PUBLIC_KEY = 'XzPhf5xFlWuuE4pX3';
    
    const MAIN_TEMPLATE_ID = 'template_jzbvr46';   // Tujhe notification bhejne ke liye
    const AUTO_REPLY_TEMPLATE_ID = 'template_whagiuo'; // User ko auto-reply bhejne ke liye

    // 1. Send Main Notification to You
    const sendNotification = emailjs.sendForm(SERVICE_ID, MAIN_TEMPLATE_ID, formRef.current, PUBLIC_KEY);

    // 2. Send Auto-Reply to the User
    const sendAutoReply = emailjs.sendForm(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, formRef.current, PUBLIC_KEY);

    // Execute both requests simultaneously
    Promise.all([sendNotification, sendAutoReply])
      .then((responses) => {
        console.log('Emails sent successfully:', responses);
        setStatus({ submitting: false, submitted: true, error: false, errorMessage: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus({
          submitting: false,
          submitted: false,
          error: true,
          errorMessage: 'Failed to send message. Please try again or reach out via email directly.',
        });
      });
  };

  const handleReset = () => {
    setStatus({ submitting: false, submitted: false, error: false, errorMessage: '' });
    setFormData({ user_name: '', user_email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#FAFAFA] text-slate-900 overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Contact <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Information Cards & Social Icons */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight mb-3">
                Let's build something amazing together.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you have a project in mind, an internship opportunity, or just want to say hi, my inbox is always open. Drop a message or connect through social channels below!
              </p>
            </div>

            {/* Direct Details Cards */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-200 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                  📍
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</span>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Faridabad, Haryana, India</h4>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-200 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email Address</span>
                  <a href="mailto:royalsaifi63@gmail.com" className="font-semibold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors block">
                    royalsaifi63@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Connect Pills */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Connect Directly
              </h4>
              <div className="flex flex-wrap gap-2.5">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918851081499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white text-emerald-700 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.198-.198.347-.764.966-.937 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:royalsaifi63@gmail.com"
                  className="px-4 py-2.5 bg-white text-blue-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.717v15.43h24v-15.43l-12 9.717z"/>
                  </svg>
                  <span>Mail Direct</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/zuber-saifi-602228234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white text-sky-700 border border-slate-200 hover:border-sky-300 hover:bg-sky-50 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current text-sky-600" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Zuber63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white text-slate-800 border border-slate-200 hover:bg-slate-100 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current text-slate-900" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

              </div>
            </div>

          </div>

          {/* Right Side: Form Container */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs" data-aos="fade-left">
            {!status.submitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                
                {status.error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                    {status.errorMessage}
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      placeholder="Zuber Saifi"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      placeholder="royalsaifi63@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 8851081499"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Frontend Role"
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message details here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAFAFA] border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-200 active:scale-[0.99] text-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status.submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

              </form>
            ) : (
              /* Success Message View */
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl shadow-inner border border-emerald-100">
                  ✓
                </div>
                <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                  Message Delivered!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.user_name || 'there'}</span>! Your message has been sent, and an automated confirmation has been sent to your email. I will respond soon.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-slate-950 text-white text-xs font-bold rounded-xl hover:bg-blue-600 transition-all shadow-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;