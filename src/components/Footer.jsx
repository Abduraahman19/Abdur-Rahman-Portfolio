// components/Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-6 sm:px-12 lg:px-24 text-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://github.com/Abduraahman19" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 dark:hover:text-teal-500 hover:text-teal-500 transition-colors"
            aria-label="GitHub profile"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 dark:hover:text-teal-500 hover:text-teal-500 transition-colors"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 dark:hover:text-teal-500 hover:text-teal-500 transition-colors"
            aria-label="Twitter profile"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="mailto:abdurrahmanasim0303@gmail.com" 
            className="text-gray-700 dark:text-gray-300 dark:hover:text-teal-500 hover:text-teal-500 transition-colors"
            aria-label="Send me an email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Designed & Built with ❤️ by Abdur Rahman • © {currentYear}
        </p>
      </div>
    </footer>
  )
}

export default Footer