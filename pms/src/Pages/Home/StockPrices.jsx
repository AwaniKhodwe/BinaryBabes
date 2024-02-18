import React, { useState } from 'react';
import StockDetailsPopup from './StockDetailsPopup'; // Import the StockDetailsPopup component

const StockPrices = ({ stockPrices }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedStockPrices = showAll ? stockPrices : stockPrices.slice(0, 20);
  const [selectedStock, setSelectedStock] = useState(null);

  // Function to handle stock card click
  const handleStockCardClick = (stock) => {
    setSelectedStock(stock);
  };

  return (
    <div className='flex items-center justify-center w-10/11'>
      <div className="text-black p-4 mt-4">
        <div className="text-2xl font-bold mb-4 text-center">Today's Stock Prices</div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="py-2 px-4">Symbol</th>
              <th className="py-2 px-4">Last Price</th>
              <th className="py-2 px-4">Change</th>
              <th className="py-2 px-4">% Change</th>
            </tr>
          </thead>
          <tbody>
            {displayedStockPrices.map((stock, index) => (
              <tr key={index} className="cursor-pointer hover:bg-gray-100 border-b border-gray-300"
                onClick={() => handleStockCardClick(stock)}>
                <td className="py-2 px-4">{stock.symbol}</td>
                <td className="py-2 px-4" style={{ color: 'green' }}>{stock.lastPrice}</td>
                <td className="py-2 px-4">{stock.change}</td>
                <td className="py-2 px-4">${stock.pChange}%</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!showAll && (
          <button
            className="mt-4 bg-white text-purple-500 hover:bg-purple-300 py-2 px-4 rounded"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        )}
      </div>

      {/* Render StockDetailsPopup if a stock is selected */}
      {selectedStock && (
        <StockDetailsPopup
          stock={selectedStock}
          onClose={() => setSelectedStock(null)}
        />
      )}
    </div>
  );
};

export default StockPrices;