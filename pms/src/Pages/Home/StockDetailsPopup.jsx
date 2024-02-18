import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockDetailsPopup = ({ stock, onClose }) => {
  const [niftyData, setNiftyData] = useState(null);

  useEffect(() => {
    const fetchNiftyData = async () => {
      const niftyApiOptions = {
        method: 'GET',
        url: 'https://nse-market.p.rapidapi.com/index_metrics',
        params: { index: 'NIFTY 100' },
        headers: {
          'X-RapidAPI-Key': '92561f2925mshb77ccf9e0e6bde7p14900cjsne35cf4ff6769',
          'X-RapidAPI-Host': 'nse-market.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(niftyApiOptions);
        setNiftyData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (stock.symbol === 'NIFTY 50') {
      fetchNiftyData();
    }
  }, [stock.symbol]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{stock.symbol} Details</h2>
        {niftyData ? (
          <div>
            {Object.entries(niftyData).map(([key, value]) => (
              <p key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {key === 'variation' || key === 'percentChange' || key === 'perChange30d' || key === 'perChange365d' ? value.toFixed(2) : value}
              </p>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default StockDetailsPopup;