// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// const skills = [
//   { name: 'JavaScript', level: 85, category: 'Frontend' },
//   { name: 'TypeScript', level: 75, category: 'Frontend' },
//   { name: 'React.js', level: 80, category: 'Frontend' },
//   { name: 'Next.js', level: 75, category: 'Frontend' },
//   { name: 'Vite', level: 80, category: 'Frontend' },
//   { name: 'Node.js', level: 75, category: 'Backend' },
//   { name: 'Express', level: 70, category: 'Backend' },
//   { name: 'MongoDB', level: 75, category: 'Database' },
//   { name: 'Firebase', level: 70, category: 'Database' },
//   { name: 'Tailwind CSS', level: 85, category: 'Frontend' },
//   { name: 'Bootstrap', level: 80, category: 'Frontend' },
//   { name: 'HTML/CSS', level: 90, category: 'Frontend' },
//   { name: 'Git/GitHub', level: 80, category: 'Tools' },
//   { name: 'Shopify Management', level: 85, category: 'E-commerce' },
//   { name: 'Digital Ads', level: 80, category: 'Marketing' }
// ]

// const Skills = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   })

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         when: "beforeChildren"
//       }
//     }
//   }

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { 
//         duration: 0.6,
//         ease: [0.25, 0.1, 0.25, 1]
//       }
//     }
//   }

//   const categoryColors = {
//     Frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
//     Backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
//     Database: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
//     Tools: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
//     'E-commerce': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
//     Marketing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
//   }

//   return (
//     <section 
//       id="skills" 
//       ref={ref}
//       className="py-28 px-6 sm:px-12 lg:px-24 bg-gray-50 dark:bg-gray-800"
//       aria-label="Skills section"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           <motion.h2 
//             variants={item}
//             className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 flex items-center"
//           >
//             <span className="text-teal-500 dark:text-teal-400 font-mono text-lg md:text-xl mr-4">02.</span>
//             My Skills
//             <span className="hidden md:inline-block h-px w-32 bg-teal-500 dark:bg-teal-400 ml-6"></span>
//           </motion.h2>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {/* Skills Progress Bars */}
//             <motion.div variants={item} className="space-y-8">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Proficiency</h3>
//               <div className="space-y-6">
//                 {skills.map((skill, index) => (
//                   <div key={index}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
//                       <span className="text-gray-500 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
//                       <motion.div 
//                         className="bg-teal-500 h-2.5 rounded-full" 
//                         initial={{ width: 0 }}
//                         animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
//                         transition={{ duration: 1, delay: index * 0.1 }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
            
//             {/* Skills Categories */}
//             <motion.div variants={item} className="space-y-8">
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skill Categories</h3>
              
//               <div className="flex flex-wrap gap-4">
//                 {Object.entries(categoryColors).map(([category, colorClass]) => (
//                   <motion.div 
//                     key={category}
//                     variants={item}
//                     whileHover={{ scale: 1.05 }}
//                     className={`px-4 py-2 rounded-full ${colorClass} shadow-sm hover:shadow-md transition-all`}
//                   >
//                     <span className="font-medium">{category}</span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Category Highlights */}
//               <div className="mt-8 space-y-6">
//                 {Object.entries(categoryColors).map(([category, colorClass]) => {
//                   const categorySkills = skills.filter(s => s.category === category);
//                   if (categorySkills.length === 0) return null;
                  
//                   return (
//                     <motion.div
//                       key={category}
//                       variants={item}
//                       className={`p-4 rounded-lg ${colorClass} shadow-sm`}
//                     >
//                       <h4 className="font-bold mb-2">{category}</h4>
//                       <ul className="space-y-2">
//                         {categorySkills.map((skill, i) => (
//                           <li key={i} className="flex items-center gap-2">
//                             <span className="text-sm">{skill.name}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )
//                 })}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Skills