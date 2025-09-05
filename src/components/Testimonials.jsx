import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "TechCorp Solutions",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Abdur Rahman delivered exceptional work on our e-commerce platform. His attention to detail and modern development approach exceeded our expectations. The project was completed on time with clean, maintainable code."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLab",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Working with Abdur was a game-changer for our startup. He not only built our web application but also helped optimize our digital marketing campaigns. His full-stack expertise is impressive."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Digital Dynamics",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Abdur's Shopify management skills are outstanding. He transformed our online store and significantly improved our conversion rates. His understanding of both technical and business aspects is remarkable."
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "WebFlow Agency",
    image: "/api/placeholder/80/80",
    rating: 5,
    text: "Exceptional developer with great communication skills. Abdur's React and Next.js expertise helped us deliver a complex project ahead of schedule. Highly recommended for any web development needs."
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
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
      },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative px-6 py-24 overflow-hidden sm:px-12 lg:px-24 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-950/50"
      aria-label="Testimonials section"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-teal-400/10 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute rounded-full top-40 right-10 w-96 h-96 bg-purple-400/10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute rounded-full bottom-20 left-1/2 w-80 h-80 bg-blue-400/10 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.div variants={item} className="flex items-center justify-center mb-8">
            <span className="mr-4 font-mono text-lg text-teal-500 dark:text-teal-400 md:text-xl">
              04.
            </span>
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              What <span className="gradient-text">Clients Say</span>
            </h2>
            <span className="flex-grow hidden w-32 h-px ml-6 bg-teal-500 md:inline-block dark:bg-teal-400 max-w-32"></span>
          </motion.div>
          
          <motion.p
            variants={item}
            className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-300"
          >
            Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          className="relative"
        >
          {/* Main testimonial display */}
          <div className="relative h-[450px] overflow-hidden">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                    className="relative p-8 border shadow-2xl md:p-12 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Quote icon */}
                    <motion.div
                      className="absolute transform -translate-x-1/2 -top-6 left-1/2"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <div className="p-4 bg-teal-500 rounded-full shadow-lg">
                        <FaQuoteLeft className="text-xl text-white" />
                      </div>
                    </motion.div>

                    {/* Stars */}
                    <motion.div
                      className="flex justify-center mt-4 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                        >
                          <FiStar className="mx-1 text-xl text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Testimonial text */}
                    <motion.p
                      className="mb-8 text-lg italic leading-relaxed text-gray-700 md:text-xl dark:text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>

                    {/* Client info */}
                    <motion.div
                      className="flex items-center justify-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center justify-center w-16 h-16 text-xl font-bold text-white rounded-full bg-gradient-to-br from-teal-400 to-cyan-500">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="font-medium text-teal-600 dark:text-teal-400">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 text-gray-700 transition-all duration-300 border rounded-full shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-300 dark:hover:border-teal-600 hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-xl" />
            </motion.button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-teal-500 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-teal-300 dark:hover:bg-teal-700'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 text-gray-700 transition-all duration-300 border rounded-full shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-gray-200/50 dark:border-gray-700/50 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-300 dark:hover:border-teal-600 hover:shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-xl" />
            </motion.button>
          </div>

          {/* Auto-play indicator */}
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isAutoPlaying
                  ? 'text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/30'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Click to {isAutoPlaying ? 'pause' : 'resume'}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;