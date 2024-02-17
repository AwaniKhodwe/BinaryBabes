import React from 'react';
import Navbar from '../../components/Navbar';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt'

ChartJS.register(ArcElement, Tooltip, Legend);

function MyPortfolio() {

  const data = {
    labels: ['Stocks', 'Mutual Funds', 'Fixed Deposits', 'Others'],
    datasets: [
      {
        label: 'Time in hrs',
        data: [500000,200000,1000000,100000],
        backgroundColor: [
          'rgba(23,26,38,1)',
          'rgba(61,54,89,1)',
          'rgba(134,132,191,1)',
          'rgba(202,180,217,1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="MyPortfolio">
      <Navbar />
      
        <h1 className='text-2xl font-bold mt-10'>My Portfolio</h1>
        <div className='shadow-md grid grid-cols-3 place-items-center border m-10 shadow-gray-800 text-gray-800 bg-white p-6 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800'>
            <div className='grid col-span-2 w-full'>
            <Tilt className='grid grid-cols-2 p-3 m-2 bg-gray-200 rounded-lg '>
              <h1 className='text-lg font-bold text-[#3D3659]'>Stocks</h1>
              <h3 className='text-md text-[#8684BF] font-bold'>Rs.500000</h3>
            </Tilt>
            <Tilt className='grid grid-cols-2 p-3 m-2 bg-gray-200 rounded-lg'>
              <h1 className='text-lg font-bold text-[#3D3659]'>Mutual Funds</h1>
              <h3 className='text-md text-[#8684BF] font-bold'>Rs.200000</h3>
            </Tilt>
            <Tilt className='grid grid-cols-2 p-3 m-2 bg-gray-200 rounded-lg'>
              <h1 className='text-lg font-bold text-[#3D3659]'>Fixed Deposit</h1>
              <h3 className='text-md text-[#8684BF] font-bold'>Rs.1000000</h3>
            </Tilt>
            <Tilt className='grid grid-cols-2 p-3 m-2 bg-gray-200 rounded-lg'>
              <h1 className='text-lg font-bold text-[#3D3659]'>Others</h1>
              <h3 className='text-md text-[#8684BF] font-bold'>Rs.100000</h3>
            </Tilt>
            </div>
            <div className='flex justify-center items-center w-2/3'>
                <Doughnut data={data} />
            </div>
        </div>
        <div className="flex m-10 justify-between">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#3d3659] hover:bg-[#1f1a26] text-white font-bold py-2 px-4 rounded"
      >
        Invest in Stocks
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#3d3659] hover:bg-[#1f1a26] text-white font-bold py-2 px-4 rounded"
      >
        Invest in Mutual Funds
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#3d3659] hover:bg-[#1f1a26] text-white font-bold py-2 px-4 rounded"
      >
        Invest in Fixed Deposits
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#3d3659] hover:bg-[#1f1a26] text-white font-bold py-2 px-4 rounded"
      >
        Invest in Others
      </motion.button>
      </div>
    </div>
  );
}

export default MyPortfolio;
