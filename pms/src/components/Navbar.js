import React from "react";
import { FaLink,FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import {motion} from 'framer-motion'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  return (
    <div className="Navbar justify-between flex align-middle bg-[#0c0c1d]">
      <motion.div 
          className="w-9 h-9 bg-white my-3 mx-5"
          animate={{
            scale: [1, 1, 1.3, 1.3, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}>
      </motion.div>
      <div className="Menu flex mr-5 gap-2 self-center">
          <motion.a href='#about' smooth={true} duration={500} className='px-2 py-1 rounded-md text-white'
            whileHover={{ backgroundColor: '#ffffff', color: '#000000'}}>About</motion.a>
          <motion.a href='#projects' smooth={true} duration={500} className='px-2 py-1 rounded-md text-white'
            whileHover={{ backgroundColor: '#ffffff', color: '#000000'}}>Projects</motion.a>
        </div>

    </div>
  );
}

export default Navbar;