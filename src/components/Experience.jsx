"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiBriefcase, FiAward, FiDatabase, FiTool, FiShoppingCart, FiBarChart2 } from 'react-icons/fi';

const skills = [
  { name: 'JavaScript', icon: '🟨', category: 'Frontend' },
  { name: 'TypeScript', icon: '🔷', category: 'Frontend' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '⏭️', category: 'Frontend' },
  { name: 'Vite', icon: '⚡', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'Express', icon: '🚀', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'Firebase', icon: '🔥', category: 'Database' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
  { name: 'Bootstrap', icon: '🅱️', category: 'Frontend' },
  { name: 'HTML5', icon: '📄', category: 'Frontend' },
  { name: 'CSS3', icon: '🎀', category: 'Frontend' },
  { name: 'Git', icon: '🔄', category: 'Tools' },
  { name: 'GitHub', icon: '🐙', category: 'Tools' },
  { name: 'Shopify', icon: '🛍️', category: 'E-commerce' },
  { name: 'Digital Ads', icon: '📢', category: 'Marketing' }
];

const experiences = [
  {
    role: "Web Development Intern",
    company: "Three Arrows Tech",
    period: "6-7 months",
    description: "Completed an intensive web development internship working with modern technologies.",
    highlights: [
      "Developed responsive web applications using React.js and Next.js",
      "Built RESTful APIs with Node.js and Express",
      "Worked with MongoDB for database management",
      "Implemented UI designs with Tailwind CSS and Bootstrap",
      "Deployed projects on Vercel and Netlify",
      "Collaborated using Git/GitHub for version control"
    ]
  },
  {
    role: "Shopify Store Manager",
    company: "Personal Projects",
    period: "Present",
    description: "Managed and customized Shopify stores (without coding from scratch).",
    highlights: [
      "Set up complete Shopify stores from scratch",
      "Added products, collections and managed inventory",
      "Customized themes using Shopify admin interface",
      "Configured payments and shipping options",
      "Optimized store settings for better performance",
      "Managed customer orders and fulfillment"
    ]
  },
  {
    role: "Digital Ads Specialist",
    company: "Self-Learning",
    period: "Present",
    description: "Learned and practiced digital advertising across multiple platforms.",
    highlights: [
      "Created Facebook and Instagram ad campaigns",
      "Ran Google Ads and YouTube advertising",
      "Managed TikTok promotional campaigns",
      "Researched target audiences and demographics",
      "Analyzed ad performance metrics",
      "Optimized campaigns for better results"
    ]
  }
];

const categoryIcons = {
  Frontend: <FiCode className="text-blue-500" />,
  Backend: <FiDatabase className="text-green-500" />,
  Database: <FiDatabase className="text-purple-500" />,
  Tools: <FiTool className="text-gray-500" />,
  'E-commerce': <FiShoppingCart className="text-pink-500" />,
  Marketing: <FiBarChart2 className="text-yellow-500" />
};

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const categoryColors = {
    Frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Database: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    Tools: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    'E-commerce': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    Marketing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-6 sm:px-12 lg:px-24 relative overflow-hidden"
      aria-label="Experience section"
    >
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-teal-500 opacity-10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            variants={item}
            className="flex flex-col items-center mb-16"
          >
            <motion.span
              variants={fadeIn}
              className="text-teal-500 dark:text-teal-400 font-mono text-lg mb-2"
            >
              02. Expertise
            </motion.span>
            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
            >
              Skills & Experience
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="w-20 h-1 bg-teal-500 dark:bg-teal-400 mt-4 rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skills Section */}
            <motion.div variants={item} className="space-y-8">
              <motion.div
                variants={item}
                className="flex items-center gap-4 mb-8"
              >
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                  <FiCode className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Technical Skills
                </h3>
              </motion.div>

              <motion.div
                variants={container}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${categoryColors[skill.category]} shadow-sm transition-all cursor-default`}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Skill Categories */}
              <motion.div variants={item} className="mt-12 space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Skill Categories
                </h4>
                <motion.div
                  variants={container}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {Object.entries(categoryColors).map(([category, colorClass]) => (
                    <motion.div
                      key={category}
                      variants={item}
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                      }}
                      className={`px-4 py-3 rounded-lg ${colorClass} shadow-sm transition-all`}
                    >
                      <div className="flex items-center gap-3">
                        {categoryIcons[category]}
                        <h5 className="font-medium">{category}</h5>
                      </div>
                      <p className="text-sm mt-2 ml-8">
                        {skills.filter(s => s.category === category).length} skills
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={item} className="space-y-8">
              <motion.div
                variants={item}
                className="flex items-center gap-4 mb-8"
              >
                <div className="p-3 rounded-lg bg-teal-100 dark:bg-teal-900/50">
                  <FiBriefcase className="text-teal-500 text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Professional Journey
                </h3>
              </motion.div>

              <motion.div 
                variants={container}
                className="space-y-8 relative before:absolute before:left-8 before:h-full before:w-1 before:bg-gradient-to-b before:from-teal-400 before:to-teal-600 before:dark:from-teal-500 before:dark:to-teal-700 before:rounded-full"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative pl-16 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-700 flex items-center justify-center text-white font-bold shadow-lg z-10"
                    >
                      {index + 1}
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                    >
                      {/* Glow effect */}
                      <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-teal-500 opacity-10 blur-xl" />
                      
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-teal-500 dark:text-teal-400 font-medium mb-3">
                        {exp.company} • {exp.period}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: 10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                          >
                            <span className="text-teal-500 dark:text-teal-400 mt-1">▹</span>
                            <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;