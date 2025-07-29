// components/Experience.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
]

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
]

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const categoryColors = {
    Frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Database: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    Tools: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    'E-commerce': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    Marketing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="py-28 px-6 sm:px-12 lg:px-24 bg-white dark:bg-gray-900"
      aria-label="Experience section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold justify-center text-gray-900 dark:text-white mb-12 flex items-center"
          >
            <span className="text-teal-500 dark:text-teal-400 font-mono text-lg md:text-xl mr-4">02.</span>
            <span className="text-teal-500 mr-2 dark:text-teal-400">My</span>
            Expertise
            <span className="hidden md:inline-block h-px w-32 bg-teal-500 dark:bg-teal-400 ml-6"></span>
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skills Section */}
            <motion.div variants={item} className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-teal-500 dark:text-teal-400">#</span>
                Technical Skills
              </h3>

              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${categoryColors[skill.category]} shadow-sm hover:shadow-md transition-all`}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skill Categories */}
              <div className="mt-12 space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Skill Categories
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {Object.entries(categoryColors).map(([category, colorClass]) => (
                    <motion.div
                      key={category}
                      variants={item}
                      className={`px-4 py-3 rounded-lg ${colorClass} shadow-sm`}
                      whileHover={{ y: -3 }}
                    >
                      <h5 className="font-medium">{category}</h5>
                      <p className="text-sm mt-1">
                        {skills.filter(s => s.category === category).length} skills
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div variants={item} className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-teal-500 dark:text-teal-400">#</span>
                Professional Journey
              </h3>

              <div className="space-y-8 relative before:absolute before:left-8 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-400 before:to-teal-600 before:dark:from-teal-500 before:dark:to-teal-700">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-700 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-teal-500 dark:text-teal-400 mt-1">▹</span>
                            <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience