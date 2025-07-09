import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

const ProfessionalInvolvements = ({ userData }) => {
  const [selectedInvolvement, setSelectedInvolvement] = useState(null)
  const professionalInvolvements = userData.professionalInvolvements || []

  return (
    <>
      <section id="professional" className="relative min-h-screen py-20 overflow-hidden bg-black">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Starfield */}
          <div className="absolute inset-0">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-px bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Cosmic nebula effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-16 px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-orange-400/10 border border-orange-400/30 rounded-full px-6 py-2">
              <span className="text-orange-400 font-mono text-sm">EXPERIENCE.LOG</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-400">
              Work Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experiences and leadership roles that shaped my engineering journey
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-400 via-red-400 to-orange-400 opacity-60" />
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {professionalInvolvements.map((involvement, index) => (
                <motion.div
                  key={involvement.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-red-400 border-4 border-black shadow-2xl"
                      whileHover={{ scale: 1.2 }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-orange-400 to-red-400 animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedInvolvement(involvement)}
                  >
                    <div className="bg-black/80 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 cursor-pointer hover:border-orange-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/20">
                      {/* Header */}
                      <div className={`flex items-center justify-between mb-4 ${
                        index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                      }`}>
                        <div>
                          <h3 className="text-xl font-bold text-orange-400 mb-1">
                            {involvement.name}
                          </h3>
                          <p className="text-sm text-gray-400 mb-1">{involvement.role}</p>
                          <p className="text-sm text-gray-500">{involvement.company}</p>
                        </div>
                        <div className="bg-orange-400/10 border border-orange-400/30 rounded-full px-4 py-1 whitespace-nowrap">
                          <span className="text-orange-400 text-sm font-mono">{involvement.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {involvement.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-orange-400 mb-2">Key Highlights</h4>
                        <ul className="space-y-1">
                          {involvement.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {involvement.tags.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-orange-400/10 border border-orange-400/20 rounded text-xs text-orange-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {involvement.tags.length > 4 && (
                          <span className="px-2 py-1 bg-gray-800/60 rounded text-xs text-gray-400">
                            +{involvement.tags.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Click indicator */}
                      <div className="mt-3 text-xs text-orange-400/60">
                        Click to view details →
                      </div>
                    </div>
                  </motion.div>

                  {/* Empty space for the other side */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Terminal Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <div className="bg-black/80 backdrop-blur-sm border border-orange-400/30 rounded-lg px-6 py-3">
              <div className="flex items-center space-x-4 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-400">STATUS: PROFESSIONAL</span>
                </div>
                <div className="text-gray-400">|</div>
                <div className="text-red-400">
                  EXPERIENCES: {professionalInvolvements.length}
                </div>
                <div className="text-gray-400">|</div>
                <div className="text-yellow-400">
                  IMPACT: ENTERPRISE_LEVEL
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HUD Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Corner brackets */}
          <div className="absolute top-10 left-10 w-8 h-8 border-l-2 border-t-2 border-orange-400/50"></div>
          <div className="absolute top-10 right-10 w-8 h-8 border-r-2 border-t-2 border-orange-400/50"></div>
          <div className="absolute bottom-10 left-10 w-8 h-8 border-l-2 border-b-2 border-orange-400/50"></div>
          <div className="absolute bottom-10 right-10 w-8 h-8 border-r-2 border-b-2 border-orange-400/50"></div>
        </div>
      </section>

      {/* Professional Modal */}
      <AnimatePresence>
        {selectedInvolvement && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedInvolvement(null)}
          >
            <motion.div
              className="bg-black/90 border border-orange-400/30 rounded-2xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-400 p-1">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                      {selectedInvolvement.icon ? (
                        <img 
                          src={selectedInvolvement.icon} 
                          alt={`${selectedInvolvement.name} icon`}
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <span className="text-xl">🏢</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedInvolvement.name}</h3>
                    <p className="text-orange-400">{selectedInvolvement.role}</p>
                    <p className="text-gray-400 text-sm">{selectedInvolvement.company} • {selectedInvolvement.period}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedInvolvement(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Full Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedInvolvement.fullDescription}</p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Key Highlights</h4>
                <div className="grid gap-2">
                  {selectedInvolvement.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full" />
                      <span className="text-gray-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Achievements</h4>
                <div className="grid gap-2">
                  {selectedInvolvement.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedInvolvement.tags.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-orange-800/50 to-red-800/50 border border-orange-600/30 rounded-full text-sm text-gray-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

ProfessionalInvolvements.propTypes = {
  userData: PropTypes.shape({
    professionalInvolvements: PropTypes.array
  }).isRequired
}

export default ProfessionalInvolvements
