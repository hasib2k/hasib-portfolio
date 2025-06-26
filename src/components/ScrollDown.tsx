'use client'

import { motion } from 'framer-motion'

export default function ScrollDown() {
  return (
    <div className="relative overflow-hidden">
      {/* Smooth gradient transition background */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          background: 'linear-gradient(180deg, #B7C9E2 0%, #F5F6F7 100%)'
        }}
      />
      
      {/* Scroll indicator without any background card */}
      <div className="flex justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3"
        >
          <motion.span 
            className="text-sm font-medium tracking-wide"
            style={{color: '#104F8F'}}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Scroll Down
          </motion.span>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 flex justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
            style={{borderColor: '#104F8F'}}
          >
            <motion.div 
              animate={{ y: [2, 18, 2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 rounded-full mt-2" 
              style={{backgroundColor: '#104F8F'}}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
