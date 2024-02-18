
import '../../App.css';
import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Lottie from 'react-lottie';
import animationData from './Animation.json';
import {motion} from 'framer-motion'
import {useMotionValue, useTransform, animate} from 'framer-motion'
import animation2 from './Animation2.json'
import { useEffect } from 'react';
import { VscGraphLine } from "react-icons/vsc";
import { RiFundsBoxFill } from "react-icons/ri";
import { MdGpsFixed } from "react-icons/md";
import LoginForm from "../../components/LoginSignup"
import Typewriter from 'typewriter-effect';
import { FiActivity } from "react-icons/fi";


function LandingPage() {

  const [showLogin, setShowLogin] = useState(false);

  const handleGetStartedClick = () => {
    setShowLogin(true);
  };

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 500000, { duration: 5 });

    return animation.stop;
  }, []);

  return (
    <div className="LandingPage">
      <Navbar/>
      <section id='getstarted'>
          <div className="flex items-center justify-center h-screen">
          <div className='grid grid-cols-2 gap-24 place-items-center'>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mt-20 grid place-items-center"
              >
                <h1 className="text-9xl font-bold ">
                <motion.div 
                    className="w-20 h-20 p-5 my-5 mx-5 ml-44 flex items-center justify-center text-white bg-black"
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
                      <FiActivity />
                </motion.div>
                  <span className="block">Sharpe</span>
                </h1>
                {/* <p className="text-3xl my-8 text-gray-500">Invest Sharply.</p> */}
                <div className='m-5 text-4xl '>
                <Typewriter
              options={{
                strings: ['Invest Sharply.'],
                autoStart: true,
                loop: true,
              }}
            />
                </div>
                
                <button onClick={handleGetStartedClick} className="px-20 mb-36 m-5 py-4 bg-violet text-white rounded-lg shadow-lg hover:bg-violet/70 transition-colors duration-300">
                  
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
      <section id='projects'>
      <div className="flex items-center justify-center h-screen">
      <div className='grid grid-cols-2 gap-32 place-items-center'>
          <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center grid place-items-center"
              >
                <h1 className="text-5xl font-bold">
                  <span className="block">Indian markets</span>
                  <span className="block">at your fingertips</span>
                </h1>
                <p className="text-lg my-8 text-gray-500">Be the kind of investor you want to be</p>
                <div className="stats flex shadow-md border shadow-gray-800 text-gray-800 w-3/5 bg-white p-3 m-3 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800 place-items-center">
                    <VscGraphLine className='mr-5'/>Stocks
                </div>
                <div className="stats flex place-items-center shadow-md border shadow-gray-800 text-gray-800 w-3/5 bg-white p-3 m-3 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800">
                    <RiFundsBoxFill className='mr-5'/> Mutual Funds
                </div>
                <div className="stats flex place-items-center shadow-md border shadow-gray-800 text-gray-800 w-3/5 bg-white p-3 m-3 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800">
                    <MdGpsFixed className='mr-5'/>Bonds
                </div>
        </motion.div>
        <motion.div className='mb-24 grid place-items-center'>
                  <Lottie
                    options={{
                      loop: false,
                      autoplay: true,
                      animationData: animation2,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      },
                    }}
                    height={400}
                    width={400}
                  />
                  <div className="stats shadow-md border ml-10 shadow-gray-800 text-gray-800 w-2/5 bg-white p-6 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800">
            <div className="stat place-items-center">
              <div className="stat-title">Stock value</div>
              <div className="stat-value text-2xl font-bold"><motion.h1>{rounded}</motion.h1></div>
              <div className="stat-desc"></div>
            </div>
            </div>
          </motion.div> 
          </div>
          </div>
      </section> 
      {showLogin && <LoginForm />}
    </div>
  );
}

export default LandingPage;