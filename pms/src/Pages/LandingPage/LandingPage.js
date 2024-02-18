// LandingPage.js

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Lottie from 'react-lottie';
import animationData from './Animation.json';
import LoginForm from '../../components/LoginSignup'; // Import LoginForm component
import { motion } from 'framer-motion';

function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);

  const handleGetStartedClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="LandingPage">
      <Navbar />
      <section id='getstarted'>
        <div className="flex items-center justify-center h-screen">
          <div className='grid grid-cols-2 gap-24'>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-20"
            >
              <h1 className="text-7xl font-bold">
                <span className="block">Portfolio</span>
                <span className="block">Management</span>
              </h1>
              <p className="text-lg my-8 text-gray-500">Your financial journey starts here.</p>
              <button onClick={handleGetStartedClick} className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
                Get Started
              </button>
            </motion.div>
            <motion.div className='mb-20'>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                height={400}
                width={400}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {showLogin && <LoginForm />}
    </div>
  );
}

export default LandingPage;
