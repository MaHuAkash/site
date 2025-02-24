'use client';
import { motion } from 'framer-motion'
import { ParticleBackground } from '../../components/acernityui/ParticleBackground'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMessageSquare } from 'react-icons/fi'


const colorConfig = {
  midnightPurple: {
    gradient: 'from-gray-900 via-purple-900/80 to-gray-900',
    textGradient: 'from-purple-300 to-amber-300',
    border: 'border-purple-400/30',
    iconColor: 'text-purple-300',
    methodologyGradient: 'from-purple-900/40 to-amber-900/20',
    accent: 'amber-300',
    skillCard: 'bg-gradient-to-br from-purple-900/20 to-amber-900/10'
  }
};

const colorScheme = colorConfig.midnightPurple;

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen bg-gradient-to-b ${colorScheme.gradient} text-amber-50 py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden`}
    >
      <ParticleBackground />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Animated Quote Banner */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 relative group"
        >
          <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-sm rounded-xl transform group-hover:scale-105 transition-all duration-300" />
          <div className="relative p-6 text-center border ${colorScheme.border} rounded-xl">
            <FiMessageSquare className={`text-3xl mx-auto mb-4 ${colorScheme.iconColor}`} />
            <p className="text-xl font-medium text-purple-100/90 italic">
              "Great things in business are never done by one person. They're done by a team of people."
            </p>
            <p className="mt-4 text-amber-300">- Let's Build Something Amazing Together</p>
          </div>
        </motion.div>

        {/* Page Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-amber-300 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-lg text-purple-100/80 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-16 px-4 lg:px-8">
          {/* Contact Form */}
          <motion.form
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <label className="block text-sm font-medium text-purple-100 mb-3">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                className={`w-full bg-purple-900/20 backdrop-blur-sm rounded-xl px-5 py-4 ${colorScheme.border} border focus:ring-2 focus:ring-purple-300 outline-none transition-all placeholder-purple-200/50`}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-100 mb-3">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                className={`w-full bg-purple-900/20 backdrop-blur-sm rounded-xl px-5 py-4 ${colorScheme.border} border focus:ring-2 focus:ring-purple-300 outline-none transition-all placeholder-purple-200/50`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-100 mb-3">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows={5}
                className={`w-full bg-purple-900/20 backdrop-blur-sm rounded-xl px-5 py-4 ${colorScheme.border} border focus:ring-2 focus:ring-purple-300 outline-none transition-all placeholder-purple-200/50`}
                placeholder="Write your message here..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-gradient-to-r from-purple-500 to-amber-500 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-purple-500/30 transition-all`}
            >
              Send Message <FiSend className="text-lg animate-pulse" />
            </motion.button>
          </motion.form>

          {/* Social Links Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-10"
          >
            {/* Social Cards */}
            <div className="space-y-6 w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-2xl ${colorScheme.skillCard} backdrop-blur-sm border ${colorScheme.border} cursor-pointer group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <FiMail className={`text-4xl mx-auto mb-4 transition-colors ${colorScheme.iconColor} group-hover:text-amber-300`} />
                <h3 className="text-xl font-medium text-center group-hover:text-amber-200 transition-colors">Email Me</h3>
                <p className="text-purple-100/80 text-center mt-2 group-hover:text-purple-100 transition-colors">akashlamsal02@gmail.com</p>
              </motion.div>

              <motion.a
                href="https://github.com/MaHuAkash"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-2xl ${colorScheme.skillCard} backdrop-blur-sm border ${colorScheme.border} cursor-pointer group relative overflow-hidden block`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <FiGithub className={`text-4xl mx-auto mb-4 transition-colors ${colorScheme.iconColor} group-hover:text-gray-100`} />
                <h3 className="text-xl font-medium text-center group-hover:text-gray-100 transition-colors">GitHub</h3>
                <p className="text-purple-100/80 text-center mt-2 group-hover:text-purple-100 transition-colors">@MaHuAkash</p>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/algo-ace-513a47346/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-2xl ${colorScheme.skillCard} backdrop-blur-sm border ${colorScheme.border} cursor-pointer group relative overflow-hidden block`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <FiLinkedin className={`text-4xl mx-auto mb-4 transition-colors ${colorScheme.iconColor} group-hover:text-[#0A66C2]`} />
                <h3 className="text-xl font-medium text-center group-hover:text-blue-200 transition-colors">LinkedIn</h3>
                <p className="text-purple-100/80 text-center mt-2 group-hover:text-purple-100 transition-colors">@Alog-ace</p>
              </motion.a>
            </div>

            {/* Additional Contact Banner */}
          </motion.div>
        </div>

    
      </div>
    </motion.div>
  )
}

export default ContactPage