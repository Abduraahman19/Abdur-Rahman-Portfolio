import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { TbSend } from 'react-icons/tb';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const controls = useAnimation();
  const [state, handleSubmit] = useForm("xeoknpbg");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    { icon: <FaGithub className="w-5 h-5" />, name: "GitHub", url: "https://github.com/Abduraahman19", color: "bg-gray-600 hover:bg-gray-700" },
    { icon: <FaLinkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://www.linkedin.com/in/abdur-rahman-asim/", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: <FaTwitter className="w-5 h-5" />, name: "Twitter", url: "https://x.com/AbdurRahma86120", color: "bg-sky-500 hover:bg-sky-600" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-6 sm:px-12 lg:px-24 overflow-hidden"
      aria-label="Contact section"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="text-center mb-20"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center"
          >
            <motion.span 
              className="text-teal-500 dark:text-teal-400 font-mono text-lg md:text-xl mr-4"
              animate={{
                rotate: [0, 10, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }
              }}
            >
              04.
            </motion.span>
            <span className="text-teal-500 dark:text-teal-400">Get in</span> Touch
            <motion.span 
              className="hidden md:inline-block h-px w-32 bg-teal-500 dark:bg-teal-400 ml-6 flex-grow"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            I'm currently open to new opportunities and interesting projects. Feel free to reach out through any of the channels below.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={item}
            className="relative group"
            whileHover="hover"
          >
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <motion.h3
                variants={item}
                className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
              >
                Send me a message
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={item}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="John Doe"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="john@example.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="Hello, I would like to talk about..."
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <TbSend className="group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
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
              <div className="bg-white/30 backdrop-blur-sm dark:bg-gray-800/30 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <motion.h3
                  variants={item}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                >
                  Contact Information
                </motion.h3>

                <div className="space-y-6">
                  <motion.div
                    variants={item}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg">
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
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg">
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
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/50 p-3 rounded-lg">
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
              <div className="bg-white/30 backdrop-blur-sm dark:bg-gray-800/30 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <motion.h3
                  variants={item}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
                >
                  Connect With Me
                </motion.h3>

                <motion.div
                  variants={container}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      variants={item}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${link.color} text-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`${link.name} profile`}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification.show && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-xl shadow-lg ${
            notification.type === 'success' 
              ? 'bg-teal-500 text-white' 
              : 'bg-red-500 text-white'
          }`}
        >
          {notification.message}
        </motion.div>
      )}
    </section>
  );
};

export default Contact;