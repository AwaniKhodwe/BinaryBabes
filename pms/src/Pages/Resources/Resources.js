import React from 'react';
import { motion } from 'framer-motion';
import news_data from './links.json'
import Navbar from '../../components/Navbar';
import VideoList from './VideoList';

function Resources(){

const Card = ({ title, link }) => {
  return (
    <motion.a
    className="stats flex place-items-center shadow-md border shadow-gray-800 text-white bg-[#8684bf] p-5 m-3 rounded-lg transition duration-300 ease-in-out hover:border hover:shadow-gray-800"
      whileHover={{ scale: 1.05 }}
      href={link}
    >
        <h2 className="text-lg font-semibold">{title}</h2>
    </motion.a>
  );
};


return (
    <div >
        <Navbar/>
        <VideoList/>
        <h1 className='text-2xl font-bold mt-10 '>News</h1>
        <div className="h-[400px] overflow-y-scroll mb-10">
  <div className="grid grid-cols-4 gap-4 m-10 rounded-lg">
    {news_data.map((card, index) => (
      <Card key={index} title={card.span} link={card.link}/>
    ))}
  </div>
</div>
    </div>
  );
}
export default Resources;
