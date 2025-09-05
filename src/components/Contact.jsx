import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { TbSend, TbSparkles } from 'react-icons/tb';
import { HiOutlineSparkles } from 'react-icons/hi';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const controls = useAnimation();
  const [state, handleSubmit] = useForm("xeoknpbg");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    if (state.succeeded) {
      showNotification('Message sent successfully! I’ll reply soon.', 'success');
      setFormData({ name: '', email: '', message: '' });
    }
    if (state.errors && state.errors.length > 0) {
      showNotification('Message failed. Please try again.', 'error');
    }
  }, [state.succeeded, state.errors]);

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const validateField = (name, value) => {
    const errors = {};
    
    if (name === 'name' && value.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors.email = 'Please enter a valid email address';
      }
    }
    
    if (name === 'message' && value.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsTyping(true);
    
    // Clear previous errors for this field
    setFormErrors(prev => ({ ...prev, [name]: '' }));
    
    // Validate on blur or after typing stops
    setTimeout(() => {
      const fieldErrors = validateField(name, value);
      setFormErrors(prev => ({ ...prev, ...fieldErrors }));
      setIsTyping(false);
    }, 500);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const cardHover = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, name: "GitHub", url: "https://github.com/Abduraahman19", color: "bg-gray-600 hover:bg-gray-700", description: "View my code" },
    { icon: <FaLinkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://www.linkedin.com/in/abdur-rahman-asim/", color: "bg-blue-600 hover:bg-blue-700", description: "Professional network" },
    { icon: <FaTwitter className="w-5 h-5" />, name: "Twitter", url: "https://x.com/AbdurRahma86120", color: "bg-sky-500 hover:bg-sky-600", description: "Follow updates" },
    // { icon: <SiUpwork className="w-5 h-5" />, name: "Upwork", url: "#", color: "bg-green-600 hover:bg-green-700", description: "Hire me" },
    // { icon: <SiFiverr className="w-5 h-5" />, name: "Fiverr", url: "#", color: "bg-emerald-600 hover:bg-emerald-700", description: "Quick projects" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-6 py-32 overflow-hidden sm:px-12 lg:px-24 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-950/50"
      aria-label="Contact section"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute rounded-full top-20 left-10 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="mb-20 text-center"
        >
          <motion.h2
            variants={item}
            className="flex items-center justify-center mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white"
          >
            <motion.span 
              className="mr-4 font-mono text-lg text-teal-500 dark:text-teal-400 md:text-xl"
              animate={{
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              }}
            >
              05.
            </motion.span>
            <span className="text-teal-500 dark:text-teal-400">Get in</span> Touch
            <motion.span 
              className="flex-grow hidden w-32 h-px ml-6 bg-teal-500 md:inline-block dark:bg-teal-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.h2>
          <motion.p
            variants={item}
            className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-700 dark:text-gray-300"
          >
            I'm currently open to new opportunities and interesting projects. Feel free to reach out through any of the channels below.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            variants={item}
            className="relative group"
            whileHover="hover"
          >
            <div className="relative p-10 overflow-hidden transition-all duration-500 border shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl hover:shadow-3xl border-gray-200/50 dark:border-gray-700/50 group">
              <motion.h3
                variants={item}
                className="relative z-10 mb-8 text-3xl font-bold text-gray-900 transition-colors dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400"
              >
                Send me a message
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={item}>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 transition-all border-2 border-gray-300 rounded-xl dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700/50 dark:text-white backdrop-blur-sm bg-white/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
                    placeholder="John Doe"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="mt-1 text-sm text-red-500"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 transition-all border-2 border-gray-300 rounded-xl dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700/50 dark:text-white backdrop-blur-sm bg-white/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
                    placeholder="john@example.com"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  {formErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1 text-sm text-red-500"
                    >
                      <FaTimesCircle className="w-3 h-3" />
                      {formErrors.email}
                    </motion.p>
                  )}
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-sm text-red-500"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 transition-all border-2 border-gray-300 resize-none rounded-xl dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700/50 dark:text-white backdrop-blur-sm bg-white/50 hover:bg-white/80 dark:hover:bg-gray-700/80"
                    placeholder="Hello! I'd love to discuss a project with you..."
                    required
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                  {formErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-1 mt-1 text-sm text-red-500"
                    >
                      <FaTimesCircle className="w-3 h-3" />
                      {formErrors.message}
                    </motion.p>
                  )}
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-sm text-red-500"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="relative flex items-center justify-center w-full gap-3 px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 rounded-xl group hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? (
                      <>
                        <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <motion.div
                          whileHover={{ x: 3, rotate: 15 }}
                          transition={{ duration: 0.2 }}
                        >
                          <TbSend className="text-lg" />
                        </motion.div>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              variants={item}
              className="relative group"
              whileHover="hover"
            >
              <div className="p-8 transition-all duration-300 border border-gray-200 shadow-xl bg-white/30 backdrop-blur-sm dark:bg-gray-800/30 rounded-2xl hover:shadow-2xl dark:border-gray-700">
                <motion.h3
                  variants={item}
                  className="mb-8 text-2xl font-bold text-gray-900 dark:text-white"
                >
                  Contact Information
                </motion.h3>

                <div className="space-y-6">
                  <motion.div
                    variants={item}
                    className="flex items-start gap-4 p-4 transition-colors rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 p-3 bg-teal-100 rounded-lg dark:bg-teal-900/50">
                      <FaEnvelope className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                      <a
                        href="mailto:abdurrahmanmughal0303@gmail.com"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        aria-label="Send me an email"
                      >
                        abdurrahmanmughal0303@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={item}
                    className="flex items-start gap-4 p-4 transition-colors rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 p-3 bg-teal-100 rounded-lg dark:bg-teal-900/50">
                      <FaWhatsapp className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                      <a
                        href="https://wa.me/03117918605"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 dark:text-teal-400 hover:underline"
                        aria-label="Chat on WhatsApp"
                      >
                        +92 311 7918605
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={item}
                    className="flex items-start gap-4 p-4 transition-colors rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 p-3 bg-teal-100 rounded-lg dark:bg-teal-900/50">
                      <FaMapMarkerAlt className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-700 dark:text-gray-300">Faisalabad, Pakistan</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={item}
              className="relative group"
              whileHover="hover"
            >
              <div className="p-8 transition-all duration-300 border border-gray-200 shadow-xl bg-white/30 backdrop-blur-sm dark:bg-gray-800/30 rounded-2xl hover:shadow-2xl dark:border-gray-700">
                <motion.h3
                  variants={item}
                  className="mb-8 text-2xl font-bold text-gray-900 dark:text-white"
                >
                  Connect With Me
                </motion.h3>

                <motion.div
                  variants={container}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      variants={item}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 ${link.color} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`${link.name} profile`}
                    >
                      <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-r from-white/10 to-transparent group-hover:opacity-100"></div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                      >
                        {link.icon}
                      </motion.div>
                      <div className="relative z-10">
                        <span className="font-semibold">{link.name}</span>
                        <p className="text-xs opacity-80">{link.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Notification */}
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-sm border ${
            notification.type === 'success' 
              ? 'bg-teal-500/90 text-white border-teal-400' 
              : 'bg-red-500/90 text-white border-red-400'
          }`}
        >
          <div className="flex items-center gap-3">
            {notification.type === 'success' ? (
              <FaCheckCircle className="w-5 h-5" />
            ) : (
              <FaTimesCircle className="w-5 h-5" />
            )}
            <span className="font-medium">{notification.message}</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;