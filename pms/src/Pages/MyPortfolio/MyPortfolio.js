import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Doughnut } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Comparison from './Comparison.gif';
import Illustration from './Illustration.gif';
import { VscGraphLine } from "react-icons/vsc";
import { RiFundsBoxFill } from "react-icons/ri";
import { MdGpsFixed } from "react-icons/md";
import Stocks from '../../components/stocks_choose';
import Funds from '../../components/mfunds_choose';
import Bonds from '../../components/bonds_choose';
import VerticalAlignTopRoundedIcon from '@mui/icons-material/VerticalAlignTopRounded';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

function MyPortfolio() {
  const [showStocksData, setShowStocksData] = useState(false);
  const [showMFundsData, setShowMFundsData] = useState(false);
  const [showBondsData, setShowBondsData] = useState(false);
  const [file, setFile] = useState(null);
  const [sums, setSums] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please choose a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/calccsv/upload-csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSums(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const toggleStocksData = () => {
    setShowStocksData(!showStocksData);
  };

  const toggleMFundsData = () => {
    setShowMFundsData(!showMFundsData);
  };

  const toggleBondsData = () => {
    setShowBondsData(!showBondsData);
  };

  
  const totalStocks = sums ? parseInt(sums.sumBonds) : 0;
  const totalMutualFunds = sums ? parseInt(sums.sumEquity) : 0;
  const totalBonds = sums ? parseInt(sums.sumMutualFunds) : 0;
  


  const data = {
    labels: ['Stocks', 'Mutual Funds', 'Bonds'],
    datasets: [
      {
        label: 'Amount in Rs',
        data: [totalStocks, totalMutualFunds, totalBonds],
        backgroundColor: [
          'rgba(23,26,38,1)',
          'rgba(61,54,89,1)',
          'rgba(134,132,191,1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="MyPortfolio">
      <Navbar />
      <div className="flex justify-between items-end">
        <h1 className="text-2xl font-bold mt-10 ml-10">My Portfolio</h1>
        <div>
        <div style={{ position: 'relative' }}>
  <input id="file-upload" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
  <button className='bg-violet text-white w-24 h-8 rounded-md m-4' onClick={() => document.getElementById('file-upload').click()}>Import CSV</button>
</div>
      {/* {sums && (
        <div>
          <p>Total Stocks: {totalStocks}</p>
          <p>Total Mutual Funds: {totalMutualFunds}</p>
          <p>Total Bonds: {totalBonds}</p>
        </div>
      )} */}
      </div>
      </div>
      <div className='shadow-md grid grid-cols-3 place-items-center border m-10 shadow-gray-800 text-gray-800 bg-white p-6 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800'>
        <div className='grid col-span-2 w-full'>
          <Tilt className='grid grid-cols-2 p-3 m-2 bg-gray-200 rounded-lg '>
            <h1 className='text-lg font-bold text-[#3D3659]'>Stocks</h1>
            <h3 className='text-md text-[#8684BF] font-bold'>Rs.{totalStocks}</h3>
          </Tilt>
          <Tilt className='grid grid-cols-2 p-3 m-2 bg-gray-200 rounded-lg'>
            <h1 className='text-lg font-bold text-[#3D3659]'>Mutual Funds</h1>
            <h3 className='text-md text-[#8684BF] font-bold'>Rs.{totalMutualFunds}</h3>
          </Tilt>
          <Tilt className='grid grid-cols-2 p-3 m-2 bg-gray-200 rounded-lg'>
            <h1 className='text-lg font-bold text-[#3D3659]'>Bonds</h1>
            <h3 className='text-md text-[#8684BF] font-bold'>Rs.{totalBonds}</h3>
          </Tilt>
        </div>
        <div className='flex justify-center items-center w-2/3'>
          <Doughnut data={data} />
        </div>
      </div>
      <div className=" m-10  justify-between grid grid-cols-3 gap-5 place-items-center">
        <motion.button
          onClick={toggleStocksData}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#3d3659] hover:bg-[#1f1a26] text-white font-bold p-5 rounded-lg w-full border-2 border-black flex items-center"
        >
          <VscGraphLine size={40} className='mx-5'/>
          Invest in Stocks
        </motion.button>
        <motion.button
          onClick={toggleMFundsData}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#3d3659] hover:bg-[#1f1a26] text-white font-bold p-5 rounded-lg w-full border-2 border-black flex items-center"
        >
          <RiFundsBoxFill size={40} className='mx-5'/>
          Invest in Mutual Funds
        </motion.button>
        <motion.button
          onClick={toggleBondsData}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#3d3659] hover:bg-[#1f1a26] text-white font-bold p-5 rounded-lg w-full border-2 border-black flex items-center"
        >
          <MdGpsFixed size={40} className='mx-5'/>
          Invest in Bonds
        </motion.button>
      </div>
      {showStocksData && (
        <div className='shadow-md  border m-10 shadow-gray-800 text-gray-800 bg-white p-6 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800'>
          <Stocks />
        </div>
      )}
      {showMFundsData && (
        <div className='shadow-md  border m-10 shadow-gray-800 text-gray-800 bg-white p-6 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800'>
          <Funds />
        </div>
      )}
      {showBondsData && (
        <div className='shadow-md  border m-10 shadow-gray-800 text-gray-800 bg-white p-6 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800'>
          <Bonds />
        </div>
      )}
<div className='shadow-md place-items-center border m-10 shadow-gray-800 text-gray-800 bg-lightpurple p-6 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800'>
  <div className='w-full h-48'>
    <div className=''>
      <p className='text-center text-2xl font-bold p-0 text-white'>Set Stop-Loss Value</p>
    </div>

    <div>
      <p className="mt-2 text-center text-white">Think of a stop loss like a safety net. Before you even buy a stock, you set a price. If the stock's price falls to that level or below it, the safety net kicks in, and your stock is automatically sold to prevent further losses. You can take a demo for yourself!
      Put in a random value for a stock, we have set a stop loss value. If the stock value falls below the stop loss value, we will notify you about it!
      </p>
    </div>
    <div className="flex justify-center items-center mt-2">
  <input type="number" className="border border-gray-300 rounded-lg p-2 mr-2 text-center" />
  <button className="bg-violet hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Try Out
  </button>
</div>

  </div>
</div>

      <div className="flex justify-center p-10 my-16 mx-10 gap-24 bg-[#a5a3d6] rounded-lg">
        <motion.div
          className="relative w-72 h-48 bg-cover bg-center flex items-center justify-center rounded-xl"
          style={{ backgroundImage: `url(${Illustration})` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white text-2xl font-bold z-10">Progress</h2>
          <div className="absolute inset-0 bg-black opacity-60 z-0 rounded-xl "></div>
        </motion.div>
        <motion.div
          className="relative w-72 h-48 bg-cover bg-center flex items-center justify-center rounded-xl"
          style={{ backgroundImage: `url(${Comparison})` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-white text-2xl font-bold z-10">Comparison</h2>
          <div className="absolute inset-0 bg-black opacity-50 z-0 rounded-xl"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default MyPortfolio;
